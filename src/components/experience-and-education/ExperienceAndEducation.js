import { Fragment } from "react"
import ExperienceAndEducationContainer from "./ExperienceAndEducationContainer"

export const ExperienceAndEducation = () => {
    let experience = [
        { 'year': 'Oct 2015 - Present', 'company': 'Fidelity Investments - Chennai', 'role': 'Lead Software engineer' },
        { 'year': 'Aug 2011 - Oct 2015', 'company': 'Aon Hewitt - Chennai', 'role': 'Functional System Analyst' }]
    return (
        <Fragment>
            {
                experience.map((data, key) => {
                   data.showOrHideConnector = !(key === experience.length - 1);
                    return (
                        <ExperienceAndEducationContainer {...data} />
                    )
                })
            }
        </Fragment>
    )
}