<script>

  //import svgs
  import svg_card from '../svg/Card.svg';
  import svg_key from '../svg/Key.svg';
  import svg_flag_za from '../svg/FlagZA.svg';
  import svg_flag_us from '../svg/FlagUS.svg';
  import svg_flag_ca from '../svg/FlagCA.svg';

  //import library functions
  import { queryDatabase } from '../utils/data';

  //import assets 
  import Linechart from '../assets/Linechart.svelte';

  //define intervals
  const intervals = [
    { query: '1 MONTH', label: 'Last Month' },
    { query: '3 MONTH', label: 'Last 3 Months' },
    { query: '6 MONTH', label: 'Last 6 Months' },
    { query: '1 YEAR', label: 'Last Year' },
  ];

  const datasets = {
    prices: [
        {
        color: 2,
        label: `Paid Per Card`,
        headerPrefix: `Amount`,
        fields: [
          { svg: svg_flag_za, value: 23 / 100, hasDollarSign: true },
          { svg: svg_flag_us, value: Math.round(23 * 0.058) / 100, hasDollarSign: true },
          { svg: svg_flag_ca, value: Math.round(23 * 0.079) / 100, hasDollarSign: true },
        ],
      },
      {
        color: 3,
        label: `Paid Per Set`,
        headerPrefix: `Amount`,
        fields: [
          { svg: svg_flag_za, value: 279 / 100, hasDollarSign: true },
          { svg: svg_flag_us, value: Math.round(279 * 0.058) / 100, hasDollarSign: true },
          { svg: svg_flag_ca, value: Math.round(279 * 0.079) / 100, hasDollarSign: true },
        ],
      },
      {
        color: 4,
        label: `Made Per Set`,
        headerPrefix: `Amount`,
        fields: [
          { svg: svg_flag_za, value: 122 / 100, hasDollarSign: true },
          { svg: svg_flag_us, value: Math.round(122 * 0.058) / 100, hasDollarSign: true },
          { svg: svg_flag_ca, value: Math.round(122 * 0.079) / 100, hasDollarSign: true },
        ],
      },
      {
        color: 7,
        label: `Revenue Gained`,
        headerPrefix: `Key`,
        fields: [
          { svg: svg_flag_za, value: 16278 / 100, hasDollarSign: true },
          { svg: svg_flag_us, value: Math.round(16278 * 0.058) / 100, hasDollarSign: true },
          { svg: svg_flag_ca, value: Math.round(16278 * 0.079) / 100, hasDollarSign: true },
        ],
      },
    ],
    quantities: [
      {
        label: `Cards Bought`,
        value: 1027,
        svg: svg_card,
      },
      {
        label: `Keys Traded For`,
        value: 23,
        svg: svg_key,
      },
    ],
  }

  //define selected interval default
  let selectedInterval = 0;

  //define selected dataset defaults
  let selectedDataset = {
    i: 0, //index
    type: 'prices',
  }

  let offsetMs = offset => new Date(new Date().setDate(new Date().getDate()+offset)).getTime();

  let lines = [
    {
      color: 1,
      label: 'Cost Per Card',
      data: [
        {
          x: offsetMs(-1),
          y: 100,
        },
        {
          x: offsetMs(-2),
          y: 80,
        },
        {
          x: offsetMs(-3),
          y: 70,
        },
        {
          x: offsetMs(-4),
          y: 50,
        },
        {
          x: offsetMs(-5),
          y: 30,
        },
      ],
    },
  ]

</script>

<div class="page home">

  <div class="row">

    {#each datasets.prices as { fields, label, color, }, i}
      <div class="display"
        on:click={() => selectedDataset = { type: 'prices', i, }}
        on:keydown={() => selectedDataset = { type: 'prices', i, }}
      >
        <div class="fields">
          {#each fields as { svg, value, }}
            <div>
              <img src={svg} alt="" />
              <p class="value"> ${value.toFixed(2)} </p>
            </div>
          {/each}
        </div>
        <p class="label" style={
          `background-color: var(--color${color});`
        }>
          {label} </p>
        <div class={
          selectedDataset.type === 'prices' && 
          selectedDataset.i === i ? 
          `tab selected` : `tab`
        } style={
          `background-color: var(--color${color});`
        }> </div>
      </div>
    {/each}

  </div>

  <div class="column">

    <div class="interval">
      <select bind:value={selectedInterval}>
        {#each intervals as { label }, i}
          <option value={i}> {label} </option>
        {/each}
      </select>
    </div>

    {#each datasets.quantities as { label, value, svg, }, i}
      <div class="display" 
        on:click={() => selectedDataset = { type: 'quantities', i, }}
        on:keydown={() => selectedDataset = { type: 'quantities', i, }}
      >
        <div class="display-background"> <img src={svg} alt="" /> </div>
        <p class="label"> {label} </p>
        <p class="value"> {value} </p>
        <div class={
          selectedDataset.type === 'quantities' && 
          selectedDataset.i === i ? 
          `tab selected` : `tab`
        } style={
          `background-color: var(--darkgrey);`
        }> </div>
      </div>
    {/each}

  </div>

  <div class="graph"> 
    <h3> 
      {datasets[selectedDataset.type][selectedDataset.i].headerPrefix ?? ''} 
      {datasets[selectedDataset.type][selectedDataset.i].label} 
      Over The {intervals[selectedInterval].label} 
    </h3> 
    <div>
      <Linechart {lines} />
    </div>
  </div>

</div>

<style> 

  p, select { 
    font-size: 1em;
    font-weight: 500;
    white-space: nowrap;
  }

  .home { 
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-areas: 
      'row row row row'
      'column graph graph graph'
      'column graph graph graph';
    gap: 2em;

    padding: 0 1.5em;  
  }

  .display {
    position: relative; 

    display: flex;
    flex-direction: column;
    gap: 0.5em;

    cursor: pointer;
  }

  .value {
    font-size: 2em;
    font-weight: 600;
  }

  .tab {
    position: absolute;
    bottom: -0.1em;
    left: 50%;

    margin-left: -1.5em;

    width: 3em;
    height: 0.5em;

    content: "";

    border-radius: 1em 1em 0 0;

    opacity: 0;

    transition: 0.25s 
  }

  .selected {
    bottom: 0;

    opacity: 1;

    translate: 0 0;
  }

  .row {
    grid-area: row;

    display: flex;
    justify-content: space-between;

    padding: 2em 3em;

    border-radius: 2em;
    box-shadow: var(--shadow7) var(--darkgrey-01);
  }

  .row .label {
    padding: 0.1em 0.4em;

    width: fit-content;

    background-color: var(--darkgrey);

    color: var(--offwhite);

    border-radius: 0.2em;    
  }

  .fields {
    display: flex; 
    flex-direction: column;
  }

  .fields>* {
    display: flex;
    align-items: center;
    gap: 0.2em;
  }

  .fields img {
    filter: unset;

    height: 1.5em;
  }

  .row .tab {
    translate: 0 2em;
  }

  .column {
    grid-area: column;

    display: flex;
    flex-direction: column;
  }

  .interval {
    display: grid;
    place-items: center;

    padding: 0.15em 3em;
  }

  .interval select {    
    width: 100%;

    border: none;
  }

  .column .display {
    margin: auto 0;
    padding: 1em 3em;

    border-radius: 2em;
    box-shadow: var(--shadow7) var(--darkgrey-01);
  }

  .display-background {
    position: absolute;
    top: 0;
    left: 0;

    display: grid;
    place-items: center;

    width: 100%;
    height: 100%;

    overflow: hidden;
  }

  .display-background img {
    width: 14em;

    rotate: -30deg;

    opacity: 0.2;
  }

  .column .value {
    font-size: 5em;
  }
  
  .column .label {
    translate: 0 1.3em;
  }

  .graph {
    grid-area: graph;

    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  .graph h3 {
    font-size: 1.3em;
  }

  .graph div {
    height: 100%;
  }

  @media only screen and (max-width: 950px) {
    
    .home {
      grid-template-areas:
        'column'
        'row';
      gap: 1em;
    }

    .home::after {
      content: "";
      height: 2em;
    }

    .display {
      cursor: unset;
    }

    .tab {
      display: none;
    }

    .row {
      flex-direction: column;
      justify-content: space-between;
      gap: 1em;

      padding: unset;

      box-shadow: unset;
    }

    .row .display {
      display: grid;
      place-items: center;
    }

    .row .display {
      margin: auto 0;
      padding: 1em 3em;

      border-radius: 2em;
      box-shadow: var(--shadow7) var(--darkgrey-01);
    }

    .fields {
      flex-direction: row;
      gap: 3vw;
    }

    .interval {
      margin-bottom: 2em;
    }

    .interval select {
      justify-self: left;
      
      width: fit-content;
    }

    .graph {
      display: none;
    }

  }

  @media only screen and (max-width: 750px) {

    .fields {
      flex-direction: column;
      gap: unset;
    }

    .row .display {
      display: block;
    }

  }

</style>