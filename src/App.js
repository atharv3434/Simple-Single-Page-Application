import { Component } from "react";
import Header from "./components/header.js";
import Content from "./components/content.js";
import Footer from "./components/footer.js";

class App extends Component{
  render(){
    return(
      <div>
      <Header />
      <Content />
      <Footer />
      </div> 
    );
    
  }
}
export default App

