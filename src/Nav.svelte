<script>

  //import images
  import img_logo from './img/logo.png';

  //define nav tabs
  const tabs = [
    {
      label: 'HOME',
      id: 'home',
    },
    {
      label: 'PRODUCTS',
      id: 'products',
    },
    {
      label: 'REVIEWS',
      id: 'reviews',
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

  <a class="logo" href="#home">
    <img src={img_logo} alt="" />
    Cornelius Custom Knives
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
    z-index: 5;

    position: sticky;
    top: 0;

    padding: 0 var(--page-padding);

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    background: var(--white);
  }

  a {
    display: grid;
    place-items: center;

    padding: 2rem 0;
  }

  
  .logo {
    display: flex;
    align-items: center;
    gap: 1em;

    font-size: 1.35em;
    font-weight: 600;
  }

  img {
    width: 2rem;

    filter: var(--filter-darkgrey);
  }

  ul {
    flex-basis: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  li {
    position: relative;

    font-size: 0.9em;
    font-weight: 500;

    color: var(--darkgrey);
  }

  li::after {
    position: absolute;

    display: block;
    left: 0;
    bottom: -0.35em;

    width: 0;
    height: 0.08em;

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