// This is a JavaScript used by index.html
// we need to listen for the button click
// modern ES6 function instead of function doStuff(){}
const doStuff = ()=>{
    whatUserTyped = txtCustom.value /// NB value is a PROPERTY of the tag
    console.log(whatUserTyped) // useful for debugging
    // we can use back-ticks for string interpolation
    newURL = `https://via.placeholder.com/320x120.png?text=${whatUserTyped}`
    myImage.setAttribute('src', newURL)
}
const callAPI = ()=>{
    // get the values from the form fields
    whichCategory = txtCat.value
    whichID       = txtID.value
    // here we make a call to the API end-point
    fetch(`https://jsonplaceholder.typicode.com/${whichCategory}/${whichID}`)
        .then(response => response.json()) // or response.text() or response.html()
        .then(data => { // at this moment, the JSON text has been converted to ES object
            console.log(data)
            // send the data to our 'monitor' tag
            monitor.innerHTML = data['name']
        });

}
btnGetImage.addEventListener('click', doStuff)
btnGetData.addEventListener('click', callAPI)