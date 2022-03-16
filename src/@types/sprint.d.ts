import { Day } from "./day";

export interface ISprint {
    id: number;
    name: string;
    boardId: number;
    length: number;
    totalPoints: number;
    totalGoalPoints: number;
    days: Day[];
}