import { Line, Circle } from 'rc-progress';
import { Fragment } from 'react';

export const Skills = () => {
    return (
        <div className='skills-table'>

            <div className='skills-table-row'>
                <div className='skills-table-col'>
                    Javascript - 4 Years
                    <Line percent="70" strokeWidth="1" strokeColor="green" trailWidth="0.5" trailColor="grey" />
                </div>

                <div className='skills-table-col'>
                    Java - 4 Years
                    <Line percent="70" strokeWidth="1" strokeColor="green" trailWidth="0.5" trailColor="grey" />
                </div>
            </div>
        </div>
    )
}