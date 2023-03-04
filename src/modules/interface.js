import { format } from 'date-fns'

export default function userInterface() {
    const contentContainer = document.getElementById('content')
    const createPage = function(task) {
        const taskbutton = document.createElement('article');
        taskbutton.className = 'modules';
        const taskHeader = document.createElement('h2')
        taskHeader.textContent = task;
        taskbutton.appendChild(taskHeader);
        contentContainer.appendChild(taskbutton);
        }
    const loadPage = function(e) {
        contentContainer.removeChild(contentContainer.firstElementChild);
        if (e.target.id === 'all') {
            createPage('All');
        } else if (e.target.id === 'today') {
            createPage('Today');
        } if (e.target.id === 'nextSeven') {
            createPage('Next Seven Days')
        }
    }
    document.addEventListener('click',loadPage);
}