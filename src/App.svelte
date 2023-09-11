<script>

  //import navbar
  import Nav from './Nav.svelte';

  //import sections
  import Home from './pages/Home.svelte';
  import Products from './pages/Products.svelte';
  import Reviews from './pages/Reviews.svelte';
  import Contact from './pages/Contact.svelte';

  //set the active state
  const setActive = i => active = i;

  //define active state
  let active = 0;

  const pages = [
    {
      label: 'HOME',
      id: 'home',
      component: Home,
    },
    {
      label: 'PRODUCTS',
      id: 'products',
      component: Products,
    },
    {
      label: 'REVIEWS',
      id: 'reviews',
      component: Reviews,
    },
    {
      label: 'CONTACT',
      id: 'contact',
      component: Contact,
    },
  ];

</script>

<Nav {active} tabs={pages} />

<main>
  {#each pages as { component }}
    <svelte:component this={component} {setActive} />
  {/each}
</main>

<style>

  main {
    display: grid;
    gap: clamp(5rem, 10vw, 20rem);
  }

</style>
