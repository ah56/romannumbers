$(document).ready(function(){
  $("#numberinput").submit(function(event){
    event.preventDefault();
    var finalInput = ("#userinput");
    var finalOutput = convertToRoman("finalInput");
    $("#output").text(finalOutput);
  });
});

function convertToRoman(input){
  var array =[]
  for( i=0; i<=3; i === i+1){
    var inputDigit= input.charAt(0);
    array = array.concat(inputDigit);
  }
    for(var i=0; i<=3; i=i+1){for (var x=0; x<=9; x=x+1;);
      if (array.indexOf(x) = i){
        function = toRoman(x,i){ }
        x === toRoman(x);
      }
    }

    });
    /*if  ([array]===0 && inputDigit ==="0"){ inputDigit = " "};
    if  ([array]===0 && inputDigit ==="1"){ inputDigit = "I"};
    if  ([array]=0 && inputDigit ="2"){ inputDigit = "II"};
    if  ([array]=0 && inputDigit ="3"){ inputDigit = "III"};
    if  ([array]=0 && inputDigit ="4"){ inputDigit = "IV"};
    if  ([array]=0 && inputDigit ="5"){ inputDigit = "V"};
    if  ([array]=0 && inputDigit ="6"){ inputDigit = "VI"};
    if  (indexOf(array)=0 && inputDigit ="7"){ inputDigit = "VII"};
    if  (indexOf(array)=0 && inputDigit ="8"){ inputDigit = "VIII"};
    if  (indexOf(array)=0 && inputDigit ="9"){ inputDigit = "XI"};
    if  (indexOf(array)=1 && inputDigit ="0"){ inputDigit = ""};
    if  (indexOf(array)=1 && inputDigit ="1"){ inputDigit = "X"};
    if  (indexOf(array)=1 && inputDigit ="2"){ inputDigit = "XX"};
    if  (indexOf(array)=1 && inputDigit ="3"){ inputDigit = "XXX"};
    if  (indexOf(array)=1 && inputDigit ="4"){ inputDigit = "XL"};
    if  (indexOf(array)=1 && inputDigit ="5"){ inputDigit = "L"};
    if  (indexOf(array)=1 && inputDigit ="6"){ inputDigit = "LX"};
    if  (indexOf(array)=1 && inputDigit ="7"){ inputDigit = "LXX"};
    if  (indexOf(array)=1 && inputDigit ="8"){ inputDigit = "LXXX"};
    if  (indexOf(array)=1 && inputDigit ="9"){ inputDigit = "XC"};
    if  (indexOf(array)=2 && inputDigit ="0"){ inputDigit = ""};
    if  (indexOf(array)=2 && inputDigit ="1"){ inputDigit = "C"};
    if  (indexOf(array)=2 && inputDigit ="2"){ inputDigit = "CC"};
    if  (indexOf(array)=2 && inputDigit ="3"){ inputDigit = "CCC"};
    if  (indexOf(array)=2 && inputDigit ="4"){ inputDigit = "ID"};
    if  (indexOf(array)=2 && inputDigit ="5"){ inputDigit = "D"};
    if  (indexOf(array)=2 && inputDigit ="6"){ inputDigit = "DC"};
    if  (indexOf(array)=2 && inputDigit ="7"){ inputDigit = "DCC"};
    if  (indexOf(array)=2 && inputDigit ="8"){ inputDigit = "DCCC"};
    if  (indexOf(array)=2 && inputDigit ="9"){ inputDigit = "CM"};
    if  (indexOf(array)=3 && inputDigit ="0"){ inputDigit = ""};
    if  (indexOf(array)=3 && inputDigit ="1"){ inputDigit = "M"};
    if  (indexOf(array)=3 && inputDigit ="2"){ inputDigit = "MM"};
    if  (indexOf(array)=3 && inputDigit ="3"){ inputDigit = "MMM"};*/

  }
  return array;
}
