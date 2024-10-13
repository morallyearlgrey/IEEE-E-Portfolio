// SCRIPT SHEET
/*
This is where all our backend code for our website is located! This makes those components on that pretty interface actually come to life and be able to have cool functionalities (i.e. the image carousel, the learn more button, etc)! In this section, you can modify the skills you want to showcase underneath your name, the images you want in that image carousel, and the projects you want listed

Quick Modifications Key:
Here is a list of sections you can modify/customize! Use CTRL+F or CMD+F to find these sections to modify them!

MODIFICATION SECTION: SKILLS SECTION
MODIFICATION SECTION: IMAGES SECTION
MODIFICATION SECTION: PROJECTS SECTION

*/

"use strict";

// MODIFICATION SECTION: SKILLS SECTION
/* 
These skills appear after the words "I AM"! They will show up underneath your name and cycle every 3 seconds!

Add and delete skills as needed in this skills array by:
1. Add a comma to the last skill listed
2. Put your skill in quotations
*/
let skills = ["AN ELECTRICAL ENGINEER", "A DEVELOPER", "A DESIGNER"];

// MODIFICATION SECTION: IMAGES SECTION
/*
These images are located in the image carousel in the About Me section! You can cycle through the images with the right or left arrow

Add and delete images as needed by:
1. Upload your image to the images folder
2. Rename your image as needed
3. Navigate back to the main.js file (this one!)
4. In the images array, add a comma to the last image listed in the images array
5. In the images array, add ../images/ and then your image's name (including the .png, .jpg, etc!) in quotations

Ensure that your image's name in this file matches what you uploaded to the images folder!
*/
let images = ["../images/chocolate_gudetama.png", "../images/roll_gudetama.png", "../images/tired_gudetama.png"];


// MODIFICATION SECTION: PROJECTS SECTION
/* 
This is where your projects go! They show up as boxes on the Projects page! Each of them contains a title, a description, an image, and a list of skills you used during the project!

Add and delete projects as needed by:
1. Upload your image to the images folder
2. Rename your image as needed
3. Navigate back to the main.js file (this one!)
4. In the image section of your specific project, add a comma to the last image listed in the images array
5. In the image section of your specific project, add ../images/ and then your image's name (including the .png, .jpg, etc!) in quotations
6. In the title section of your specific project, change the title as needed!
7. In the description section of your specific project, change the description as needed!
8. In the skills section of your specific project, add or change skills you used by adding a comma to the last skill listed and then adding your skill in quotations
9. In the link section of your specific project, paste in the link you want the user to redirect to and place quotations around it
*/
let projects = [
    {
        title: "Project 1",
        description: "A brief description of Project 1.",
        image: "../images/chocolate_gudetama.png",
        link: "#",
        skills: ["Skill1", "Skill2", "Skill3"],
    },
    {
        title: "Project 2",
        description: "A brief description of Project 2.",
        image: "../images/roll_gudetama.png",
        link: "#",
        skills: ["Skill1", "Skill2", "Skill3", "Skill4"]
    },
    {
        title: "Project 3",
        description: "A brief description of Project 3.",
        image: "../images/tired_gudetama.png",
        link: "#",
        skills: ["Skill1", "Skill2"]
    },
    {
        title: "Project 4",
        description: "A brief description of Project 4.",
        image: "../images/chocolate_gudetama.png",
        link: "#",
        skills: ["Skill1"]
    },
    {
        title: "Project 5",
        description: "A brief description of Project 5.",
        image: "../images/roll_gudetama.png",
        link: "#",
        skills: ["Skill1", "Skill2", "Skill3"]
    },
    {
        title: "Project 6",
        description: "A brief description of Project 6.",
        image: "../images/tired_gudetama.png",
        link: "#",
        skills: ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"]
    }
];

function createProjectElement(project) {
    const projectElement = document.createElement("div");
    projectElement.className = "project";

    projectElement.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project_image">
        <div class="project_info">
            <h2 class="project_title">${project.title}</h2>
            <a href="${project.link}" class="project_description">Link to project</a>
            <p class="project_description">${project.description}</p>
            <div class="project_skills">
                ${project.skills.map(skill => `<span class="skill">${skill}</span>`).join("")}
            </div>
        </div>
    `;

    return projectElement;
}

function renderProjects() {
    const projectsGrid = document.getElementById("projectsGrid");
    if (!projectsGrid) {
        console.error("Projects grid container not found");
        return;
    }

    projects.forEach(project => {
        const projectElement = createProjectElement(project);
        projectsGrid.appendChild(projectElement);
    });
}

document.addEventListener('DOMContentLoaded', function() {

        let skillsIndex = 0;

        const hero_skills = document.querySelector("#hero_skills");

        function WriteHeroSkills() {
            let skill = skills[skillsIndex];
            hero_skills.textContent = "I AM " + skill;
            skillsIndex = (skillsIndex + 1) % skills.length;

        };

        if(hero_skills) {
            WriteHeroSkills();
            setInterval(WriteHeroSkills, 3000);
        }

        let imageIndex = 0;
        const carousel = document.querySelector("#about_image_carousel");
        const right_arrow = document.querySelector("#about_right_button");
        const left_arrow = document.querySelector("#about_left_button");

        function updateArrowVisibility() {
            left_arrow.style.opacity = imageIndex == 0 ? 0.3 : 1;
            left_arrow.style.cursor = imageIndex == 0 ? "default" : "pointer";
            
            right_arrow.style.opacity = imageIndex == images.length-1 ? 0.3 : 1;
            right_arrow.style.cursor = imageIndex == images.length-1 ? "default" : "pointer";

        }

        function DisplayImage(index) {
            if (index >= 0 && index < images.length) {
                imageIndex = index; 
                carousel.src = images[imageIndex]; 
                updateArrowVisibility();

            }
        }
        
        left_arrow.addEventListener("click", () => {
            DisplayImage(imageIndex-1);
        
        });
        
        right_arrow.addEventListener("click", () => {
            DisplayImage(imageIndex+1);
        
        });

        DisplayImage(imageIndex);
        updateArrowVisibility();

        const learnMoreBtn = document.querySelector("#hero_learn_more_button");
        const aboutSection = document.querySelector("#about");

        learnMoreBtn.addEventListener("click", () => { 
            aboutSection.scrollIntoView({ behavior: "smooth" });
        });

        renderProjects();

});