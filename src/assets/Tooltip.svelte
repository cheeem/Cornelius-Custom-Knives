<script>

  //get data entry
  export let entry;
  //get axis data
  export let axises;

  //get axis scales
  export let xScale;
  export let yScale;
  
</script>

<div class='tooltip' style="
  position: absolute;
  left: {xScale(entry?.[axises.x.key]) ?? 0}px;
  top: {yScale(entry?.[axises.y.key]) ?? 0}px;
  opacity: {entry ? '1' : '0'};"
>

  {#if entry}

    {#if axises.name}

      <p class="name"> 

        <span class="label"> {axises.name.label}: </span> 

        <span class="value"> {entry[axises.name.key]} </span>
        
      </p> 

    {/if}

    <p> <span class="label"> {axises.x.label}: </span> <span class="value"> {entry[axises.x.key]} </span> </p> 

    <p> <span class="label"> {axises.y.label}: </span> <span class="value"> {entry[axises.y.key]} </span> </p>

  {/if}

</div>

<style>

  .tooltip {
    padding: 0.75em;

    background: var(--darkgrey-8);

    border: 0.1em solid var(--offwhite);
    border-radius: 0.5em;

    box-shadow: var(--shadow);

    pointer-events: none;

    transition:
      translate 0.3s ease,
      left 0.3s ease,
      top 0.3s ease
    ;
  }

  p > * {
    color: var(--offwhite);

    font-size: 0.75rem;
  }

  .label {
    font-weight: 400;
  }

  .value {
    font-weight: 600;
    color: orangered;
  }

</style>