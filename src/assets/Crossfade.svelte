<script>

  //get crossfade slides
  export let slides;

  //get crossfade dimensions
  export let width;
  export let height;

  //get crossfade delay and transition
  export let delay;
  export let transition;

  //define the active state
  let active = 0;

  //cycle through each image at an interval of the given delay
  setInterval(() => active = (active + 1) % slides.length, delay * 1000);

</script>

<main>

  <div class="crossfade" style={`
    width: ${width};
    height: ${height};
  `}>
    {#each slides as id, i}
      <div class={`slide ${i === active && `active`}`} style={`
        background-image: url(/src/img/knife${id}.jpg);
        transition: opacity ${transition}s;
      `}> </div>
    {/each}
  </div>
  
</main>

<style>

  .crossfade {
    overflow: hidden;

    position: relative;
  }

  .slide {
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: 100%;

    background-repeat: no-repeat;
    background-size: cover;

    opacity: 0;
  }

  .active {
    opacity: 1;
  }
  
</style>
