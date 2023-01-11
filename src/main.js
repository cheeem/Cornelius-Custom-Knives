//import app styles
import './app.css';
//import app
import App from './App.svelte';

//get app
const app = new App({
  target: document.getElementById('app')
});

//export app
export default app;
