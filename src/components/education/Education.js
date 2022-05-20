import { Fragment } from "react"
import EducationContainer from "./EducationContainer"

export const Education = () => {
    let experience = [
        { 'year': 'Jun 2008 - Apr 2011', 'institute': 'JJ College of Engineering Technology, Trichy', 'course': 'Master Of Computer Application - Secured 83%', 'score': '83%' },
        { 'year': 'Jun 2005 - Apr 2008', 'institute': 'Bishop Heber College - Trichy', 'course': 'BSc(Chemistery) - Secured 61%', 'score': '61%' },
        ]
    return (
        <Fragment>
            {
                experience.map((data, key) => {
                   data.showOrHideConnector = !(key === experience.length - 1);
                    return (
                        <EducationContainer {...data} />
                    )
                })
            }
        </Fragment>
    )
}