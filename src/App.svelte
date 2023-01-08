<script>

  //import navbar
  import Nav from './Nav.svelte';

  //import sections
  import Home from './sections/Home.svelte';
  import Products from './sections/Products.svelte';
  import Reviews from './sections/Reviews.svelte';
  import Contact from './sections/Contact.svelte';

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

  <Contact {setActive} />

</main>

<style>

  main {
    display: grid;
    gap: 10em;
  }

</style>
