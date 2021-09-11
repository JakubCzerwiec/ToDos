import {projectsRender} from './projectOnScreen'

let tasktInput = () => {

    let addTaskBtn = document.querySelectorAll('.addTaskBtn');

    addTaskBtn.forEach((element, index) => {
        element.addEventListener('click', () => {
            let projectsDiv = document.querySelector('.projectsDiv');
            let taskInput = document.createElement('div');
            taskInput.innerHTML = `      
                <form id="tasksForm" class="form_task">
                    <label for="taskInputTitle">Title for new Task</label>
                    <input id="taskInputTitle" type="text" placeholder="Insert title">
            
                    <label for="taskInputDate">Date</label>
                    <input id="taskInputDate" type="text" placeholder="Insert date">
                    <button class="taskSubmitBtn">Create</button>
        
                </form>`;
        projectsDiv.append(taskInput)

            const taskTitleInput = document.getElementById('taskInputTitle');
            const taskInputDate = document.getElementById('taskInputDate');

        
           taskInput.addEventListener('submit', (e) => {
                
                let task = {
                    title: taskTitleInput.value,
                    date: taskInputDate.value,
        
                    id: Math.random()
                }
                e.preventDefault()
                projects[index].tasks.push(task);
                projectsDiv.removeChild(taskInput);
                console.log(projects)
                
                projectsRender();
            }) 

        })
        
    })
  

}


export {tasktInput}