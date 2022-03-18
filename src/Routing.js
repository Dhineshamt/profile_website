import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Home } from "./components/Home";
import { ErrorPage } from "./components/ErrorPage";
import { Skills } from "./components/skill/Skills";
import { ExperienceAndEducation } from "./components/experience-and-education/ExperienceAndEducation";
import { Certification } from "./components/certification/Certification";

//To Do:  Learn Hooks in 16.4 or 16.8. Learn functional component vs class component.
export const Routing = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="skills" element={<Skills />}/>
                <Route path='certification' element={<Certification />}/>
                <Route path="experience" element={<ExperienceAndEducation />}/>
                <Route path="*" element={<ErrorPage />}/>              
            </Routes>
    )
}
