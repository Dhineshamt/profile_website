import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Home } from "./components/Home";
import { ErrorPage } from "./components/ErrorPage";
import { Skills } from "./components/Skills";
import { ExperienceAndEducation } from "./components/ExperienceAndEducation";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Certification } from "./components/Certification";

//To Do:  Learn Hooks in 16.4 or 16.8. Learn functional component vs class component.
export const Routing = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="skills" element={<Skills />}/>
                <Route path='certification' element={<Certification />}/>
                <Route path="experience" element={<ExperienceAndEducation />}/>
                <Route path="projects" element={<Projects />}/>
                <Route path="contact" element={<Contact />}/>
                <Route path="*" element={<ErrorPage />}/>              
            </Routes>
    )
}
