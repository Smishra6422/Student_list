import React from 'react';
import './App.css';
import { CardList }  from './component/card-list/card-list-component.js';
import { Search }  from './component/search-component/search-component';


class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      students:[],
      searchFilter:''
    };
  }




  componentDidMount(){
    var proxyUrl='https://cors-anywhere.herokuapp.com/';
    var targetUrl="https://firebasestorage.googleapis.com/v0/b/usurvey-6ff30.appspot.com/o/userdata%2Fuserdata.txt?alt=media&token=2bb0c52b-cdf4-415c-8e0f-81eb768e4e04";
    fetch(proxyUrl+targetUrl)
    .then(response => response.json())
    .then(users => this.setState({students:users}))
  }
  render(){

    const { students, searchFilter }=this.state;
    const filteredList=students.filter( student =>
       student.name.toLowerCase().includes(searchFilter.toLowerCase())
    );
  return (
    <div className="App">

        <h1>Cse Students</h1>

        <Search placeholder="search students"
        handleChange={e =>{
            this.setState({ searchFilter:e.target.value });
          }} />

        <CardList students={ filteredList } />

    </div>
  );
}
}

export default App;
