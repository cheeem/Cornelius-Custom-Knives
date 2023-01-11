export const queryDatabase = async sql => {
  
  //replace invalid characters
  sql = sql.replace(/'/g, "%27").replace(/ /g, '+').replace(/,/g, '%2C').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/#/g, '%23').replace(/&/g, '%26');
  
  //intialize database query
  let query = `https://www.shedskins.com/api-ext/token.php?token=ThisShouldBeARareTokenButIGuessThatItIsnt&query=${sql}`
  
  //query database for the response
  const res = await fetch(query);
        
  //convert the response to json
  const json = await res.json();

  //return the response data promise in json format
  return json;
  
}

export const getKeyPrice = async () => {

  //query tf2 key price
  const entry = await queryDatabase(`
    SELECT *
    FROM dataLogs 
    WHERE action = 'KEY_LISTINGS'
    ORDER BY date DESC
    LIMIT 1
  `);

  //parse and return tf2 key price 
  return parseFloat(JSON.parse(entry[0].response).netPrice);

}

export const parseDate = date => new Date(date).getTime();