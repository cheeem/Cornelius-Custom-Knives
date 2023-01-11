<script>

  //get dimensions
  export let width;
  export let margin;

  //get scale 
  export let scale;

  //get ticks
  export let ticks;
  //get tick exponent
  export let tickExp;

</script>

<g class="class-y" transform="translate({margin.left} {margin.top})">

  {#each ticks as tick}

    <text x={0} y={scale(tick)} dy="-6">

      {tickExp < 0 ? tick.toFixed(tickExp * -1) : tick}

    </text>

    <line x1="0" y1={scale(tick)} x2={width} y2={scale(tick)} 
      stroke={tick == 0 ? 'var(--darkgrey)' : "var(--mediumgrey)"}
    />

  {/each}

</g>