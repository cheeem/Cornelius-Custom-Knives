<script>

  //import module functions
  import { pluck, unique, values } from '../utils/array.js';

  //import svgs
  import svg_link from '../svg/link.svg';
  import svg_filter from '../svg/Filter.svg';

  //define props
  export let title;
  export let columns; 
  export let rows;
  export let plugins;
  export let filters;
  
  let {
    //define search filters
    searchInput = "",
    searchKey = "",
    //define sort conditions
    sortOrder = 1,
    sortKey = columns[0].key,
    //define column filters
    columnFilters = {},
  } = filters;

  //define selected index 
  let selected;

  const resetFilters = ({}) => {

    //reset selected
    selected = undefined;

    //reset filters
    searchInput = "";
    searchKey = "";
    sortOrder = 1; 
    sortKey = columns[0].key;
    columnFilters = {};

    //create key-value pairs in columnFilters between each column key and an empty string
    columns.forEach(({ key }) => columnFilters[key] = "");

  }

  const getSearchValues = ({ rows, searchKey, }) => unique(
      //if there is a search key return unique values in rows under that search key
      searchKey ? pluck(rows, searchKey)
      //otherwise, return unique values in rows
      : values(rows));

  const filter = ({ row, searchInput, searchKey, columnFilters, }) => {

    //reset selected
    selected = undefined;

    //return false if a key does not satisfy the column filters
    if(Object.keys(row).some(key =>
      columnFilters[key] ? row[key] !== columnFilters[key] : false)
    ) return false;

    //if there is a search key, return true if the value for the search key for the iterated row includes the search input
    return searchKey ? includesInput(row[searchKey], searchInput)
    //otherwise return true if there is a value in any key for the iterated row includes the search input
      : columns.some(column => includesInput(row[column.key], searchInput));

  }

  //return if the value includes the input
  const includesInput = (value, input) => value.toLowerCase().includes(input.toLowerCase());

  //sort by the given sortKey and sortOrder (1 = ASC, -1 = DESC)
  const sort = ({ rows, sortKey, sortOrder, }) => rows.sort((a, b) => 
    parseFloat(a[sortKey]) && parseFloat(a[sortKey])
      ? (parseFloat(a[sortKey]) > parseFloat(b[sortKey]) ? sortOrder : sortOrder * -1)
      : (a[sortKey] > b[sortKey] ? sortOrder : sortOrder * -1)
  );

  //define list options
  $: options = [
    ...plugins,
    { label: "Reset Filters", svg: svg_filter, action: ({}) => resetFilters},
  ];

</script>

<div class="list">

  {#if title}
    <h2> {title} </h2>
  {/if}

  <div class="list-nav"> 

    <div class="list-nav-left">

        <input name="search-input" type="text" list="search-values" placeholder="Search" bind:value={searchInput} />
  
        <datalist id="search-values"> 
  
          {#each getSearchValues({ rows, searchKey, }) as value}
  
            <option value={value} />
  
          {/each}
  
        </datalist>
      
        <button class="sort-direction" on:click={() => sortOrder *= -1}>
          
          {sortOrder > 0 ? "Ascending" : "Descending"} Order
        
        </button>

        <select class="search-key" bind:value={searchKey}>
  
          <option value=""> Search By All Fields </option>
  
          {#each columns as { key, label, }}
  
            <option value={key}> Search By {label} </option>
  
          {/each}
  
        </select>
  
        <select class="sort-key" bind:value={sortKey}>
  
          {#each columns as { key, label, }}
  
            <option value={key}> Sort By {label} </option>
  
          {/each}
  
        </select>
  
    </div>

    <div class="list-nav-right"> 

      <ul class="option-list"> 

        {#each options as { action, svg, label, }}

          <li class="option" on:click={action({ selected, })} on:keydown={action({ selected, })}> 

            <img src={svg} alt=""> 
            
            <p> {label} </p>

          </li>

        {/each}

      </ul>

    </div>

  </div>
  
  <div class="table" style={`grid-template-columns: auto repeat(${columns.length}, 1fr)`}>
    
    <div class="row header">
      
      <div class="column-header"> 
        
        <p> # </p>
      
      </div>
      
      {#each columns as { key, label, }}
        
        <div class="column-header"> 

          <select bind:value={columnFilters[key]}> 

            <option value=""> {label} </option>

            {#each unique(pluck(rows, key)) as value}

              <option {value}> {value} </option>

            {/each}

          </select>

        </div>

      {/each}

    </div>

    {#each sort({ rows, sortKey, sortOrder, }) as row, i}

      {#if filter({ row, searchInput, searchKey, columnFilters, })}

        <div class="row item {selected?.listID === i && 'selected'}"
          on:click={() => selected = selected?.listID === i ? undefined : {...row, listID: i}}
          on:keydown={() => selected = selected?.listID === i ? undefined : {...row, listID: i}}
        > 

          <div class="value">

            <p> {i + 1} </p>

          </div>

          {#each columns as { link, key, }}

            {#if link}

              <div class="value">

                <a href={link(row[key])} target="_blank" rel="noreferrer"> 
                
                  <img src={svg_link} alt=""/>
                  
                  <p> {row[key]} </p>
  
                </a>

              </div>

            {:else}

              <div class="value"> 
                
                <p> {row[key]} </p>

              </div>
              
            {/if}

          {/each}

        </div>

      {/if}

    {/each}

  </div>

</div>
  
<style>

  :root {
    --nav-height: 4.5em;
    --nav-bottom-padding: 1em;
    --column-header-height: 3em;
    --transition: 0.3s;
  }

  .list {
    overflow-y: scroll;

    position: relative;

    height: var(--page-height);
  }

  .list h2 {
    margin: 0.25em 0.75em;

    width: fit-content;

    font-size: 3em;
  }

  .list-nav {
    z-index: 4;

    position: sticky;
    top: 0;

    display: flex;
    justify-content: space-between;

    height: var(--nav-height);

    padding: 0em 2em var(--nav-bottom-padding) 2.5em;

  }

  .list-nav-left {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 0.4em;
    column-gap: 2em;
  }

  .list-nav, input, select, button {
    background-color: var(--offwhite);

    border: none;
  }

  input, button {
    padding: 0.2em 0.35em;

    background-color: var(--darkgrey);

    text-align: left;
    color: var(--offwhite);

    border: 0.15em solid var(--darkgrey);
    border-radius: 0.3em;

    /* box-shadow: var(--shadow2); */

    transition: var(--transition);
  }

  button, select {
    cursor: pointer;
  }

  input::placeholder {
    color: var(--lightgrey);
  }

  input:focus, button:hover {    
    background-color: var(--color1);

    transition: 0.1s;
  }

  button:active {    
    box-shadow: var(--shadow1);

    scale: 0.97;
  }

  .list-nav-right {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  .option-list {
    display: flex;
    gap: calc(1em + 2.5vw);

    padding: 0 1.5em;
  }

  .option {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 1em;

    cursor: pointer;
  }

  .option img {
    position: absolute;

    height: 2em;

    filter: var(--filter-darkgrey);

    scale: 1.4;

    transition: var(--transition);
  }

  .option p {
    position: absolute;

    font-size: 0.8em;
    font-weight: 600;

    translate: 0 0.75em;

    opacity: 0;

    transition: var(--transition);
  }

  .option:hover img {
    translate: 0 -0.75em;
    scale: 1;
  }

  .option:hover p {
    translate: 0 1.5em;

    opacity: 100;
  }

  .table {
    position: relative;

    display: grid;
    padding: 0 2em;
  }

  .row {
    display: contents;
  }

  .column-header {
    z-index: 5;
    position: sticky;
    top: calc(var(--nav-height) + var(--nav-bottom-padding));
  }

  .column-header, .value {
    padding: 0.8em;

    background-color: var(--offwhite);

    text-align: left;
    font-size: 0.8em;

    border-bottom: 0.025em solid var(--mediumgrey);

    transition: var(--transition);
  }

  .value p, .column-header select {
    overflow: hidden;

    /* max-width: 15vw; */

    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .column-header p  {
    font-weight: 800;
  }

  .column-header select {
    width: 100%;

    background-color: var(--offwhite);

    font-weight: 600;
    color: var(--darkgrey);
  }

  .item:not(.selected):hover .value {
    background-color: var(--lightgrey);

    transition: 0.2s;
  }

  .selected .value {
    z-index: 2;
    position: sticky;
    top: calc(var(--nav-height) + var(--nav-bottom-padding) + var(--column-header-height));
    bottom: 0;

    background-color: var(--color1);
  }

  .selected .value p, a {
    color: var(--offwhite);
  }

  .selected a img {
    filter: var(--filter-offwhite);
  }

  p {
    font-weight: 400;
  }

  a {
    display: flex;
    gap: 0.3em;

    width: fit-content;
  }

  a img {
    height: 1em;

    filter: var(--filter-darkgrey);

    translate: 0 0.1em;
  }

  a:hover p {
    font-weight: 500;
    /* color: var(--color1);
    text-shadow: var(--shadow3); */
  }

  /* a:hover img {
    filter: var(--filter-color1) drop-shadow(var(--shadow3));
  } */

</style>
  
  