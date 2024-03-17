const countValue = document.querySelector('#counter');
 
const increment = ()  => {
    //get the value
    let value = parseInt(countValue.innerHTML);
    //set the value
    value= value + 1;
    //set the value on the UI
    countValue.innerHTML = value;
};
const decrement = ()  => {
    //get the value
    let value = parseInt(countValue.innerHTML);
    //set the value
    value= value - 1;
    //set the value on the UI
    countValue.innerHTML = value;
};