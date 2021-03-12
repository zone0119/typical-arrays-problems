
exports.min = function min (array) {
    //console.log(arguments);
    //TypeError: Cannot read property 'length' of undefined

    
    if(Array.isArray(array) && array.length == 0 || array === undefined)
    return 0;

    console.log("length : " + array.length);
      var minCurr;
      for (let index = 0; index < array.length; index++) 
      {              
              if(index == 0)
              {
                  minCurr = array[index];
              }
              else if(array[index] <= minCurr)
              {
                  minCurr = array[index];
              }        
      }
      //console.log("minCurr : " + minCurr);      
    return minCurr;
}

exports.max = function max (array) {
  if(Array.isArray(array) && array.length == 0 || array === undefined)
  return 0;
  //console.log(arguments);
    var maxCurr;
    for (let index = 0; index < array.length; index++) 
    {       
             
            if(index == 0)
            {
                maxCurr = array[index];
            }
            else if(array[index] >= maxCurr)
            {   
                maxCurr = array[index];
            }

        
    }
    //console.log("maxCurr : " + maxCurr);

    
  return maxCurr;
}

exports.avg = function avg (array) {
    //console.log(arguments);
        if(Array.isArray(array) && array.length == 0 || array === undefined)
            return 0;
    var summa = 0;
    for (let index = 0; index < array.length; index++) 
    {       

                summa = summa + array[index];
                //console.log("index : " + arguments[index]);
    }

    //console.log("avg : " + avg);
    
  return summa/array.length;
}
