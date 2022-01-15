import React, { Component } from "react";
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import {Home} from "./components/Home";
import {ErrorPage} from "./components/ErrorPage";
import { Skills } from "./components/Skills";
import { ExperienceAndEducation } from "./components/ExperienceAndEducation";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

//To Do:  Learn Hooks in 16.4 or 16.8. Learn functional component vs class component.
export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/home" element={<Home />}></Route>
                <Route exact path="/skills" element={<Skills />}></Route>
                <Route exact path="/experience" element={<ExperienceAndEducation />}></Route>
                <Route exact path="/projects" element={<Projects />}></Route>
                <Route exact path="/contact" element={<Contact />}></Route>
                <Route element={<ErrorPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
