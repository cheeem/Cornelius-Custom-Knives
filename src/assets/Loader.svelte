<div class="loader">

  {#each {length: 10} as element, i}

    <div class="bar" style="animation-delay: {i/10}s"> </div>

  {/each}
  
</div>

<style> 

  .loader {
    display: flex;
    justify-content: center;
  }

  .bar {
    width: 1em;
    height: 6em;

    background: var(--offwhite);

    border-top-right-radius: 2.5em;
    border-top-left-radius: 2.5em;

    /*   box-shadow:5px 10px 20px inset rgba(255,23,25.2); */

    transform-origin: bottom center;

    animation: loader 0.8s linear infinite;
  }

  @keyframes loader {
    0% {
      transform: scaleY(0.1);
      background: none;
    }
    50% {
      transform: scaleY(1);
      background: var(--color1);
    }
    100% {
      transform: scaleY(0.1);
      background: transparent;
    }
  }

</style>