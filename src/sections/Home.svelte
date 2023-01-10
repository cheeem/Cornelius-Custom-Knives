<script>

  //import images 
  import img_knife11_6 from '../img/knife11-6.png';

  //import utilities
  import { viewport } from '../utils/viewport.js';

  //get the set active function
  export let setActive;

  //define grid
  const grid = [
    1, 0, 1, 0, 1,
    0, 1, 0, 1, 0,
    1, 0, 1, 0, 1,
    0, 1, 0, 1, 0,
    1, 0, 1, 0, 1,
  ]

</script>

<div id="home" class="section"
  use:viewport
  on:enterViewport={() => setActive(0)}
>

  <div class="grid" style={`
    grid-template-columns: repeat(${grid.length ** 0.5}, 1fr);
  `}>
    {#each { length: grid.length, } as _, i}
      <div style={`background-color: var(--${grid[i] ? 'white' : 'highlight'});`}></div>
    {/each}
  </div>

  <a href="#products"> <img src={img_knife11_6} alt="" />  </a>
    
  <div class="heading">
    <h1> Cornelius </h1>
    <h4> Invite <span> Color </span> To Your Kitchen </h4>
  </div>

</div>

<style>

  #home {
    z-index: 1;

    display: flex;
    align-items: center;

    padding-top: var(--page-padding);

    height: 100vh;

    background: var(--white);
  }

  .grid {
    position: absolute;
    top: var(--page-padding);
    left: 55.85%;

    display: grid;
    grid-auto-rows: auto;

    width: 45%;
    height: calc(100% - var(--page-padding));
  }

  .grid>div {
    background-color: white;
  }

  a {
    cursor: pointer;
  }

  img {
    position: absolute;
    top: 35vh;
    left: 0;

    width: 130vw;
    height: 20vw;

    rotate: -10deg;
    filter: grayscale(100%) drop-shadow(0.2em 0.5em 0.2em var(--darkgrey-02));;

    transition: 0.5s;
  }

  img:hover {
    filter: grayscale(0%) drop-shadow(0.2em 0.5em 0.2em var(--dakrgrey-02));;
    
    scale: 1.03;
  }

  .heading {
    margin: var(--page-padding);

    font-size: clamp(0.65rem, 1vw, 4rem);

    translate: 0 -11.5vw;
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

  span::before {
     bottom: 31%;
     left: -5%;
     
     height: 12.5%;
     width: 109%;
  }

  @media (min-aspect-ratio: 25/10), (max-aspect-ratio: 33/20) {
    
    .grid {
      display: none;
    }

  }

</style>