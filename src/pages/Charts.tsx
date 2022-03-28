import React from 'react';
import { Area, AreaChart, LabelList, Legend, XAxis } from 'recharts';
import { useSprint } from '../context/SprintContext';

const Charts: React.FC = () => {
    const sprint = useSprint();

    return (
        <>
            <p>{sprint.name}</p>
            <p>Charts here</p>
            <AreaChart width={1400} height={400} data={sprint.days}>
                <XAxis dataKey="day" />
                <Legend verticalAlign="top" />
                <Area name="Total Points Remaining" dataKey="totalPointsRemaining" stroke="blue" fill="#FFFFFF" >
                    <LabelList dataKey="totalPointsRemaining" position="top" fill="blue"/>
                </Area>
                <Area name="Total Points Done" dataKey="totalPointsDone" fill="green" fillOpacity={0.2}>
                <LabelList dataKey="totalPointsDone" position="top" fill="green"/>
                </Area>
            </AreaChart>
        </>
    );
}

export default Charts;
