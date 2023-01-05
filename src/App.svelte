<script>

  //import navbar
  import Nav from './Nav.svelte';

  //import sections
  import Home from './sections/Home.svelte';
  import Products from './sections/Products.svelte';

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

  <Home {setActive} />

  <Products {setActive} />

  <div id="reviews" class="section" use:viewport on:enterViewport={() => setActive(2)}></div>

  <div id="my-craft" class="section" use:viewport on:enterViewport={() => setActive(3)}></div>

  <div id="contact" class="section" use:viewport on:enterViewport={() => setActive(4)}></div>


</main>

<style>

  main {
    display: grid;
    gap: 10em;
  }

</style>
