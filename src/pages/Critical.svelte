<script>

  //import svgs
  import svg_refresh from '../svg/Refresh.svg';
  
  //import module functions
  import * as Data from '../utils/data.js';
  
  //import assets
  import List from '../assets/List.svelte';
  import Loader from '../assets/Loader.svelte';

  //define query response
  let res;

  //redefine price error query response
  const query = ({}) => res = Data.queryDatabase(`
    SELECT * 
    FROM errorLogs 
    WHERE name LIKE '%CRITICAL%' 
    ORDER BY date DESC
  `);
  
  //handle price error reponse
  const handle = async (res) => {

    //await entries from price error response
    let entries = await res;

    //define list rows
    const rows = [];

    //iterate through each entry to fill rows with critical errorLog data
    Object.values(entries).forEach(entry => {

      //get the date, name, and data of the critical errorLog
      let { date, name, data, } = entry;

      //get the critical error type
      let type = name.split('CRITICAL:')[1];

      //get the file and function where the critical error occured
      let { file: fileName, [`function`]: functionName = '' } = JSON.parse(data);

      //push the critical error data to rows
      rows.push({
        date, 
        fileName,
        functionName,
        type,
      });

    });

    //return rows
    return rows;
  
  }

  //define order price config
  const config = {
    title: ``,
    columns: [
      { key: 'date', label: 'Date', },
      { key: 'fileName', label: 'File', },
      { key: 'functionName', label: 'Function', },
      { key: 'type', label: 'Error Type', },
    ],
    plugins: [
    ],
    filters: {
    },
  }

  //query database for order price errors
  query({});
  
</script>

<div class="page critical">

  {#await handle(res)}
    <Loader />
  {:then rows} 
    <List {rows} {...config} /> 
  {/await}

</div>

<style>
  
</style>