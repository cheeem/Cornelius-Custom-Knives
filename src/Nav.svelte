<script>

  //import svgs
  import svg_logo from './svg/logo.svg';
  import svg_menu from './svg/Menu.svg';
  import svg_exit from './svg/Cross.svg';

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

</script>

<nav> 

  <a class="logo" href="#home">
    <img src={svg_logo} alt="" />
    <p> Cornelius Custom Knives </p>
  </a>

  <ul class={opened && `opened`}>
    {#each tabs as { label, id, }, i}
      <a href={`#${id}`} on:click={() => opened = false}> 
        <li class={active === i && `active`}> {label} </li>
      </a>
    {/each}
  </ul>

  <div> 
    <a class="contact-me" href="#contact"> Contact Me </a>
    <img class="menu" src={opened ? svg_exit : svg_menu} alt="" 
      on:click={() => opened = !opened} 
      on:keydown={() => opened = !opened}
    />
  </div>

</nav>

<style>

  nav {
    z-index: 5;

    position: fixed;

    padding: 0 var(--page-padding);

    font-size: clamp(0.75rem, 0.8vw, 4rem);

    display: flex;
    justify-content: space-between;
    align-items: center;

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
    gap: 2.5em;
  }

  .menu {
    display: none;

    width: 4em;
  }

  @media (max-width: 1000px) {

    .logo p {
      display: none;
    }

  }

  @media (max-width: 750px) {

    ul {
      display: none;
    }

    .opened {
      position: absolute;
      top: 0;
      right: 0;

      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.5em;

      padding: 7.5em calc(var(--page-padding) + 0.75em);

      width: 100%;
      height: 100vh;

      background-color: var(--white);
    }

    .opened li {
      font-size: 1.75em;
    }

    .opened li::after {
      left: unset;
      right: 0;
    }

    .menu {
      display: block;
    }

    .contact-me {
      padding: 0.5em 1em;
    }

  }

  @media (max-width: 550px) {

    .contact-me {
      display: none;
    }

  }

</style>