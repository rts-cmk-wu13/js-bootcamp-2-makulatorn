var numOne, numTwo, res, temp;
function beregnForhold()
{
  numOne = parseInt(document.getElementById("one").value);
  numTwo = parseInt(document.getElementById("two").value);

  if(numOne && numTwo){
    if (numTwo === 0){
        return; 
    }

    temp = document.getElementById("result");
    temp.style.display = "block";
    
    res = numOne + numTwo;
    document.getElementById("divide").value = res;
  }else{
    alert("De tal går vist ikke kammerat >:(");
  }
}

