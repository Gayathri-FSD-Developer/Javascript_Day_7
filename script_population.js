// Step 01: Create a XHR Object to fetch datas from API
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function()
{
    var result = JSON.parse(request.response);
    // console.log(result);
    var population =result.filter((ele)=>ele.population<200000);
    console.log(population);
}