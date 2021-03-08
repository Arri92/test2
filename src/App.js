
import './App.css';
import React from 'react';
let x=0
let b=0;
let bc=0;
let bc2=0;
let z=0
let arr1=0
let arr2=0
let p=0
let y=0
class App extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      arr: [],
      arrE: [],
    }
  }
    onClearArray = () => {
      this.setState({ arr:[] });
      this.setState({ arrE:[] });
       b*=0
       bc*=0
       bc2*=0
       arr1*=0
       arr2*=0
       z*=0
       p*=0
       x*=0
       y*=0
    };
    
  
    componentDidMount() {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
      this.div.appendChild(script);
    }
    AddOne=()=>{ 
     if(p===1){
    this.setState({
      arr:[...this.state.arrE+ "1"] })
      this.setState({
       arrE:[] }) 
       p*=0
       x+=1
 }else  if(this.state.arrE.length!==0 && this.state.arr.length===0){
 }else{
  x+=1
  this.setState({
    arr:[...this.state.arr, 1]
  })
}
    }
    AddTwo=()=>{ 
      if(p===1){
        this.setState({
          arr:[...this.state.arrE+ "2"] })
          this.setState({
           arrE:[] }) 
           p*=0
           x+=1
     }else if(this.state.arrE.length!==0 && this.state.arr.length===0){
       
      }else{
        x+=1
        this.setState({
          arr:[...this.state.arr, 2]
        })
      }
     };
     AddThree=()=>{ 
      if(p===1){
        this.setState({
          arr:[...this.state.arrE+ "3"] })
          this.setState({
           arrE:[] }) 
           p*=0
           x+=1
     }else if(this.state.arrE.length!==0 && this.state.arr.length===0){
       
      }else{
        x+=1
        this.setState({
          arr:[...this.state.arr, 3]
        })
      }
     };
     AddFour=()=>{ 
      if(p===1){
        this.setState({
          arr:[...this.state.arrE+ "4"] })
          this.setState({
           arrE:[] }) 
           p*=0
           x+=1
     }else if(this.state.arrE.length!==0 && this.state.arr.length===0){
       
      }else{
        x+=1
        this.setState({
          arr:[...this.state.arr, 4]
        })
      }
     };
     AddFive=()=>{ 
      if(p===1){
        this.setState({
          arr:[...this.state.arrE+ "5"] })
          this.setState({
           arrE:[] }) 
           p*=0
           x+=1
     }else if(this.state.arrE.length!==0 && this.state.arr.length===0){
       
      }else{
        x+=1
        this.setState({
          arr:[...this.state.arr, 5]
        })
      }
     };
     AddSix=()=>{ 
      if(p===1){
        this.setState({
          arr:[...this.state.arrE+ "6"] })
          this.setState({
           arrE:[] }) 
           p*=0
           x+=1
     }else if(this.state.arrE.length!==0 && this.state.arr.length===0){
       
      }else{
        x+=1
        this.setState({
          arr:[...this.state.arr, 6]
        })
      }
     };
     AddSeven=()=>{ 
      if(p===1){
        this.setState({
          arr:[...this.state.arrE+ "7"] })
          this.setState({
           arrE:[] }) 
           p*=0
           x+=1
     }else if(this.state.arrE.length!==0 && this.state.arr.length===0){ 
      }else{
        x+=1
        this.setState({
          arr:[...this.state.arr, 7]
          
        })
      }
     };
     AddEight=()=>{ 
      if(p===1){
        this.setState({
          arr:[...this.state.arrE+ "8"] })
          this.setState({
           arrE:[] }) 
           p*=0
           x+=1
     }else if(this.state.arrE.length!==0 && this.state.arr.length===0){ 
      }else{
        x+=1
        this.setState({
          arr:[...this.state.arr, 8]
        })
      }
     };
     AddNine=()=>{ 
      if(p===1){
        x+=1
        this.setState({
          arr:[...this.state.arrE+ "9"] })
          this.setState({
           arrE:[] }) 
           p*=0
     }else if(this.state.arrE.length!==0 && this.state.arr.length===0){ 
      }else{
        x+=1
        this.setState({
          arr:[...this.state.arr, 9]
        })
      }
     };
     AddZero=()=> {
       if (this.state.arr.length===0){
        
       }else if(this.state.arrE.length!==0 && this.state.arr.length===0){ 
      }else{
        x+=1
        this.setState({
          arr:[...this.state.arr, 0]
        })
      }
     
    }
    
    AddDecimal=()=> {
      

      if(bc===0 && b===0){
        bc+=1
         this.setState({
           arr:[...this.state.arr, "."] 
         })
      }
      if (bc2===0 && b>0 ){
        bc2+=1
         this.setState({
           arr:[...this.state.arr, "."] 
         })

      }
  }
  AddAdd=()=> {
    if (b===0 && this.state.arr.length!==0){
      b+=1
      x*=0
       this.setState({
         arr:[...this.state.arr, "+"] 
       })
    }else if((b===1 && this.state.arr.length===0)) {
      x*=0
       this.setState({
         arr:[...this.state.arrE+ "+"] })
         this.setState({
          arrE:[] }) 
    }else if(b===1 && x!==0 && this.state.arr.length!==0){
      y*=0
      x*=0
      arr1*=0
      arr2*=0
    for (let i=0; i<this.state.arr.length; i++){
      if(this.state.arr[i]!=="+" && this.state.arr[i]!=="-" && this.state.arr[i]!=="*" && this.state.arr[i]!=="/"){
        
      }else if(this.state.arr[i]==="+" ){
       let arr1=0
       let arr2=0
        arr1 = this.state.arr.slice(0,i).join("")
        arr2 = this.state.arr.slice(i+1,100).join("")
       
      arr1*=10000
      arr2*=10000
      arr1+=arr2
      arr1/=10000
      this.setState({arr:[]})
      this.setState({arrE:[...this.state.arrE, arr1+"+"]})
      p+=1
      
      break
    }else if(this.state.arr[i]==="*" ){
      let arr1=0
      let arr2=0
       arr1 = this.state.arr.slice(0,i).join("")
       arr2 = this.state.arr.slice(i+1,100).join("")
      
     arr1*=10000
     arr2*=10000
     arr1*=arr2
     arr1/=100000000
     this.setState({arr:[]})
     this.setState({arrE:[...this.state.arrE, arr1+"+"]})
     p+=1
     
     break
   }else if(this.state.arr[i]==="/" ){
    let arr1=0
    let arr2=0
     arr1 = this.state.arr.slice(0,i).join("")
     arr2 = this.state.arr.slice(i+1,100).join("")
    
   arr1*=10000
   arr2*=10000
   arr1/=arr2
   
   this.setState({arr:[]})
   this.setState({arrE:[...this.state.arrE, arr1+"+"]})
   p+=1
   
   break
 }else if(this.state.arr[i]==="-" && this.state.arr[0]!=="-"){
  let arr1=0
  let arr2=0
   arr1 = this.state.arr.slice(0,i).join("")
   arr2 = this.state.arr.slice(i+1,100).join("")
  
 arr1*=10000
 arr2*=10000
 arr1-=arr2
 arr1/=10000
 this.setState({arr:[]})
 this.setState({arrE:[...this.state.arrE, arr1+"+"]})
 p+=1
 
}
  }
}else if(b===1 && x===0){
  y*=0
  x*=0
  arr1*=0
  arr2*=0
for (let i=0; i<this.state.arr.length; i++){
  if(this.state.arr[i]!=="+" && this.state.arr[i]!=="-" && this.state.arr[i]!=="*" && this.state.arr[i]!=="/"){
    
  }else if(this.state.arr[i]==="+" || this.state.arr[i]==="-" || this.state.arr[i]==="*" || this.state.arr[i]==="/"){
   let arr1=0
   
    arr1 = this.state.arr.slice(0,i).join("")
    
  this.setState({arr:[]})
  this.setState({arrE:[...this.state.arrE, arr1+"+"]})
  p+=1
  break
}
}
}
  }
AddMulti=()=> {

  if (b===0 && this.state.arr.length!==0){
    x*=0
    b+=1
     this.setState({
       arr:[...this.state.arr, "*"] 
     })
  }else if((b===1 && this.state.arr.length===0)) {
    x*=0
    
     this.setState({
       arr:[...this.state.arrE+ "*"] })
       this.setState({
        arrE:[] }) 
  }else if(b===1 && x!==0 && this.state.arr.length!==0){
    y*=0
    x*=0
    arr1*=0
    arr2*=0
  for (let i=0; i<this.state.arr.length; i++){
    if(this.state.arr[i]!=="+" && this.state.arr[i]!=="-" && this.state.arr[i]!=="*" && this.state.arr[i]!=="/"){
      
    }else if(this.state.arr[i]==="+" ){
     let arr1=0
     let arr2=0
      arr1 = this.state.arr.slice(0,i).join("")
      arr2 = this.state.arr.slice(i+1,100).join("")
     
    arr1*=10000
    arr2*=10000
    arr1+=arr2
    arr1/=10000
    this.setState({arr:[]})
    this.setState({arrE:[...this.state.arrE, arr1+"*"]})
    p+=1
    
    break
  }else if(this.state.arr[i]==="*" ){
    let arr1=0
    let arr2=0
     arr1 = this.state.arr.slice(0,i).join("")
     arr2 = this.state.arr.slice(i+1,100).join("")
    
   arr1*=10000
   arr2*=10000
   arr1*=arr2
   arr1/=100000000
   this.setState({arr:[]})
   this.setState({arrE:[...this.state.arrE, arr1+"*"]})
   p+=1
   
   break
 }else if(this.state.arr[i]==="/" ){
  let arr1=0
  let arr2=0
   arr1 = this.state.arr.slice(0,i).join("")
   arr2 = this.state.arr.slice(i+1,100).join("")
  
 arr1*=10000
 arr2*=10000
 arr1/=arr2
 this.setState({arr:[]})
 this.setState({arrE:[...this.state.arrE, arr1+"*"]})
 p+=1
 
 break
}else if(this.state.arr[i]==="-" && this.state.arr[0]!=="-"){
let arr1=0
let arr2=0
 arr1 = this.state.arr.slice(0,i).join("")
 arr2 = this.state.arr.slice(i+1,100).join("")

arr1*=10000
arr2*=10000
arr1-=arr2
arr1/=10000
this.setState({arr:[]})
this.setState({arrE:[...this.state.arrE, arr1+"*"]})
p+=1

}
}}
else if(b===1 && x===0){
  y*=0
  x*=0
  arr1*=0
  arr2*=0
for (let i=0; i<this.state.arr.length; i++){
  if(this.state.arr[i]!=="+" && this.state.arr[i]!=="-" && this.state.arr[i]!=="*" && this.state.arr[i]!=="/"){
    
  }else if(this.state.arr[i]==="+" || this.state.arr[i]==="-" || this.state.arr[i]==="*" || this.state.arr[i]==="/"){
   let arr1=0
   
    arr1 = this.state.arr.slice(0,i).join("")
    
  this.setState({arr:[]})
  this.setState({arrE:[...this.state.arrE, arr1+"*"]})
  p+=1
  break
}
}
} 
}
AddDivide=()=> {
  if (b===0 && this.state.arr.length!==0){
    b+=1
    x*=0
     this.setState({
       arr:[...this.state.arr, "/"] })
  }else if((b===1 && this.state.arr.length===0)) {
    x*=0
     this.setState({
       arr:[...this.state.arrE+ "/"] })
       this.setState({
        arrE:[] }) 
  }else if(b===1 && x!==0 && this.state.arr.length!==0){
    y*=0
    x*=0
    arr1*=0
    arr2*=0
  for (let i=0; i<this.state.arr.length; i++){
    if(this.state.arr[i]!=="+" && this.state.arr[i]!=="-" && this.state.arr[i]!=="*" && this.state.arr[i]!=="/"){
      
    }else if(this.state.arr[i]==="+" ){
      
     let arr1=0
     let arr2=0
      arr1 = this.state.arr.slice(0,i).join("")
      arr2 = this.state.arr.slice(i+1,100).join("")
     
    arr1*=10000
    arr2*=10000
    arr1+=arr2
    arr1/=10000
    this.setState({arr:[]})
    this.setState({arrE:[...this.state.arrE, arr1+"/"]})
    p+=1
    
    break
  }else if(this.state.arr[i]==="*" ){
    let arr1=0
    let arr2=0
     arr1 = this.state.arr.slice(0,i).join("")
     arr2 = this.state.arr.slice(i+1,100).join("")
    
   arr1*=10000
   arr2*=10000
   arr1*=arr2
   arr1/=100000000
   this.setState({arr:[]})
   this.setState({arrE:[...this.state.arrE, arr1+"/"]})
   p+=1
   
   break
 }else if(this.state.arr[i]==="/" ){
  let arr1=0
  let arr2=0
   arr1 = this.state.arr.slice(0,i).join("")
   arr2 = this.state.arr.slice(i+1,100).join("")
  
 arr1*=10000
 arr2*=10000
 arr1+=arr2
 this.setState({arr:[]})
 this.setState({arrE:[...this.state.arrE, arr1+"/"]})
 p+=1
 
 break
}else if(this.state.arr[i]==="-" && this.state.arr[0]!=="-" ){
let arr1=0
let arr2=0
 arr1 = this.state.arr.slice(0,i).join("")
 arr2 = this.state.arr.slice(i+1,100).join("")

arr1*=10000
arr2*=10000
arr1-=arr2
arr1/=10000
this.setState({arr:[]})
this.setState({arrE:[...this.state.arrE, arr1+"/"]})
p+=1

}
}} else if(b===1 && x===0){
  y*=0
  x*=0
  arr1*=0
  arr2*=0
for (let i=0; i<this.state.arr.length; i++){
  if(this.state.arr[i]!=="+" && this.state.arr[i]!=="-" && this.state.arr[i]!=="*" && this.state.arr[i]!=="/"){
    
  }else if(this.state.arr[i]==="+" || this.state.arr[i]==="-" || this.state.arr[i]==="*" || this.state.arr[i]==="/"){
   let arr1=0
   
    arr1 = this.state.arr.slice(0,i).join("")
    
  this.setState({arr:[]})
  this.setState({arrE:[...this.state.arrE, arr1+"/"]})
  p+=1
  break
}
}
}
}
AddMinus=()=> {
  if (b===0 && this.state.arr.length!==0 ){
    b+=1
    x*=0
     this.setState({
       arr:[...this.state.arr, "-"] 
     })
  }else if(x===0 && y===0){
    y+=1
    this.setState({
      arr:[...this.state.arr,"-"] })
      
  }else if(b===1 && x===0 && y===0 && this.state.arr.length!==0){
    
    this.setState({
      arr:[...this.state.arrE+ "-"] })
      this.setState({
       arrE:[] }) 
     

  }else if((b===1 && x===1 && this.state.arr.length===0)) {
    x*=0
     this.setState({
       arr:[...this.state.arrE+ "-"] })
       this.setState({
        arrE:[] }) 
  }else if(b===1 && x!==0 && this.state.arr.length!==0){
    y*=0
    x*=0
    arr1*=0
    arr2*=0
  for (let i=0; i<this.state.arr.length; i++){
    if(this.state.arr[i]!=="+" && this.state.arr[i]!=="-" && this.state.arr[i]!=="*" && this.state.arr[i]!=="/"){
      
    }else if(this.state.arr[i]==="+" ){
     let arr1=0
     let arr2=0
      arr1 = this.state.arr.slice(0,i).join("")
      arr2 = this.state.arr.slice(i+1,100).join("")
     
    arr1*=10000
    arr2*=10000
    arr1+=arr2
    arr1/=10000
    this.setState({arr:[]})
    this.setState({arrE:[...this.state.arrE, arr1+"-"]})
    p+=1
    
    break
  }else if(this.state.arr[i]==="*" ){
    let arr1=0
    let arr2=0
     arr1 = this.state.arr.slice(0,i).join("")
     arr2 = this.state.arr.slice(i+1,100).join("")
    
   arr1*=10000
   arr2*=10000
   arr1*=arr2
   arr1/=100000000
   this.setState({arr:[]})
   this.setState({arrE:[...this.state.arrE, arr1+"-"]})
   p+=1
   
   break
 }else if(this.state.arr[i]==="/" ){
  let arr1=0
  let arr2=0
   arr1 = this.state.arr.slice(0,i).join("")
   arr2 = this.state.arr.slice(i+1,100).join("")
  
 arr1*=10000
 arr2*=10000
 arr1+=arr2
 arr1/=10000
 this.setState({arr:[]})
 this.setState({arrE:[...this.state.arrE, arr1+"-"]})
 p+=1
 
 break 
}else if(this.state.arr[i]==="-" && this.state.arr[0]!=="-"){
let arr1=0
let arr2=0
 arr1 = this.state.arr.slice(0,i).join("")
 arr2 = this.state.arr.slice(i+1,100).join("")

arr1*=10000
arr2*=10000
arr1-=arr2
arr1/=10000
this.setState({arr:[]})
this.setState({arrE:[...this.state.arrE, arr1+"-"]})
p+=1

}
}} 
else if(b===1 && x===0 && y===1){
  y*=0
  x*=0
  arr1*=0
  p+=1
for (let i=0; i<this.state.arr.length; i++){
  if(this.state.arr[i]!=="+" && this.state.arr[i]!=="-" && this.state.arr[i]!=="*" && this.state.arr[i]!=="/"){
    
  }else if(this.state.arr[i]==="+" || this.state.arr[i]==="-" || this.state.arr[i]==="*" || this.state.arr[i]==="/"){
   let arr1=0
   
    arr1 = this.state.arr.slice(0,i).join("")
    
  this.setState({arr:[]})
  this.setState({arrE:[...this.state.arrE, arr1+"-"]})
  
  break
}
}
}
}
AddEqals=()=>{
  x*=0
  y*=0
  arr1*=0
  arr2*=0
for (let i=0; i<this.state.arr.length; i++){
  if(this.state.arr[i]!=="+" && this.state.arr[i]!=="-" && this.state.arr[i]!=="*" && this.state.arr[i]!=="/"){
    
  }else if(this.state.arr[i]==="+" ){
   let arr1=0
   let arr2=0
    arr1 = this.state.arr.slice(0,i).join("")
    arr2 = this.state.arr.slice(i+1,100).join("")
   
  arr1*=10000
  arr2*=10000
  arr1+=arr2
  arr1/=10000
  this.setState({arr:[]})
  this.setState({arrE:[...this.state.arrE, arr1]})
  //b*=0
 // z+=1
 break
  
}else if(this.state.arr[i]==="/" ){
  let arr1=0
  let arr2=0
   arr1 = this.state.arr.slice(0,i).join("")
   arr2 = this.state.arr.slice(i+1,100).join("")
  
 arr1*=10000
 arr2*=10000
 arr1/=arr2
 
 this.setState({arr:[]})
 this.setState({arrE:[...this.state.arrE, arr1]})
 //b*=0
// z+=1
break
}else if(this.state.arr[i]==="*" ){
  let arr1=0
  let arr2=0
   arr1 = this.state.arr.slice(0,i).join("")
   arr2 = this.state.arr.slice(i+1,100).join("")
  
 arr1*=10000
 arr2*=10000
 arr1*=arr2
 arr1/=100000000
 this.setState({arr:[]})
 this.setState({arrE:[...this.state.arrE, arr1]})
// b*=0
// z+=1
break
}else if(this.state.arr[i]==="-" && this.state.arr[0]!=="-"){
  let arr1=0
  let arr2=0
   arr1 = this.state.arr.slice(0,i).join("")
   arr2 = this.state.arr.slice(i+1,100).join("")
  
 arr1*=10000
 arr2*=10000
 arr1-=arr2
 arr1/=10000
 this.setState({arr:[]})
 this.setState({arrE:[...this.state.arrE, arr1]})
 
 //b*=0
 break
}
}
}


render() {
  return (
    <div className="App" ref={el => (this.div = el)}>
      <div className="wrapper">
      <div className="grid-container">
  <div className="pop" id="display"> 
        {this.state.arrE.length===0&&this.state.arr.length===0&&<div>0</div>}
          {this.state.arrE.map(item => (
            <div style={{display:"inline"}} key={item}>{item}</div>
          ))}
          {this.state.arr.map(item => (
            <div style={{display:"inline"}} key={item}>{item}</div>
          ))}</div>
          
 
  <button className="zero" id="zero" onClick={this.AddZero}>0</button>
  <button className="one" id="one" onClick={this.AddOne}>1</button>
  <button className="two" id="two" onClick={this.AddTwo}>2</button>
  <button className="three"id="three" onClick={this.AddThree}>3</button>
  <button className="four" id="four" onClick={this.AddFour}>4</button>
  <button className="five" id="five" onClick={this.AddFive}>5</button>
  <button className="six" id="six" onClick={this.AddSix}>6</button>
  <button className="seven" id="seven" onClick={this.AddSeven}>7</button>
  <button className="eight" id="eight" onClick={this.AddEight}>8</button>
  <button className="nine" id="nine" onClick={this.AddNine}>9</button>
  <button className="equals" id="equals" onClick={this.AddEqals}>=</button>
  <button className="add" id="add" onClick={this.AddAdd}>+</button>
  <button className="subtract" id="subtract" onClick={this.AddMinus}>-</button>
  <button className="multiply" id="multiply" onClick={this.AddMulti}>x</button>
  <button className="divide" id="divide" onClick={this.AddDivide} >/</button>
  <button className="decimal" id="decimal" onClick={this.AddDecimal}>.</button>
  <button className="clear" id="clear"  onClick={this.onClearArray} >AC</button>
  </div>
</div>
    </div>
  );
}
}

export default App;