var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function()
{
    var result = JSON.parse(request.response);
    // mapping the specific element to fetch from array
    var mapping = result.map((ele)=>ele.population);
    // reduce method used to sum of the array element
    var totalPopulation = mapping.reduce((acc,ele)=>acc+ele);
    console.log(totalPopulation);

}