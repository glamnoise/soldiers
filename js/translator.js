


$( document ).delegate("#homepage", "pageinit", function() {

});

$( document ).delegate("#translator", "pageinit", function() {

$("#clicca").click(function() {
alert("Handler for .click() called.");
});


var alpha1  = "abcdefghijklmnopqrstuvwxyz";
var alpha2  = "defghijklmnopqrstuvwxyzabc";
var alpha3  = "abcdefghijklmnopqrstuvwxyz";
var newstr = null; 
var newDecode = null; 

var skip = $('#skip').val();

console.log(skip);

function codifica(parola){
   skip = $('#skip').val(); 
   newstr = '';    
for(var i=0; i<parola.length;i++) {
    
    
    charPos = alpha1.indexOf(parola.charAt(i));
    newCharPos=(Number(charPos)+ Number(skip));
    console.log(charPos +" + " + skip + " = "+ newCharPos );
    console.log(newCharPos + '<' + alpha1.length );
    if (newCharPos < alpha1.length ){
    newstr += alpha1.charAt(newCharPos);
    }else{
        
      newstr += alpha1.charAt( (Number(charPos) + Number(skip)) - Number(alpha1.length));  
    }
  
    /*if (newCarPos >= alpha1.length){
    
  newstr += alpha1.charAt(newCarPos);
  }else{
    console.log(newCarPos +"qui"+ alpha1.charAt(alpha1.length - skip));
  newDecode += alpha1.charAt(alpha1.length - skip);
    }
     */
}
    
return newstr

}

function decodifica(decode){
  newDecode = '';
    
    for(var i=0; i<decode.length;i++) {
    
  
    charPosDec = alpha1.indexOf(decode.charAt(i));
    
    newCharDec=(Number(charPosDec)- Number(skip));
  
    /*console.log(charPosDec +" - " + skip + " = "+ newCharDec );
    console.log(newCharDec + '-' + alpha1.length );*/
    if(newCharDec >= 0 ){
    newDecode += alpha1.charAt(newCharDec);
    }else{
     newDecode += alpha1.charAt(Number( alpha1.length ) - Number(skip) + Number(charPosDec) );   
        
    }
}

    
return newDecode
}





$('#cesare').bind("keyup change", function(e) {
  val = $(this).val().toLowerCase().replace(/\s/g, "");
  codifica(val);
  decodifica(val);
   $('#risultatoCodifica').text(newstr);
   $('#risultatoDecodifica').text(newDecode);
   
  });
  


});

