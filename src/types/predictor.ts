import { College } from "./college";
export interface PredictorInput {

    exam: string;
    rank: number;
}
export interface PredictionResult {

    college: College;
    chance: string;
}
