import React, { Component } from "react";
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import { Home } from "./components/Home";
import { ErrorPage } from "./components/ErrorPage";
import { Skills } from "./components/Skills";
import { ExperienceAndEducation } from "./components/ExperienceAndEducation";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Menu } from "./components/Menu";
import { Certification } from "./components/Certification";
import { Main } from "./Main";

//To Do:  Learn Hooks in 16.4 or 16.8. Learn functional component vs class component.
export const Routing = () => {
    return (

        <BrowserRouter>
            {/* <Menu /> */}
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route path="home" element={<Home />}></Route>
                    <Route path="skills" element={<Skills />}></Route>
                    <Route path='certification' element={<Certification />}></Route>
                    <Route path="experience" element={<ExperienceAndEducation />}></Route>
                    <Route path="projects" element={<Projects />}></Route>
                    <Route path="contact" element={<Contact />}></Route>
                    <Route path="*" element={<ErrorPage />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>

    )
}
