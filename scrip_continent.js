// Get all the countries from Asia continent /region using Filter function


// Step 01: Create a XHR Object to fetch datas from API
var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function()
{
    var result = JSON.parse(request.response);
    // Using Filter array method to filter the specific values in each and every element in the array
    var continent = result.filter((ele)=>ele.continents=="Asia");
    console.log(continent);    
}