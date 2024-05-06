//create a dark mode/light mode theme provider
//this will be used to wrap the app in the index.tsx file
import {createContext, useState} from "react";
import {getUser} from "../mockApi/MockApi";
import {IUser} from "../Interfaces/User";

export const CurrentUserContext = createContext({
    user: {id: -1, username: 'guest'}, toggleUser: (id: number) => {
        console.log("default")
    }
});

function CurrentUserProvider(props: any) {
    const [user, setUser] = useState<IUser>({id: -1, username: 'guest'});
    const toggleUser = async (id: number) => {
        setUser(await getUser(id));
    }
    const logout = () => {
        setUser({id: -1, username: 'guest'});
    }

    return (
        <CurrentUserContext.Provider value={{user, toggleUser}}>
            {props.children}
        </CurrentUserContext.Provider>
    )
}

export default CurrentUserProvider;