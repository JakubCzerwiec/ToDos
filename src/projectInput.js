import {projectsRender} from './projectOnScreen';
import {priorityColorChange} from './listeners';
import {setData} from './storageFunctions';

// Examples
let projects = []; /*= [
        {
            title: 'One',
            date: '2021-09-23',
            priority: 'low',
            description: 'alle',
            tasks: [
                {
                    title: 'one',
                    id: 0.09,
                    status: 'no'
                    }, 
                {
                    title: 'two',
                    id: 0.06,
                    status: 'no'
                }, 
                {
                    title: 'three',
                    id: 0.07,
                    status: 'no'
                }
            ],
            id: 0.234
        },
        {
            title: 'Two',
            date: '2021-05-05',
            priority: 'medium',
            description: 'alle',
            tasks: [
                {
                    title: 'one',
                    id: 0.095,
                    status: 'no'
                    }, 
                {
                    title: 'two',
                    id: 0.065,
                    status: 'no'
                }, 
                {
                    title: 'three',
                    id: 0.075,
                    status: 'no'
                }
            ],
            id: 0.2345
        }
    ]; */

// Injecting data into projects array
let projectInput = () => {
  
    const projectForm = document.getElementById('projectForm');
    const projectTitleInput = document.getElementById('projectInputTitle');
    const projectInputDate = document.getElementById('projectInputDate');
    const projectPriority = document.getElementById('projectPriority')
    const projectInputDescription = document.getElementById('projectInputDescription');

    projectForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let project = {
            title: projectTitleInput.value,
            date: projectInputDate.value,
            priority: projectPriority.value,
            description: projectInputDescription.value,
            tasks: [],
            id: Math.random()
        }
        projects.push(project);
        projectForm.reset();
        console.log(projects);

        projectForm.classList.toggle('hidden');
        priorityColorChange()

        setData();
        projectsRender();
    })

}



export {projectInput}
export {projects}
