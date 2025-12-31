import React from "react"

class Event extends React.Component{
    render(){
        return(
            <>
            <h1>hello good morning</h1>
            </>
        )
    }
}
export default Event;

export class Event1 extends React.Component{
    constructor(){
        super()
      this.state={
        name:"hello",
        age:23,
        village:"Draksharamam"
    }
    this.even=this.even.bind(this)
}
even(){
    this.setState({
        age:25
    })
}
eee(){
    this.setState({
        village:"Velampalem"
    })
}

    named=()=>{
        this.setState({
            name:"good Afternoon"
    })
}
    render(){
        return(
          <div className="c">
            <h1>{this.state.name}</h1>
            <h1>{this.state.age}</h1>
            <h1>{this.state.village}</h1>
            <button onClick={this.named}>click here</button>
            <button onClick={this.even}>age change</button>
            <button onClick={()=>{this.eee()}}>vill</button>
            </div>
        )
    }
}


export class Count extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
        this.increment=this.increment.bind(this)
    }
    

increment(){
    this.setState({
        count:this.state.count+1
    })
}
decrement(){
    this.setState({
        count:this.state.count-1
    })
}
reset=()=>{
    this.setState({
        count:0
    })
}
render(){
    return(
        <div className="c">
        
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.increment} style={{backgroundColor:"green"}}>Increment</button> &nbsp;
        <button onClick={()=>{this.decrement()}} style={{backgroundColor:"red"}} >Decrement</button> &nbsp;
        <button onClick={this.reset} style={{backgroundColor:"white"}}>Reset</button></div>
    )
}
}