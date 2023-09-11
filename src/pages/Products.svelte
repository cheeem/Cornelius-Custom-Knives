<script>

  //import svgs
  import svg_logo from '../svg/logo.svg';

  //import images 
  import img_knife22 from '../img/knife22.jpg';
  import img_knife25 from '../img/knife25.jpg';
  import img_knife26 from '../img/knife26.jpg';
  import img_knife27 from '../img/knife27.jpg';
  import img_knife28 from '../img/knife28.jpg';

  //import utilities
  import { viewport } from '../utils/viewport.js';

  //get the set active function
  export let setActive;

  //define the viewed state (in viewport)
  let viewed = true;

  //define knives
  const knives = [
    img_knife22,
    img_knife25,
    img_knife26,
    img_knife27,
    img_knife28,
  ];

  $: angle = viewed ? 80 : 30;

</script>

<div id="products" class="section"
  use:viewport
  on:enterViewport={() => setActive(1)}
>
  
  <div class="sidebar">
    <img src={svg_logo} alt="" />
    <h1> My <span> Creations </span> </h1>
    <div class="sidebar-body">
    <div class="sidebar-line"></div>
      <div class="sidebar-content">
        <p> One-of-a-kind knives handcrafted with durability, quality, and personality </p>
        <!-- <p class="catalogue-cta"> Explore The Catalogue </p> -->
      </div>
    </div>
  </div>

  <ul>

    <div class="vertex" 
      use:viewport
      on:enterViewport={() => viewed = true}
      on:exitViewport={() => viewed = false}
    ></div>

    {#each knives as src, i}
      <li class={viewed ? `knife viewed`: `knife`} style={`
        rotate: ${-angle / (knives.length/2) + angle / (knives.length) * (knives.length-1-i)}deg;
      `}>
        <div class="card" style={`
          background-image: url(${src});
        `}>
        </div>
      </li>
    {/each}

  </ul>

</div>

<style>

  #products {
    display: flex;

    font-size: clamp(0.75rem, 1vw, 4rem);
  }

  .sidebar {
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 2.5em;

    margin-top: 1.8em;
  }

  img {
    z-index: -2;

    position: absolute;
    top: 0;
    left: -5em;

    width: 20em;

    rotate: -10deg;

    filter: var(--filter-darkgrey);

    opacity: 0.02;
  }

  h1 {
    font-size: 5em;

    width: fit-content;
  }

  .sidebar-body {
    margin-left: 0.3em;

    display: flex;
    gap: 2.5em;
  }

  .sidebar-line {
    width: 0.35em;

    background: linear-gradient(180deg, var(--darkgrey) 60%, var(--highlight) 60%);

    border-radius: 3em;
  }

  .sidebar-content {
    display: flex;
    flex-direction: column;
    gap: 1.5em;

    width: 45%;
  }

  p {
    font-size: 1.35em;
    font-weight: 500;
  }

  .catalogue-cta {
    font-size: 1.2em;
    text-decoration: underline;

    cursor: pointer;
  }

  .deck {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  ul {
    position: relative;

    display: grid;
    place-items: center;

    height: 35em;
    width: 35em;

    rotate: 90deg;
  }

  .vertex {
    width: 2em;
    height: 2em;
  }

  li {
    position: absolute;
    top: 50%;
    left: 50%;
    
    overflow: hidden;

    height: 11em;
    width: 30em;

    border-radius: 2em;
    box-shadow: 0 0.2em 0.4em var(--darkgrey-08);

    translate: -50% -50%;
    transform-origin: 120% center;

    filter: grayscale(100%);

    transition: 
      filter 1s ease,
      rotate 1s ease,
      scale 0.2s ease;

    /* cursor: pointer; */
  }

  .viewed {
    filter: grayscale(0%);
  }

  .card {
    width: 100%;
    height: 100%;
    
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    transition: 0.5s;
  }

  li:hover, li:focus {
    z-index: 1;
  }

  li:hover .card, li:focus .card {
    scale: 1.03;
  }

  @media (max-width: 1200px) {

    #products {
      flex-direction: column;
      gap: var(--page-padding);
      align-items: center;
    }

    .sidebar {
      font-size: clamp(0.5rem, 1.75vw, 5rem);
    }

    h1, p {
      width: unset;
      text-align: center;
    }

    img {
      left: 0;
      right: 0;

      margin: 0 auto;
      
      top: -1em;
    }

    .sidebar-body {
      justify-content: center;
    }

    .sidebar-line {
      display: none;
    }

    .sidebar-content {
      font-size: clamp(0.75rem, 2.5vw, 2rem);
      width: clamp(15rem, 60%, 50rem);;
    }

    ul {
      margin: 0 auto;

      font-size: clamp(0.4rem, 1.3vw, 5rem);
    }

  }

  @media (max-width: 900px) {

    #products {
      padding: 10em var(--page-padding);
    }

  }

</style>

