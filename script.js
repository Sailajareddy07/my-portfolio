fetch("projects.json")
  .then(response => response.json())
  .then(projects => {
    const container = document.getElementById("project-container");

    projects.forEach(project => {
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("project");

      projectDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" class="view-project" target="_blank">View Project</a>
      `;

      container.appendChild(projectDiv);
    });
  })
  .catch(error => console.error("Error loading projects:", error));

