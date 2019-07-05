import React, { Component } from "react";
import "./App.css";
import axios from 'axios'
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory : [],
      selectedProduct : ''
    };

    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    axios
      .get("/api/inventory")
      .then(res => {
        console.log('this is the data' ,res.data)
        this.setState({ inventory: res.data });
      })
      .catch(err => {
        console.log("error", err);
      });
  }

  render() {
    return(
      
    <div className="App">
      <Header />
      <Dashboard didMount={this.componentDidMount} inventory={this.state.inventory}/>
      <Form didMount={this.componentDidMount} update={this.updateList} selectedProduct={this.state.selectedProduct}/>
    </div>
    )
  }
}

export default App;
