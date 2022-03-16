import React, { createContext, useContext, useEffect, useState } from "react";
import { ISprint } from '../@types/sprint';

const defaultState: ISprint = {
    id: 0,
    name: '',
    boardId: 0,
    length: 0,
    totalPoints: 0,
    totalGoalPoints: 0,
    days: [{
        id: 0,
        dateCode: 0,
        sprintId: 0,
        day: '',
        totalPointsDone: 0,
        totalPointsRemaining: 0,
        totalGoalPointsRemaining: 0
    }]
};

const SprintContext = createContext<ISprint>(defaultState);

export const SprintProvider: React.FC = ({ children }) => {
    const [sprint, setSprint] = useState(defaultState);

    // Fetch call will happen here, fake data for now

    const fakeSprint = {
        id: 5,
        name: 'Team 418 Sprint 11',
        boardId: 123,
        length: 11,
        totalPoints: 18.5,
        totalGoalPoints: 8,
        days: [
            {
                id: 1,
                dateCode: 20220215,
                sprintId: 5,
                day: 'Tuesday',
                totalPointsDone: 0,
                totalPointsRemaining: 18.5,
                totalGoalPointsRemaining: 8
            },{
                id: 2,
                dateCode: 20220216,
                sprintId: 5,
                day: 'Wednesday',
                totalPointsDone: 0,
                totalPointsRemaining: 18.5,
                totalGoalPointsRemaining: 8
            },{
                id: 3,
                dateCode: 20220217,
                sprintId: 5,
                day: 'Thursday',
                totalPointsDone: 1,
                totalPointsRemaining: 17.5,
                totalGoalPointsRemaining: 8
            },{
                id: 4,
                dateCode: 20220218,
                sprintId: 5,
                day: 'Friday',
                totalPointsDone: 4,
                totalPointsRemaining: 14.5,
                totalGoalPointsRemaining: 8
            },{
                id: 5,
                dateCode: 20220221,
                sprintId: 5,
                day: 'Monday',
                totalPointsDone: 4,
                totalPointsRemaining: 14.5,
                totalGoalPointsRemaining: 8
            },{
                id: 6,
                dateCode: 20220222,
                sprintId: 5,
                day: 'Tuesday',
                totalPointsDone: 7,
                totalPointsRemaining: 12,
                totalGoalPointsRemaining: 8
            },{
                id: 7,
                dateCode: 20220223,
                sprintId: 5,
                day: 'Wednesday',
                totalPointsDone: 10,
                totalPointsRemaining: 12,
                totalGoalPointsRemaining: 8
            },{
                id: 8,
                dateCode: 20220224,
                sprintId: 5,
                day: 'Thursday',
                totalPointsDone: 15,
                totalPointsRemaining: 7,
                totalGoalPointsRemaining: 3
            },{
                id: 9,
                dateCode: 20220225,
                sprintId: 5,
                day: 'Friday',
                totalPointsDone: 19,
                totalPointsRemaining: 4,
                totalGoalPointsRemaining: 0
            },{
                id: 10,
                dateCode: 20220228,
                sprintId: 5,
                day: 'Monday',
                totalPointsDone: 19,
                totalPointsRemaining: 6,
                totalGoalPointsRemaining: 0
            },{
                id: 11,
                dateCode: 20220301,
                sprintId: 5,
                day: 'Tuesday',
                totalPointsDone: 23.6,
                totalPointsRemaining: 4,
                totalGoalPointsRemaining: 0
            }
        ]
    };

    useEffect(() => {
        setSprint(fakeSprint);
    }, []);

    return (
        <SprintContext.Provider value={sprint}>
            {children}
        </SprintContext.Provider>
    );
};

export const useSprint = () => useContext(SprintContext);
