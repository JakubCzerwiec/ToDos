import {projectsRender} from './projectOnScreen'


const projects =[
    {
        title: 'One',
        date: '12.09.2021',
        description: 'alle',
        tasks: [
            {
                title: 'one',
                id: 0.09
                }, 
            {
                title: 'two',
                id: 0.06
            }, 
            {
                title: 'three',
                id: 0.07
            }
        ],
        id: 0.234
    }
];
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
