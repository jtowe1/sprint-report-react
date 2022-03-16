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
        totalPointsDone: 0,
        totalPointsRemaining: 0,
        totalGoalPointsDone: 0
    }]
};

const SprintContext = createContext<ISprint>(defaultState);

export const SprintProvider: React.FC = ({ children }) => {
    const [sprint, setSprint] = useState(defaultState);

    // Fetch call will happen here, fake data for now

    const fakeSprint = {
        id: 5,
        name: 'Team 418 Sprint 44',
        boardId: 123,
        length: 10,
        totalPoints: 20,
        totalGoalPoints: 8,
        days: [{
            id: 0,
            dateCode: 20220316,
            sprintId: 5,
            totalPointsDone: 5,
            totalPointsRemaining: 15,
            totalGoalPointsDone: 2
        }]
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
