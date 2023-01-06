<script>

  //import navbar
  import Nav from './Nav.svelte';

  //import sections
  import Home from './sections/Home.svelte';
  import Products from './sections/Products.svelte';
  import Reviews from './sections/Reviews.svelte';
  import Contact from './sections/Contact.svelte';

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

<Nav {active} />

<main>

  <Home {setActive} />

  <Products {setActive} />

  <Reviews {setActive} />

  <div id="my-craft" class="section" use:viewport on:enterViewport={() => setActive(3)}></div>

  <Contact {setActive} />

</main>

<style>

  main {
    display: grid;
    gap: 10em;
  }

</style>
