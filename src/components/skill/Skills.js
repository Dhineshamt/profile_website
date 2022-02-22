import { Fragment } from 'react';
import SkillRow from './SkillRow';

export const Skills = () => {
    const skills = [
        [{ skill: 'Javascript', percentage: 5 }, { skill: 'Reacr', percentage: 10 }],
        [{ skill: 'Java', percentage: 50 }, { skill: 'React', percentage: 55 }]];
    return (
        <Fragment>
            <div id='resp-table-caption'>Key Skills</div>
            <div id='resp-table' >
                <div id='resp-table-body'>
                    {
                        skills.map((row, key) => {
                            return (
                                <div className="resp-table-row">
                                    <SkillRow key={key} skillSet={row} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Fragment>
    )
}