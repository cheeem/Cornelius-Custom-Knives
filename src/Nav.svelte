<script>

  //import svgs
  import svg_logo from './svg/logo.svg';

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
    // {
    //   label: 'MY CRAFT',
    //   id: 'my-craft',
    // },
  ];

  //get the active state
  export let active;

  //define opened menu state
  let opened = false;

  $: console.log(opened);

</script>

<nav> 

  <a class="logo" href="#home">
    <img src={svg_logo} alt="" />
    <p> Cornelius Custom Knives </p>
  </a>

  <ul class={opened && `mobile-expanded`}>
    {#each tabs as { label, id, }, i}
      <a href={`#${id}`} on:click={() => opened = false}> 
        <li class={active === i && `active`}> {label} </li>
      </a>
    {/each}
  </ul>

  <div> 
    <a class="contact-me" href="#contact"> Contact Me </a>
    <button class="menu" aria-expanded={opened}
      on:click={() => opened = !opened} 
      on:keydown={() => opened = !opened}
    >
      <svg fill="var(--darkgrey)" viewBox="0 0 100 100">
        <rect width="80" height="10" x="10" y="25" rx="5">
        </rect>
        <rect width="80" height="10" x="10" y="45" rx="5">
        </rect>
        <rect width="80" height="10" x="10" y="65" rx="5">
        </rect>
      </svg>
    </button>
  </div>

</nav>

<style>

  nav {
    z-index: 5;

    position: fixed;

    padding: 0 var(--page-padding);

    font-size: var(--nav-font-size);

    display: flex;
    justify-content: space-between;
    align-items: center;

    height: calc(var(--page-padding) + 2.35em);
    width: 100%;

    background: var(--white);
  }

  a {
    display: grid;
    place-items: center;

    padding: 2em 0;
  }
  
  .logo {
    display: flex;
    align-items: center;
    gap: 1em;

    font-size: 1.5em;
    font-weight: 600;
  }

  img {
    width: 1.5em;

    filter: var(--filter-darkgrey);
  }

  ul {
    display: flex;
    align-items: center;
    gap: 4em;
  }

  li {
    position: relative;

    font-size: 1.1em;
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

  .contact-me {
    padding: 1em 2.05em;

    font-size: 1.2em;
    font-weight: 600;

    border-radius: 0.5em;
    border: 0.15em solid var(--darkgrey);

    transition: background-color 0.3s ease, border-color 0.3s ease;
  }

  .contact-me:hover {
    background-color: var(--highlight-01);

    border-color: var(--highlight);
  }

  div {
    display: flex;
    align-items: center;
    gap: 1.75em;
  }

  .menu {
    --menu-transition: 0.15s;

    z-index: 5;

    display: none;
    place-items: center;

    background-color: transparent;
    border: none;

    width: 3.5em;
  }

  .menu rect {
    transform-origin: center;

    transition:
     y var(--menu-transition)
     ease-in var(--menu-transition), 
     rotate var(--menu-transition) ease-in, 
     opacity 0s var(--menu-transition);
  }

  .menu[aria-expanded="true"] rect {
    transition:
     y var(--menu-transition) ease-in,
     rotate var(--menu-transition) ease-in var(--menu-transition),
     opacity 0s var(--menu-transition);
  }

  .menu[aria-expanded="true"] :is(rect:nth-of-type(1), rect:nth-of-type(3)) {
    y: 45;
  }

  .menu[aria-expanded="true"] rect:nth-of-type(1) {
    rotate: 45deg;
  }

  .menu[aria-expanded="true"] rect:nth-of-type(2) {
    opacity: 0;
  }

  .menu[aria-expanded="true"] rect:nth-of-type(3) {
    rotate: -45deg;
  }

  @media (max-width: 1000px) {

    .logo p {
      display: none;
    }

    .contact-me {
      padding: 0.5em 1em;

      font-size: 1.1em;
    }

  }

  @media (max-width: 750px) {

    ul {
      position: absolute;
      top: 0;
      right: -100vw;

      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.5em;

      padding: 7.5em calc(var(--page-padding) + 0.75em);

      height: 100vh;
      width: 100vw;

      background-color: var(--white);

      transition: right 0.3s ease-in-out;
    }

    .mobile-expanded {
      right: 0;
    }

    .mobile-expanded li {
      font-size: 2.5em;
    }

    .mobile-expanded li::after {
      left: unset;
      right: 0;
    }

    .contact-me {
      font-size: 1em;
    }

    .menu {
      display: grid;
    }

  }

  @media (max-width: 325px) {

    .contact-me {
      display: none;
    }

  }

</style>