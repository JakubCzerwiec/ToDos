import './style.css';

import {projectInput} from './projectInput';
import {projects} from './projectInput';
import {projectsRender} from './projectOnScreen';
import { restore } from './storageFunctions';

import {tasktInput} from './taskInput';


window['projects'] = projects;

 //restore ();

 projectsRender();

projectInput ();


// Event listener for new Project
const newProjectBtn = document.querySelector('.newProjectBtn');
newProjectBtn.addEventListener('click', () => {
    const projectForm = document.getElementById('projectForm');
    projectForm.classList.toggle('hidden');
})

