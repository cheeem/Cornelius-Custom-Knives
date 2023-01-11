<script>

  //import svgs
  import svg_refresh from '../svg/Refresh.svg';
  import svg_status0 from '../svg/Trash-alt.svg';
  import svg_status1 from '../svg/Checked-box.svg';
  
  //import module functions
  import * as Data from '../utils/data.js';
  
  //import assets
  import List from '../assets/List.svelte';
  import Loader from '../assets/Loader.svelte';

  //define query response
  let res;

  //redefine price error query response
  const query = ({}) => res = Data.queryDatabase(`
    SELECT 
      id,
      marketName, 
      steamGamesID, 
      status 
    FROM steamTradingCards 
    WHERE NOT status = 1
    AND NOT status = 0
  `);
  
  //handle price error reponse
  const handle = async (res) => {

    //await entries from price error response
    let entries = await res;

    //define price error error types
    let errorTypes = {
      1: 'None',
      2: 'Steam Query',
      3: 'No Listings',
      4: 'Price Error Parse',
      5: 'Database Update'
    }

    //if the query returns no response, return an empty array
    if(entries.result) return [];

    //return rows with added errorType field
    return Object.values(entries).map(row => ({...row, errorType: errorTypes[row.status]}));
  
  }

  const setStatus = async ( status, id, ) => Data.queryDatabase(`
    UPDATE steamTradingCards 
    SET status = ${status} 
    WHERE id = ${id}
  `);


  //define order price config
  const config = {
    title: ``,
    columns: [
      { key: 'marketName', label: 'Market Name', link: (marketName) => `https://steamcommunity.com/market/listings/753/${marketName}`, },
      { key: 'steamGamesID', label: 'Game ID', link: (gameID) => `https://steamcommunity.com/market/search?q=&category_753_Game%5B%5D=tag_app_${gameID}&category_753_cardborder%5B%5D=tag_cardborder_0&category_753_item_class%5B%5D=tag_item_class_2&appid=753`, },
      { key: 'status', label: 'Status', },
      { key: 'errorType', label: 'Error Type', },
    ],
    plugins: [
      { label: "Status Set 1", svg: svg_status1, action: ({ selected: { id } }) =>  setStatus(id, 1), },
      { label: "Status Set 0", svg: svg_status0, action: ({ selected: { id } }) =>  setStatus(id, 0), },
      { label: "Refresh Data", svg: svg_refresh, action: query },
    ],
    filters: {
      sortKey: 'status',
      sortOrder: 1,
    },
  }

  //query database for order price errors
  query({});
  
</script>

<div class="page price-errors">

  {#await handle(res)}
    <Loader />
  {:then rows} 
    <List {rows} {...config} /> 
  {/await}
  
</div>

<style>
  
</style>