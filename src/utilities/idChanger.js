import data from '../data/data.js';

export const newData = Object.values(data).flatMap(arr => Object.values(arr));

export const changedIds = newData.map(item => {
    return {...item, id: item.wpnName.toLowerCase().replace(/ /g, '_')}
})
