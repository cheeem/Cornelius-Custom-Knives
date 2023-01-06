<script>

  //import images 
  import img_knife11_6 from '../img/knife11-6.png';

  //import utilities
  import { viewport } from '../utils/viewport.js';

  //get the set active function
  export let setActive;

</script>

<div id="home" class="section" use:viewport on:enterViewport={() => setActive(0)}>

  <a href="#products"> <img src={img_knife11_6} alt="" />  </a>
    
  <div class="heading">
    <h1> Cornelius </h1>
    <h4> Invite Color To Your Kitchen </h4>
  </div>

</div>

<style>

  #home {
    z-index: 1;
    
    display: flex;
    align-items: center;

    height: 100vh;
  }

  a {
    cursor: pointer;
  }

  img {
    position: absolute;
    top: 35%;
    left: 0;

    width: 130vw;
    height: 20em;

    rotate: -10deg;
    filter: grayscale(100%) drop-shadow(0.2em 0.5em 0.2em var(--mediumgrey));;

    transition: 0.5s;
  }

  img:hover {
    filter: grayscale(0%) drop-shadow(0.2em 0.5em 0.2em var(--mediumgrey));;
    
    scale: 1.03;
  }

  .heading {
    margin: var(--page-padding);

    translate: 0 -8em;
  }

  .heading * {
    font-family: 'Homemade Apple', serif;
  }

  .heading h4 {
    font-size: 1.3em;

    translate: 0 -1.8em;
  }

  .heading h1 {
    font-size: 5em;
  }

</style>