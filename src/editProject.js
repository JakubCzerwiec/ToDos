import { projects } from "./projectInput";
import {projectsRender} from './projectOnScreen';

let editProject = () => {
    let projectEditBtnS = document.querySelectorAll('.projectEditBtn');
    const projectsDiv = document.querySelector('.projectsDiv');

    projectEditBtnS.forEach((button, index) => {
        button.addEventListener('click', () => {
            // wywoła inputa a po sabmicie inputa wstrzeli dane z imputa do projektu na tym samym indeksie co guzik
            let editProjectForm = document.createElement('div');
            editProjectForm.innerHTML = `
            <form id="editProjectForm" class="editProjectForm">
                <label for="projectEditTitle">Title for new Project</label>
                <input id="projectEditTitle" type="text" placeholder="Insert title" value="${projects[index].title}">

                <label for="projectEditDate">Date</label>
                <input id="projectEditDate" type="text" placeholder="Insert date" value="${projects[index].date}">

                <label for="projectEditDescription">Title for new Project</label>
                <input id="projectEditDescription" type="text-area" placeholder="Type some description" value="${projects[index].description}">

                <button class="projectEditSubmitBtn">Submit edit</button>

            </form>`;

            content.append(editProjectForm);

            editProjectForm.addEventListener('submit', (e) => {
                e.preventDefault();




                projects[index] = {
                    title: projectEditTitle.value,
                    date: projectEditDate.value,
                    description: projectEditDescription.value,
                    tasks: projects[index].tasks,
                    id: projects[index].id
                }

                projectForm.reset();
                console.log(projects);
                projectsRender();
        
                content.removeChild(editProjectForm);
            })
        })
    })
}

export {editProject}