import {projectsRender} from './projectOnScreen'


const projects =[];
const deleted = [];
let projectInput = () => {
  
    const projectForm = document.getElementById('projectForm');
    const projectTitleInput = document.getElementById('projectInputTitle');
    const projectInputDate = document.getElementById('projectInputDate');
    const projectInputDescription = document.getElementById('projectInputDescription');

    projectForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let project = {
            title: projectTitleInput.value,
            date: projectInputDate.value,
            description: projectInputDescription.value,
            tasks: [],
            id: Math.random()
        }
        projects.push(project);
        projectForm.reset()
        console.log(projects)

        projectsRender();
    })

}



export {projectInput}
export {projects}
export {deleted}