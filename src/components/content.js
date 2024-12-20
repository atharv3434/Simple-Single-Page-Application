import React from "react";
class Content extends React.Component{
  constructor(){
    super()
    this.state={
      email:" ",
      pass:" "
    };
    console.log("You are inside Constructor")
  }
  myfunc=(event)=>{
    event.preventDefault()
    console.log("You Clicked on submit")
    console.log(this.state.email)
    console.log(this.state.pass)
  }
  myemail=(event)=>{
    this.setState({email:event.target.value})
  }  

  mypass=(event)=>{
    this.setState({pass:event.target.value})
  }  
  componentDidMount(){
    setTimeout(()=>{
      console.log("You are inside DidMount")
    },5000)
  }
  componentDidUpdate(){
    console.log("You are inside componentDidUpdate")
  }
    render(){
        return(
        <div>
            <form onSubmit={this.myfunc}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={this.myemail}></input>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label" >Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name="pass" onChange={this.mypass}></input>
  </div>
  
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>

    <p>{console.log("You are inside the render")}</p>
        </div>
        
        );
       
    }
}
export default Content;