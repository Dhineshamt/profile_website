import { Fragment } from "react"
import ExperienceAndEducationContainer from "./ExperienceAndEducationContainer"

export const ExperienceAndEducation = () => {
    let experience = [
        { 'year': 2021, 'company': 'Fidelity', 'role': 'Lead Softtware engineer' },
        { 'year': 2020, 'company': 'Fidelity', 'role': 'Softtware engineer' },]
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