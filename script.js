let s="";
let s1="";
function ev(event)
{
  if(event.target.innerHTML=='AC')
  {
    s='';
    s1='';
    intt.value=s;
  }
    
  else if(event.target.innerHTML=='=')
  {
    s=eval(s);
   
    intt.value=s;
  }
  else
  {
    if(event.target.innerHTML=='X')
    {
      s+="*";
      s1+="X";
      
    }
    else
    {
  
  s+=event.target.innerHTML;
        s1+=event.target.innerHTML;
      
    }
     document.querySelector("input").value=s1;
  }
  
  //console.log(event.target.innerHTML);
  // text.value=s;
  
}
let a=document.querySelectorAll(".button");
//let buttons=document.get

//button.addEventListener('click',ev);
Array.from(a).forEach((butto)=>{
  butto.addEventListener('click',ev);
  
  
})



