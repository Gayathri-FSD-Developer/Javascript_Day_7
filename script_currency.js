var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function()
{
    var result = JSON.parse(request.response);
//     var mapping =result.map((ele)=>ele.currencies);
//     var currFilter =mapping.filter((ele)=>ele.name=="United States dollar");
// //  console.log(currFilter);

for(i=0;i<result.length;i++)
{
    for(var key in result[i])
    {
        // console.log(key);exit;
       Object.entries(result[i][key]).forEach(([key,value]) => {
        if(key=="USD")
        {
            // console.log(key,":",value);
            console.log(result[i]);
        }        
       });
    }
}
}
