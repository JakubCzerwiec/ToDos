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

export {taskDoneListener}