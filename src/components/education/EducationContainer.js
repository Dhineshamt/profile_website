import { Fragment } from "react/cjs/react.production.min";
import ConnectorLine from "./ConnectorLine";

const EducationContainer = (props) => {
    return (
        <Fragment>
            <div className="exp-grid-container experience">
            <div className="exp-image">
                    <span>{props.year}</span></div>
                <div className="exp-company">{props.institute}</div>
                
                <div className="exp-role">{props.course}</div>
                

            </div>

            <div>
                {props.showOrHideConnector && <ConnectorLine />}
            </div>

        </Fragment>
    )
}

export default EducationContainer;