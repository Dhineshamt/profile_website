import { Fragment } from 'react';
import SkillRow from './SkillRow';

export const Skills = () => {
    const skills = [
        [{ skill: 'Javascript', percentage: 100 }, { skill: 'Typescript', percentage: 100 }],
        [{ skill: 'ReactJS', percentage: 100 }, { skill: 'NodeJS', percentage: 100 }],
        [{ skill: 'HTML5', percentage: 100}, {skill: 'CSS3', percentage: 100}],
        [{skill: 'AWS', percentage: 100}, {skill: 'Java', percentage: 100}],
        [{skill: 'Redux', percentage: 100}, {skill: 'ExpressJS', percentage: 100}],
        [{skill: 'Jenkins', percentage: 100}, {skill: 'Docker', percentage: 100}],
        [{skill: 'Cypress', percentage: 100}, {skill: 'Protractor', percentage: 100}]];

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