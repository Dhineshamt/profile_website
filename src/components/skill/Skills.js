import { Fragment } from 'react';
import SkillRow from './SkillRow';

export const Skills = () => {
    const skills = [
        [{ skill: 'Javascript', percentage: 70 }, { skill: 'React', percentage: 70 }],
        [{ skill: 'Java', percentage: 50 }, { skill: 'CSS', percentage: 60 }]];
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