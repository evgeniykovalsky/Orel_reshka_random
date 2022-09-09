import React from "react";

export default function Check(data){
    let color="";
    let text='';
    console.log(data.value);
    console.log(data.selValue);
    let res=(data.value%2!=0)?"Орел":"Решка"
    if(data.selValue==0){return;}
    
    if(data.value%2==data.selValue%2||data.value%2!=0 && data.selValue%2!=0)
    {
           text='Вы выиграли!';
           color="green";
           
          
    }
    else{
        text='Вы проиграли!';
        color="red";
    }

    return(
        <>
     
         <div>{res}</div>
         <div style={{color:color}}>{text}</div>
       
       
        </>
    )
}

