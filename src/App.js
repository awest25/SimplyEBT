import logo from './logo.svg';
import './App.css';
import AppWrapper from './components/AppWrapper';
import { BrowserRouter, Route } from 'react-router-dom';
import CalendarInfo from './components/CalendarInfo';
import MealDetails from './components/MealDetails';

function App() {
  return (
    <div>
      <AppWrapper/>
      <CalendarInfo/>
      <MealDetails/>
    </div>
  );
}

export default App;
