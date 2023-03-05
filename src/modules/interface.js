import { format } from 'date-fns'

export default function userInterface() {
    const contentContainer = document.getElementById('content');
    const createPage = function(task) {
        contentContainer.removeChild(contentContainer.firstElementChild);
        const taskContainer = document.createElement('article');
        taskContainer.className = 'modules'
        const taskHeader = document.createElement('h2');
        taskHeader.textContent = task;
        contentContainer.appendChild(taskContainer);
        taskContainer.appendChild(taskHeader);
        }
    const getTasks = function() {

    }
    const loadPage = function(e) {
        if (e.target.id === 'all') {
            createPage('All');
        } else if (e.target.id === 'today') {
            createPage('Today');
        } else if (e.target.id === 'nextSeven') {
            createPage('Next 7 Days')
        }
    }
    createPage('All');
    document.addEventListener('click',loadPage);
}