<script>

  //import utilities
  import { viewport } from '../utils/viewport.js';

  //get the set active function
  export let setActive;

</script>

<div id="hero" use:viewport on:enterViewport={() => setActive(0)}>
    
  <div class="heading">
    <h1> Cornelius </h1>
    <h4> Elevate Your Kitchen </h4>
  </div>

</div>

<style>

  #hero {
    position: relative;

    display: flex;
    align-items: center;

    height: 100vh;

    background-image: url('../img/knife11-4.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
  }

  .heading {
    margin: var(--page-padding);

    translate: 0 -8em;
  }

  .heading * {
    font-family: 'Homemade Apple', serif;
  }

  .heading h4 {
    font-size: 1.5em;

    translate: 0 -1.5em;
  }

  .heading h1 {
    font-size: 5em;
  }

</style>