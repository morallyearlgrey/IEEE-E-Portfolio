// SCRIPT SHEET
"use strict";

// SKILLS SECTION
/* 
These skills appear after the words "I AM"! They will show up underneath your name and cycle every 3 seconds!

Add and delete skills as needed in this skills array by:
1. Add a comma to the last skill listed
2. Put your skill in quotations
*/
let skills = ["AN ELECTRICAL ENGINEER", "A DEVELOPER", "A DESIGNER"];

// IMAGES SECTION
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

// JAVASCRIPT TO MAKE THE PAGE DYNAMIC
// You don't need to worry about what is below!
if (typeof window != 'undefined') {

    window.onload = () => {

        let skillsIndex = 0;

        const hero_skills = document.querySelector("#hero_skills");

        function WriteHeroSkills() {
            let skill = skills[skillsIndex];
            hero_skills.textContent = "I AM " + skill;
            skillsIndex = (skillsIndex + 1) % skills.length;

        };

        WriteHeroSkills();
        setInterval(WriteHeroSkills, 3000);

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
            console.log("button clicked");
            aboutSection.scrollIntoView({ behavior: "smooth" });
        });

        const menu = document.querySelector("#navbar_mobile_container");
        const menuBtn = document.querySelector("#navbar_mobile");

        menuBtn.addEventListener("click", () => {
            menu.classList.toggle("active");
            document.body.classList.toggle("no-scroll");


        });

    };

}