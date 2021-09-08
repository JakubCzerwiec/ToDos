import { projects } from './projectInput';
import {projectsRender} from './projectOnScreen';


let deleteProjectListener = () => {
    let deleteButtons = document.querySelectorAll('.projectDeleteBtn');
    deleteButtons.forEach((element) => {
        element.addEventListener('click', () => {
            let removed = projects.filter((project) => {
                return project.id != element.id;

            })

            projects = removed;
            projectsRender();
            console.log(projects)
        })


    });

}

export {deleteProjectListener}