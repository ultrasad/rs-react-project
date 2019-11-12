import React, {useState} from 'react';
import Helmet from 'react-helmet';
//import Hello from './components/Hello';
//import logo from './logo.svg';
//import './App.css';

import 'bulma/css/bulma.min.css';
import './style.css';

import Routes from './components/Routes';
import Navbar from './components/Navbar'

function App() {

  //let counter = 1 //reuse
  const [counter, setCounter] = useState(1)
  //const number = [1,2,3,4,5]
  //const name = 'Hanajung'
  const [name, setName] = useState('Hanaung')
  const [numbers, setNumber] = useState([9])

  //setTimeout(() => {
    //console.log("Before Counter: ", counter);
    //counter += 1;
    //setCounter(counter + 1);
    //setName("Bundit")

    //numbers.push(1);
    //console.log("Numbers => ", numbers);

    //setNumber(numbers);
    //setNumber([...numbers, 2]);
    //console.log("After Counter: ", counter);
  //}, 5000)

  function hello(){
    return 'Hello';
  }

  function handleClick(){
    console.log("click >>");

    setNumber([...numbers, 2]);
    setName("Bundit");
    setCounter(counter + 1);
  }

  function handleChange(e){
    console.log("change...", e.target.value);
    setName(e.target.value);
  }

  return (
    <div>
      <Helmet>
        <title>React.js | Hanajung</title>
        <link href="https://fonts.googleapis.com/css?family=Noto+Serif&display=swap" rel="stylesheet" />
      </Helmet>
      {/*<Hello />*/}
      <section className="section">
      <div className="container">
        <h1><b>React Workshop</b></h1>

        <div>Counter: {counter}</div>
        <div>Number: {numbers}</div>
        <div>Name: {name}</div>
        <Navbar />
        <hr />
        <Routes />
        <hr />
        <div>
          {
          counter > 3 
          ?
          <span style={{color:'red'}}>Big</span>
          :
          <span style={{color:'blue'}}>Small</span>
          }
          <ul>
            {numbers.map((each, idx) => {
              return <li key={idx}>{each}</li>
            })}
          </ul>
        </div>
        <p>{hello()}</p>
        <button onClick={handleClick}>Click</button>
        <p><input type="text" onChange={handleChange} value={name}/></p>
      </div>
      </section>
      </div>
  );
}

export default App;
