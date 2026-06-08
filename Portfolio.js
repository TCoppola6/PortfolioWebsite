const projects = [
    {
        title: "Traffic Simulator",
        description:
            "A Python traffic simulation featuring roads, destinations, and autonomous vehicles.",
        imageText: "Traffic Simulator Preview",
        link: "#"
    },
    {
        title: "Roblox Game",
        description:
            "A multiplayer Roblox game developed with Lua scripting.",
        imageText: "Roblox Preview",
        link: "#"
    },
    {
        title: "Ionic App",
        description:
            "A mobile application built with Ionic React and TypeScript.",
        imageText: "Ionic Preview",
        link: "#"
    }
];

const skills = [
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Ionic",
    "Lua",
    "Git"
];

function loadProjects() {
    const grid = document.getElementById("projectsGrid");

    projects.forEach(project => {

        const card = document.createElement("div");
        card.className = "project-card";

        card.innerHTML = `
            <div class="project-media">
                ${project.imageText}
            </div>

            <div class="project-content">
                <h3>${project.title}</h3>

                <p>${project.description}</p>

                <a href="${project.link}"
                   class="project-link"
                   target="_blank">
                    View Project
                </a>
            </div>
        `;

        grid.appendChild(card);
    });
}

function loadSkills() {
    const grid = document.getElementById("skillsGrid");

    if (!grid) {
        return;
    }

    skills.forEach(skill => {
        const skillCard = document.createElement("div");
        skillCard.className = "skill-card";
        skillCard.textContent = skill;

        grid.appendChild(skillCard);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loadProjects();
    loadSkills();
});