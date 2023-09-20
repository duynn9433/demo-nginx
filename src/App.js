import './App.css';
import logo from './logo.svg';
// import _4k_image from './images/pexels-francesco-ungaro-1525041.jpg';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //       <img src={_4k_image} className={'image'} alt={'images'}/>
    //   </header>
    // </div>
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    </div>
  );
}

export default App;
