import { projects } from './projectInput';
import {projectsRender} from './projectOnScreen';


let taskDoneListener = () => {
    
    let taskDoneBtn = document.querySelectorAll('.taskDoneBtn');
    let taskDeleteBtns = document.querySelectorAll('.taskDeleteBtn');
    taskDoneBtn.forEach((element, index) => {
        element.addEventListener('change', () => {
            element.parentElement.classList.toggle('green');
            taskDeleteBtns[index].classList.toggle('red');  
        })  
    })
}


let priorityColorChange = () => {
    let allProjects = document.querySelectorAll('.singleProject');

    allProjects.forEach((element, index) => {
        if (projects[index].priority === 'low') 
            element.classList.add('greeeeen')
        else if (projects[index].priority === 'medium')
            element.classList.add('yellllow')
        else if (projects[index].priority === 'high')
            element.classList.add('reed'); 
    })
}

export {taskDoneListener}
export {priorityColorChange}