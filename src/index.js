import './style.css';

import {projectInput} from './projectInput';
import {projects} from './projectInput';
import {projectsRender} from './projectOnScreen'

import {tasktInput} from './taskInput';


window['projects'] = projects;

projectsRender()

projectInput ();


// Event listener for new Project
const newProjectBtn = document.querySelector('.newProjectBtn');
newProjectBtn.addEventListener('click', () => {
    const projectForm = document.getElementById('projectForm');
    projectForm.classList.toggle('hidden');
})

