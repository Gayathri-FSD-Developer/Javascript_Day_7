// Get all the countries from Asia continent /region using Filter function


// Step 01: Create a XHR Object to fetch datas from API
var request = new XMLHttpRequest();

request.open(GET,"https://restcountries.com/v3.1/all");
request.send();
request.onload=function()
{
    
}