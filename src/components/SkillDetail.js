import { Line} from 'rc-progress';

const SkillDetail = (props) => {
    return (
        <div className='table-body-cell skills'>
            <div className='text-bar-distance'>
                {props.skill}
            </div>
            <Line percent={props.percentage} strokeWidth="0.9" strokeColor="orange" trailWidth="0.5" trailColor="grey" />
        </div>
    )
}

export default SkillDetail;