import { Fragment } from "react/cjs/react.production.min";
import ConnectorLine from "./ConnectorLine";

const ExperienceAndEducationContainer = (props) => {
    return (
        <Fragment>
            <div className="exp-grid-container experience">
            <div className="exp-image">
                    <span>{props.year}</span></div>
                <div className="exp-company">{props.company}</div>
                
                <div className="exp-role">{props.role}</div>
            </div>

            <div>
                {props.showOrHideConnector && <ConnectorLine />}
            </div>

        </Fragment>
    )
}

export default ExperienceAndEducationContainer;