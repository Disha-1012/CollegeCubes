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
    | string
    | {
        average: number;   // ✅ FIX: was string → number
        highest?: number;
      }
    | null;

  type: string;
  rating?: number;
  review_count?: number;

   reviews?: Review[]; // ✅ FIX: ADD THIS
}