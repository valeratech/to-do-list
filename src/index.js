import './styles/main.css'
import userInterface from './modules/interface'

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', userInterface)
} else {
    userInterface();
}