function LoopyLighthouse(){ 
  //loop array element 
  for(var i = 100; i <= 200; i++) 
  { 
    if(i % 12 === 0) { 
      console.log("LoopyLighthouse");
    }
    else if(i % 3 === 0) { 
      console.log("Loopy");
    }
    else if(i % 4 === 0)
    {
      console.log("Lighthouse");
    }
    else {
      console.log(i,"Make sure you console.log the number!")
    }

  }
}
LoopyLighthouse();

