import './App.css';
import Nav from './Containers/Nav'
import polish from './images/polish.png'
import italian from './images/italian.png'
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className='polish-bg'>
          <img src={polish} height={300}></img>
        </div>
        <div className='italian-bg'>
          <img src={italian} height={300}></img>
        </div>
      </div>
      <div className='header-bg'>
        <Header/>
        <Nav/>
      </div>
    </div>
  );
}

export default App;
