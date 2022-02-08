import { Line, Circle } from 'rc-progress';
import { Fragment } from 'react';
import SkillDetail from './SkillDetail';
import SkillRow from './SkillRow';

export const Skills = () => {
    const skills = [
        [{ skill: 'Javascript', percentage: 5 }, { skill: 'Reacr', percentage: 10 }],
        [{ skill: 'Java', percentage: 50 }, { skill: 'React', percentage: 55 }]];
    return (
        <Fragment>
            <div id='resp-table-caption'>gsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfg Header</div>
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