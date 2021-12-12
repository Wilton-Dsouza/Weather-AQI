document.querySelector('#submitDetailsButton').addEventListener('click', (event) => {
    
    var city =document.querySelector('#cityInfo').value
    //Add error handler
    window.location.href=`/displayCityMap?city=${city}`
    event.preventDefault()
})