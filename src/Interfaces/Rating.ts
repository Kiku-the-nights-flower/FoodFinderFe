import {IUser} from "./User";

export interface IRating {
    id: number;
    user: IUser;
    rating: number;
    comment: string;
}

export class Rating implements IRating {
    id: number;
    user: IUser;
    rating: number;
    comment: string;

    constructor(rating: IRating) {
        this.id = rating.id;
        this.user = rating.user;
        this.rating = rating.rating;
        this.comment = rating.comment;
    }
}