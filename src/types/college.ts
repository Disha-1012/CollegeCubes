export interface Review {
    id: string;
    user: string;
    comment: string;
    rating: number;
}
export interface College {
    id: string;
    college_name: string;
    location: string;
    best_suit_for: string;
    fees: string;
    placement:
    string |
    {
        average: string;
        highest?: string;
    }
    |
    null;
    type: string;
    rating?: number;
    review_count?: number;
}