import React, {Component} from 'react';

import {CardList} from './components/card-list/card-list.component';

import {SearchBox} from './components/search-box/search-box.component'

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
     digimons: [],
     searchField:''
     
    }
   
  };

  componentDidMount(){
    fetch('https://digimon-api.herokuapp.com/api/digimon')
    .then(response => response.json())
    .then(users => this.setState({digimons: users}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value}) 
  }

  render(){
    const {digimons, searchField} = this.state;
    const filteredDigimons =
     digimons.filter(digimon => digimon.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      
      <div className="App">
        <h1>Digimon</h1>
        <SearchBox
        placeholder = 'search digimon' 
        handleChange = {this.handleChange}/>


    
        <CardList digimons = {filteredDigimons} />
        
  
     
    </div>
    )
  }
}


export default App;
