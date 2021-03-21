function ticket(arr,n){
  var finalAns = 0;
  const regex = /[A-Z]/g;
  const numex = /[0-9]/g;
  var cpy = [...arr];
  var firstOcc = [];
  var finalOcc = [];
  const minLen = 10;
  const maxLen = 20;
  for(i=0;i<n;i++){
    if(arr[i].length >= minLen && arr[i].length <= maxLen){
      firstOcc.push(arr[i])
    }else{
      var drp = cpy.indexOf(arr[i])
      finalOcc.unshift(drp);
    }
  }
  
  /* Function to execute first three letters are true or not*/
  
  function firstThr(el){
    var found = el.slice(0,3);
    var notEq = (found.match(regex)).join('');
    if(notEq.length != 3){
      var drp = cpy.indexOf(el);
      if(finalOcc.includes(drp) != true){
        finalOcc.unshift(drp);
      }
    }
  }
  
  function secondThr(el){
    var found = el.slice(3,7);
    var notEq = (found.match(numex)).join('')
    if(notEq.length == 4){
      if(notEq>1900 && notEq<2019){
        return notEq
      }else{
        var drp = cpy.indexOf(el);
        if(finalOcc.includes(drp) != true){
        finalOcc.unshift(drp);
      }
      }
    }else{
      var drp = cpy.indexOf(el);
      if(finalOcc.includes(drp) != true){
        finalOcc.unshift(drp);
      }
    }
  }
  
  function thirdThr(el){
    stReverse = el.split('')
    finReverse = ((stReverse.reverse()).join(''))
    if((finReverse.slice(0,1))==((finReverse.slice(0,1).match(regex)))){
      return null;
    }else{
      var drp = cpy.indexOf(el);
      if(finalOcc.includes(drp) != true){
        finalOcc.unshift(drp);
      }
    }
  }
  
  
  function fourthThr(el){
    
    if(el.length >= minLen && el.length <= maxLen ){
      var stReverse = el.split('');
      var firstReverse = ((stReverse.reverse()).join(''));
      var firstSlice = firstReverse.slice(1);

      if(firstSlice.length >= 6){
        var firstRm = el.slice(7);
        var lastRm = (((firstRm.split('')).reverse()).join('')).slice(1);
        if(lastRm.match(regex)){
          var drp = cpy.indexOf(el);
          if(finalOcc.includes(drp) != true){
            finalOcc.unshift(drp);
          }
        }
      }else{
        var drp = cpy.indexOf(el);
        if(finalOcc.includes(drp) != true){
          finalOcc.unshift(drp);
        }
      }
    
    }else{
      
    }
    
  }
  

  
  for(j=0;j<firstOcc.length;j++){
    firstThr(firstOcc[j]);
    secondThr(firstOcc[j]);
    thirdThr(firstOcc[j]);
    fourthThr(firstOcc[j]);
  }
  
  console.log(finalOcc.length)
  
  /* This is to check if the Year is true or not*/
  
}

ticket(["AZX200320L","JZA1905100A","JZ2A1905100A","UU2003A4","OPA1995300A","ASA2001A1S2X","ASA2001122A","A2A2001A1S2X","JZA1905100A"],9)
