<script>

  export let slides;

  export let width;
  export let height;

  export let delay;
  export let transition;

  let active = 0;

  setInterval(() => active = (active + 1) % slides.length, delay * 1000);

</script>

<main>

  <div class="crossfade" style={`
    width: ${width};
    height: ${height};
  `}>
    {#each slides as src, i}
      <div class={`slide ${i === active && `active`}`} style={`
        background-image: url(/src/img/knife${src}.jpg);
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
