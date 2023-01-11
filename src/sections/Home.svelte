<script>

  //import svgs
  import svg_checkerboard from '../svg/Checkerboard.svg';

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
  ];

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
    --grid-size: calc(100vh - var(--nav-height));
    --grid-max: 50%;

    position: absolute;
    top: var(--nav-height);
    right: min(0vw, calc(var(--grid-max) - var(--grid-size)));

    display: grid;
    grid-auto-rows: auto;

    width: var(--grid-size);
    height: var(--grid-size);
  }

  .grid>div {
    background-color: white;
  }

  a {
    cursor: pointer;
  }

  a img {
    position: absolute;
    bottom: 22.5vh;
    left: 0;

    width: 130vw;
    height: 20vw;

    rotate: -10deg;
    filter: grayscale(100%) drop-shadow(0.2em 0.5em 0.2em var(--darkgrey-02));;

    transition: 0.5s;
  }

  a img:hover {
    filter: grayscale(0%) drop-shadow(0.2em 0.5em 0.2em var(--dakrgrey-02));;
    
    scale: 1.03;
    opacity: 1;
  }

  .heading {
    margin: var(--page-padding);

    font-size: max(calc(0.5rem + 0.6vw), 1.1vw);

    translate: 0 -11vw;
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

  @media (max-width: 1200px) {
    
    .grid {
      --grid-max: 40%;
    }

    a img {
      rotate: -13deg;
    }

  }

  @media (max-aspect-ratio: 1/1) {

    .grid {
      display: none;
    }

    a img {
      top: 55vh;
      left: -20vh;

      width: 130vh;
      height: 20vh;

      rotate: -20deg;
    }

    .heading {
      translate: 0 -15vh;
    }

  }

  @media (max-width: 480px) {
    
    a img {
      top: 47.5vh;

      width: 85vh;
      height: 13vh;

      rotate: -75deg;
      opacity: 0.3;
    }

  }

</style>