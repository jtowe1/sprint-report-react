import React from 'react';
import { useSprint } from '../context/SprintContext';

const Charts: React.FC = () => {
    const sprint = useSprint();

    return (
        <>
            <p>{sprint.name}</p>
            <p>Charts here</p>
        </>
    );
}

export default Charts;
