
export interface IRating {
    userId: number;
    rating: number;
    comment: string;
}

export class Rating implements IRating {
    userId: number;
    rating: number;
    comment: string;

    constructor(rating: IRating) {
        this.userId = rating.userId;
        this.rating = rating.rating;
        this.comment = rating.comment;
    }
}