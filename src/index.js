
exports.min = function min (array) {
    
  //console.log(arguments);
    
    var minCurr;
    for (let index = 0; index <= arguments.length; index++) 
    {
        
            if(index == 0)
            {
                minCurr = arguments[index];
            }
            else if(arguments[index] < minCurr)
            {   
                minCurr = arguments[index];
            }

        
    }
    //console.log("minCurr : " + minCurr);
	
  return minCurr;
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
