import SkillDetail from "./SkillDetail";
import { Line, Circle } from 'rc-progress';

const SkillRow = (props) => {
    return props.skillSet.map((data, key) => {
        return (
            <div className='table-body-cell skills'>
                <div className='text-bar-distance'>
                    {data.skill}
                </div>
                <Line percent={data.percentage} strokeWidth="1" strokeColor="orange" trailWidth="0.5" trailColor="grey" />
            </div>
        )
    })
}

export default SkillRow;