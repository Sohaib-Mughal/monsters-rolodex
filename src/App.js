// import { Component } from "react";
import  CardList  from "./components/card-list/card-list.component";
import SearchInput from "./components/search-input/search-input.component";
import "./App.css";
import { useState, useEffect } from "react";


const App =()=>{
  const[searchString, setSearchString]= useState('');
  const[monsters, setMonsters]=useState([]);
  const[filteredMonsters, setFilteredMonsters]=useState(monsters);

  const onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    setSearchString(searchField);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
        
  }, [])


  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchString])
  
  

  

  return (
      
    <div className="App">

      <h1 className="app-title">MONSTERS</h1>

      <SearchInput className="search-input" onChangeHandler={onSearchChange} placeholder='Search monsters' />

      <CardList monsters={filteredMonsters}/>
    </div>
  );

}

/* class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this; 
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      
      <div className="App">

        <h1 className="app-title">Monster's Rolodex</h1>

        <SearchInput className="search-input" onChangeHandler={onSearchChange} placeholder='Search monsters' />

        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
} */

export default App;
