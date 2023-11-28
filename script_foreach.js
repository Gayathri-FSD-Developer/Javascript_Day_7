var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function()
{
    var result = JSON.parse(request.response);
    var Name;
    var Capital;
    var Flag;
    var array=[];
    for(i=0;i<result.length;i++)
    {
        Object.entries(result[i]).forEach(([key,value])=> {
            // console.log(key);
              if(key =="name"){
               console.log(key,":",  value);
            // Name = value;
              }
              if(key=="capital")
              {
                console.log(key, ":", value);
                // Capital = value;
              }
              if(key=="flags")
              {
                console.log(key ,":", value);
                // Flag = value;
                // console.log(Flag);
              }

              
        });
        // array[i]=[Name,Capital,Flag];
    }
    // console.log(array);
}