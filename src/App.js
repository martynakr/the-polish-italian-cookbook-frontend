import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import RecipesList from './Containers/RecipesList';
import Recipe from './Components/Recipe';


function App() {
  return (
    <div className="App">
      <Router>         
        <Routes>
          <Route exact path = "/" element = {<Header/>}/>
          <Route path = "/recipes" element = {<RecipesList/>}/>
          <Route path = "/recipes/:id" element = {<Recipe/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
