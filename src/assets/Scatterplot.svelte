<script>

  //import library functions
  import { scaleLinear } from "d3-scale";
  import { max } from "d3-array";

  //import assets
  import AxisX from './AxisX.svelte';
  import AxisY from './AxisY.svelte';
  import Tooltip from './Tooltip.svelte';

  //get entries values
  export let entries;
  //get axis data
  export let axises;

  //define hovered index
  let hovered;

  //get dimensions
  export let dimensions;
  //define dimensions
  let { margin } = dimensions;
  let height = 0;
  let width = 0;

  const calcTickExp = (max) => Math.floor(Math.log10(max / 10)) + 1;

  const calcTickLen = (max, tickFactor) => Math.ceil(max / tickFactor) + 1;

  const calcTicks = (length, tickFactor) =>  Array.from({ length }, (elm, i) => i * tickFactor);

  //calculate max dimensions
  const xMax = max(entries, value => value[axises.x.key]);
  const yMax = max(entries, value => value[axises.y.key]);

  //calculate tick exponent
  const xTickExp = calcTickExp(xMax);
  const yTickExp = calcTickExp(yMax);

  //calculate factor
  const xTickFactor = Math.pow(10, xTickExp);
  const yTickFactor = Math.pow(10, yTickExp);

  //calculate tick length
  const xTickLen = calcTickLen(xMax, xTickFactor);
  const yTickLen = calcTickLen(yMax, yTickFactor);

  //calculate ticks 
  const xTicks = calcTicks(xTickLen, xTickFactor);
  const yTicks = calcTicks(yTickLen, yTickFactor);
  
  //calculate the x scale
  $: xScale = scaleLinear()
    .domain([0, xMax + Math.pow(10, xTickExp)])
    .range([0, width - margin.left - margin.right]);
 
  //calculate y scale
  $: yScale = scaleLinear()
    .domain([0, yMax + Math.pow(10, yTickExp)])
    .range([height - margin.top - margin.bottom, 0]);
      
</script>

<div class="scatterplot" style={`
  height: ${dimensions.height};
  width: ${dimensions.width};
`}
  bind:clientWidth={width}
  bind:clientHeight={height}
>

  <p class="scatterplot-header"> {axises.y.label} vs. {axises.x.label} </p>

  <svg class="chart" {width} {height} on:mouseleave={() => hovered = null}>

    <AxisX {height} scale={xScale} {margin} ticks={xTicks} tickExp={xTickExp} />

    <AxisY {width} scale={yScale} {margin} ticks={yTicks} tickExp={yTickExp} />

    <g class='point' transform="translate({margin.left} {margin.top})">
      
      {#each entries.sort((a, b) => a[axises.x.key] - b[axises.x.key]) as entry, i}
        
        <circle 
          r={hovered != null && hovered === i ? "5" : "3"}
          fill="{hovered === i ? "orangered" : "var(--darkgrey)"}"
          stroke="var(--darkgrey)" 
          cx={xScale(entry[axises.x.key])}
          cy={yScale(entry[axises.y.key])}
          on:mouseover={() => hovered = i}
          on:focus={() => hovered = i}
          tabIndex="0"
          style="z-index: {hovered === i ? "2" : "1"}"
        />
      
      {/each}
      
    </g>

  </svg>

	<Tooltip entry={entries[hovered]} {axises} {xScale} {yScale} />

</div>

<style>

  .scatterplot {
    position: relative;
  }

  .scatterplot-header {
    width: fit-content;

    margin-bottom: 1em;

    font-size: 1.5em;
    font-weight: 600;
  }

  circle {
    transition: r 0.3s ease, opacity 0.3s ease;
    
    cursor: pointer;
  }

  circle:focus {
    outline: none;
  }

</style>
    
    