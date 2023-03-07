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
    const loadPage = function(e) {
        createPage(e.target.textContent);
    }

    // Event Listeners
    document.querySelectorAll('.nav-button').forEach(button => button.addEventListener('click',loadPage))
    // Load Starting Page
    createPage('All');
}