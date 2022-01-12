import React, {Component} from "react"; // To Do - Learn
import { Fragment } from "react/cjs/react.production.min";
import { Skills } from "./Skills";
import { Home } from "./Home"
import { Certification } from "./Certification";
import { ExperienceAndEducation } from "./ExperienceAndEducation";
import { Projects } from "./Projects";

export const Header = () => {
    return (
        <Fragment>
            <Home />
            <Skills />
            <Certification />
            <ExperienceAndEducation />
            <Projects />
        </Fragment>         // To Do - Learn
    )

}