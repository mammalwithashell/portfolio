import { useState } from "react";
import ProjectModal from "./ProjectModal.jsx";
const Portfolio = () => {
    return (
        <div className="text-white bg-lightBrown pl-14">
            <h1 className="font-bold text-6xl mt-1 ">Projects & Work</h1>
            <div className="border rounded-lg border-sand p-4 mt-[263px] space-y-3 w-auto max-w-6xl h-[351px]">
                <h2 className="text-2xl font-semibold">Take a Look at My Work</h2>
                <p className="w-auto max-w-lg mt-[32px] ">I can build you a website, integrate an api, build a custom api, automate workflows, write google App Scripts, Configure Databases, Extract Transform and Load data into the cloud provider of your choice</p>
                <div><a className="rounded bg-sand text-lightBrown p-1">Download CV</a></div>

            </div>
            <ProjectModal/>
        </div>
    );

}

export default Portfolio;