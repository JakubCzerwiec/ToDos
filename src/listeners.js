import { projects } from './projectInput';
import {projectsRender} from './projectOnScreen';
import {setData} from './storageFunctions';


let taskDoneListener = () => {
    
    let taskDoneBtn = document.querySelectorAll('.taskDoneBtn');
    let taskDeleteBtns = document.querySelectorAll('.taskDeleteBtn');
  
    taskDoneBtn.forEach((element, index) => {
        element.addEventListener('change', () => {
            taskDoneBtn[index].parentElement.classList.toggle('green');
            taskDeleteBtns[index].classList.toggle('show');

            let btnId = element.id;

            projects.forEach(project => {
                let thisTask = project.tasks.filter((task) => {
                     return task.id == btnId;
                 })

    // Do splice wstawić indexOf tego tasku i zastąpić go nowym jako trzeci argument             
                //  project.tasks.splice(0, project.tasks.length);
                //  deleted.forEach(el => {
                //      project.tasks.push(el)
                console.log(thisTask)
                thisTask[0].status = true;
                console.log(thisTask)
                 
             })

                
            
        })
    }) 


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