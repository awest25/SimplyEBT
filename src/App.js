import logo from './logo.svg';
import './App.css';
import AppWrapper from './components/AppWrapper';
import { BrowserRouter, Route } from 'react-router-dom';
import MealDetails from './components/MealDetails';

function App() {
  return (
    <MealDetails/>
  );
}

export default App;
