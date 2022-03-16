import React from 'react';
import { Line, LineChart, XAxis } from 'recharts';
import { useSprint } from '../context/SprintContext';

const Charts: React.FC = () => {
    const sprint = useSprint();

    return (
        <>
            <p>{sprint.name}</p>
            <p>Charts here</p>
            <LineChart width={1400} height={400} data={sprint.days}>
                <XAxis dataKey="day" />
                <Line type="monotone" dataKey="totalPointsRemaining" stroke="#8884d8" />
            </LineChart>
        </>
    );
}

export default Charts;
