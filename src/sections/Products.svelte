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

<div id="products" use:viewport on:enterViewport={() => setActive(1)}>
  
  <div class="heading">
    <h1> My Products</h1>
    <h4> Knives Crafted With Purpose </h4>
  </div>

  <ul>

    <div class="vertex" use:viewport on:enterViewport={() => viewed = true} on:exitViewport={() => viewed = false}></div>

    <img src={img_knife11_6} alt="" />
    <img src={img_knife11_6} alt="" />

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

  <button> View The Full Catalogue </button>

</div>

<style>

  #products {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4em;

    padding: 10em 5em;
  }

  img {
    position: absolute;

    width: 75vw;
    height: 10em;

    filter: contrast(0) opacity(0.04);
  }

  img:first-of-type {
    rotate: -230deg;
  }

  img:last-of-type {
    transform: scaleX(-1);
    rotate: 50deg;
  }

  .heading * {
    text-align: center;
  }

  .heading h4 {
    font-size: 1.5em;
  }

  .heading h1 {
    font-size: 3.5em;
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

  li:hover {
    z-index: 1;
  }

  li:hover .card {
    scale: 1.03;
  }

  button {
    padding: 1em 1.5em;

    background-color: white;
    
    font-size: 1.5em;
    font-weight: 500;

    border-radius: 1em;
    border: none;
    box-shadow: 0 0.2em 0.2em var(--darkgrey-02);

    transition: 0.3s;

    cursor: pointer;
  }

  button:hover {
    scale: 1.03;
  }

</style>

