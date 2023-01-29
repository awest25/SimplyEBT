import logo from './logo.svg';
import './App.css';
import AppWrapper from './components/AppWrapper';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './routes/Dashboard';

function App() {
  return (
    <Dashboard/>
  );
}

export default App;
