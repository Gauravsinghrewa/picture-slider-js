// image slider

var firstindex=0;
 function automaticslider(){

    setTimeout(automaticslider,5000);
    var pics;
     const img= document.querySelectorAll('img');

     for(pics=0; pics<img.length; pics++)
     {
        img[pics].style.display = 'none';

     }
     firstindex++
     if(firstindex>img.length){A
        firstindex=1;
     }
     img[firstindex-1].style.display='block';
 }
 automaticslider();



// Q2. form registation 
// input validation form

// function validate(){
//    var fname=document.getElementById('txt1').value;
//    var lname=document.getElementById('txt2').value;
//    var mobile=document.getElementById('txt3').value;
//    var message=document.getElementById('txt4').value;
//    var pass=document.getElementById('txt5').value;
   
//    if(fname.length<1)
//    {
//       document.getElementById('sp1').innerHTML="Require is First name"
//       document.getElementById('sp1').stylecolor='red'
//    }
//    if(lname.length<1)
//    {
//       document.getElementById('ssp2').innerHTML='Require is last name'
//       document.getElementById('sp2').stylecolor='red'

//    }
//    if(mobile.length!=10)
//    {
//       alert("enter the 10 digit number")
//       return false
//    }

//    if(isNaN(mobile))
//    {
//       alert("Enter only digit !!")
//       return false
//    }
    
//    if(message.length<1)
//    {
//       document.getElementById('sp4').innerHTML='Require is Message'
//       document.getElementById('sp4').stylecolor='red'
//    }
//    if(pass.length<1)
//    {
//       alert("enter the password")
//       return false
//    }
//    return true
// }