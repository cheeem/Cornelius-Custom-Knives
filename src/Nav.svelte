<script>

  //import svgs
  import svg_eye from './svg/Eye.svg';
  import svg_menu from './svg/Menu.svg';

  //get nav tabs
  export let tabs;

  //get the active tab
  export let active;

  //get setActive function
  export let setActive;

  //define menu opened state
  let opened = false;

</script>

<div class="mobile-display">
  <img src={svg_menu} alt=""
    on:click={() => opened = !opened}
    on:keydown={() => opened = !opened} 
  />
  <p> {tabs[active].label} </p>
  <!-- <img src={tabs[active].svg} alt="" /> -->
</div>

<div class={`nav ${opened && 'opened'}`}>

  <div class="logo">
    <img src={svg_eye} alt="" />
    <p> Set Observer </p>
  </div>
  
  <ul class="tab-list">
    {#each tabs as { label, svg, }, i}
      <li class={`tab ${active === i ? `active` : ``}`}
        on:click={() => setActive(i)}
        on:keydown={() => setActive(i)}
      >
        <img src={svg} alt="" />
        <div> </div>
        <p> {label} </p>
      </li>
    {/each}
  </ul>

</div>

<style>

  :root {
    --nav-padding: 2em;
    --tab-padding: 0.5em;
  }

  img {
    width: 2em;

    filter: var(--filter-offwhite) drop-shadow(var(--shadow1));
  }

  p {
    color: var(--offwhite);
    font-weight: 600;
    text-shadow: var(--shadow1);
    white-space: nowrap;

    transition: 0.25s ease;
  }

  .mobile-display {
    display: none;
  }
  
  .nav {
    display: grid;
    grid-template-rows: 1fr 3fr;

    padding: var(--nav-padding) 0;

    width: fit-content;
    height: var(--page-height);

    background-color: var(--color1);

    border-radius: 1em;

    box-shadow: var(--shadow4);

    transition: 0.2s;

    translate: 0;
  }

  .logo {
    display: flex;
    flex-direction: column;
  }

  .logo img {
    margin: 0 auto;

    width: 5em;

    filter: var(--filter-offwhite) drop-shadow(var(--shadow1));
  }

  .logo p { 
    text-align: center;
    font-size: 1.2em;
  }

  .tab-list {
    display: flex;
    flex-direction: column;
  }
  
  .tab {
    position: relative;

    display: flex;
    gap: 0.5em;
    align-items: center;

    padding: var(--tab-padding) var(--nav-padding) var(--tab-padding) var(--nav-padding);

    cursor: pointer;
  }

  .tab div {
    width: 0.15em;
    height: 1em;

    background-color: var(--offwhite);

    border-radius: 0.15em;

    opacity: 0;

    translate: 0.3em 0;

    transition: 0.25s ease;

    box-shadow: var(--shadow1);
  }

  .tab:hover img {
    filter: var(--filter-offwhite) drop-shadow(var(--shadow5));
  }

  .tab:hover div {
    box-shadow: var(--shadow5);
  }

  .tab:hover p {
    text-shadow: var(--shadow5);
  }

  .active div {
    opacity: 1;

    translate: 0 0;
  }

  @media only screen and (max-width: 1250px) {

    :root {
      --hamburger-size: 3em;
    }

    .mobile-display {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 0 1.5em 2em 1em;

      width: 100%;
    }

    .mobile-display img {
      width: var(--hamburger-size);

      filter: var(--filter-color1);
    }

    .mobile-display p {
      font-weight: 600;
      color: var(--color1);
      text-shadow: none;
    }

    .nav:not(.opened) {
      opacity: 0;

      translate: -20em 0;
    }

    .nav {
      display: block;

      z-index: 10;

      position: absolute;
      top: calc(var(--hamburger-size) * 2);

      margin: 0 1.5em;

      height: fit-content;

      font-size: calc(0.8em + 0.5vw);
    }

    .logo {
      display: none;
    }

  }

</style>