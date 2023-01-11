<script>

  //get dimensions
  export let height;
  export let margin;

  //get scale 
  export let scale;

  //get ticks
  export let ticks;
  //get ticks exponent
  export let tickExp;

</script>

<g class="axis-x">

  {#each ticks as tick}
  
    <text x={scale(tick)} y={height - margin.bottom} dy="6" dominant-baseline="hanging">

      {tickExp < 0 ? tick.toFixed(tickExp * -1) : tick}

    </text>

  {/each}

</g>