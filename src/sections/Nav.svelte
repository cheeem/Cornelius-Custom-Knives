<script>

  //define nav tabs
  const tabs = [
    {
      label: 'HOME',
      id: 'hero',
    },
    {
      label: 'PRODUCTS',
      id: 'products',
    },
    {
      label: 'MY CRAFT',
      id: 'my-craft',
    },
    {
      label: 'CONTACT',
      id: 'contact',
    },
  ];

  //get the active state
  export let active;

  //$: console.log(active);

</script>

<nav> 

  <a href="#home">
    <img src="./src/img/logo.png" alt="" />
  </a>

  <ul>
    {#each tabs as { label, id, }, i}
      <a href={`#${id}`}> 
        <li class={active === i && `active`}> {label} </li>
      </a>
    {/each}
  </ul>

</nav>

<style>

  nav {
    z-index: 1;

    position: fixed;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 var(--page-padding);

    width: 100%;
  }

  img {
    width: 2rem;

    filter: var(--filter-darkgrey);
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
  }

  a {
    display: grid;
    place-items: center;

    padding: 2.5rem 0;
  }

  li {
    position: relative;

    font-size: 1.2em;
    font-weight: 600;
    color: var(--darkgrey);
  }

  li::after {
    position: absolute;

    display: block;
    left: 0;
    bottom: -0.35em;

    width: 0;
    height: 0.1em;

    background-color: var(--darkgrey);

    content: "";

    transition: 0.2s;
  }

  a:hover li::after {
    width: 100%;
  }

  .active::after {
    width: 1.25em
  }

</style>