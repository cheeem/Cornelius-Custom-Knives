<script>

  //import images 
  import img_knife11_6 from '../img/knife11-6.png';
  import img_knife11 from '../img/knife11.jpg';
  import img_knife14 from '../img/knife14.jpg';
  import img_knife15 from '../img/knife15.jpg';
  import img_knife16 from '../img/knife16.jpg';
  import img_knife10 from '../img/knife10.jpg';

  //import utilities
  import { viewport } from '../utils/viewport.js';

  //get the set active function
  export let setActive;

  //define the viewed state (in viewport)
  let viewed = true;

  //define knives
  const knives = [
    img_knife11,
    img_knife14,
    img_knife15,
    img_knife16,
    img_knife10,
  ];

  $: angle = viewed ? 80 : 30;

</script>

<div id="products" class="section" use:viewport on:enterViewport={() => setActive(1)}>
  
  <div class="sidebar">
    <h1> My <span> Products </span> </h1>
    <div class="sidebar-body">
    <div class="sidebar-line"></div>
      <div class="sidebar-content">
        <p> One-of-a-kind knives crafted with durability, quality, and personality </p>
        <p> Explore The Catalogue </p>
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
        translate: -50%, -50%; 
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
    gap: 0;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    gap: 2.5em;

    margin-top: 1.8em;
  }

  h1 {
    font-size: 5em;
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

  p:last-of-type {
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

    transition: 1s ease;

    cursor: pointer;
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

</style>

