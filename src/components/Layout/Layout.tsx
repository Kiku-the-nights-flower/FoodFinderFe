import React, {useContext, useEffect} from 'react';
import styles from './Layout.module.scss';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import RecipeIndex from "../../sites/RecipeIndex/RecipeIndex";
import RecipeDetail from "../../sites/RecipeDetail/RecipeDetail";
import {CurrentUserContext} from "../../providers/CurrentUserContext";
import Library from "../../sites/Library/Library";
import {getUsers} from "../../mockApi/MockApi";
import {IUser} from "../../Interfaces/User";
import RecipeEdit from "../../sites/RecipeEdit/RecipeEdit";

export function Layout() {
    const userContext = useContext(CurrentUserContext);
    const [users, setUsers] = React.useState<IUser[]>([]);

    useEffect(() => {
        getUsers().then((users) => {
            setUsers(users);
        });
    }, []);

    const handleUserChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        userContext.toggleUser(parseInt(e.target.value));
    }

    return (
        <Router>
            <div className={styles.Layout}>
                <nav className={styles.Header}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        {userContext.user.id !== -1 ? <li><Link to="/library">Your library</Link></li> : null}
                    </ul>
                    <select onChange={handleUserChange}>
                        {users ? users.map((user) => {
                            return <option key={user.id} value={user.id}>{user.username}</option>
                        }) : null}
                    </select>
                </nav>
                <Routes>
                    <Route path={"/"} Component={RecipeIndex}/>
                    <Route path={"/recipes"}/>
                    <Route path={"/recipes/:id"} Component={RecipeDetail}/>
                    <Route path={"/recipes/:id/edit"} Component={RecipeEdit}/>
                    <Route path={"/library"} Component={Library}/>
                </Routes>
            </div>
        </Router>
    )
}