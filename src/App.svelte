<script>

  //import sections
  import Nav from './sections/Nav.svelte';
  import Hero from './sections/Hero.svelte';

  import { viewport } from './utils/viewport.js';

  //import assets
  import Crossfade from './assets/Crossfade.svelte';

  //
  const crossfade = {
    slides: [
      11,
      14,
      15,
    ],
    width: `100%`,
    height: `100vh`,
    delay: 5,
    transition: 1,
  };

  //set the active state
  const setActive = i => active = i;

  //define active state
  let active = 0;

</script>

<main>

  <Nav {active} />

  <Hero {setActive} />

  <div id="products" use:viewport on:enterViewport={() => setActive(1)}> </div>

  <div id="my-craft" use:viewport on:enterViewport={() => setActive(2)}></div>

  <div id="contact" use:viewport on:enterViewport={() => setActive(3)}></div>


</main>

<style>

  main {
    display: grid;
    gap: 10em;
  }

  div {
    height: 250vh;

    background: linear-gradient(lightpink, white);
  }

</style>
