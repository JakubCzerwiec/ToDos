import { projects } from './projectInput';
import {projectsRender} from './projectOnScreen';
import {setData} from './storageFunctions';


let taskDoneListener = () => {
    
    let taskDoneBtn = document.querySelectorAll('.taskDoneBtn');
    let taskDeleteBtns = document.querySelectorAll('.taskDeleteBtn');
  
   /* taskDoneBtn.forEach(element => {
        element.addEventListener('change', () => {
            projects.forEach(pro => {
                
            })
        })
    }) */
  
  
  
  
  
  
  
  /*  taskDoneBtn.forEach((element, index) => {
        element.addEventListener('change', () => {
            element.parentElement.classList.toggle('green');
            taskDeleteBtns[index].classList.toggle('red'); 
// Something must change in the object value to be able to save in local storage

        })  
        setData();  

    }) */
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
            setData();
    })
}

export {taskDoneListener}
export {priorityColorChange}