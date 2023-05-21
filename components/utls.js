const reverse = arr => Array.from({length:arr.length},(_,i)=>arr[(arr.length-++i)]);
export default reverse;