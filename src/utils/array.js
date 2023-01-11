export const unique = array => [...new Set(array)];

export const pluck = (array, key) => array.map(element => element[key]);

export const pluckParse = (array, key) => array.map(element => parseFloat(element[key]));

export const values = (array) => {

  let res = [];

  array.forEach(elm => res = [...res, ...Object.values(elm)]);

  return res;

}