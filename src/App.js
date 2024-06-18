import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './Elements/MainPage';
import CreatePage from './Elements/CreatePage';
import EditPage from './Elements/EditPage';
import EditInputs from './Elements/EditInputs';

function App() {

  const API_URL = "http://daily-test.000webhostapp.com/API.php";

  //http://daily-test.000webhostapp.com/API.php


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage API_URL={API_URL} />} />
          <Route path='/create' element={<CreatePage API_URL={API_URL} />} />
          <Route path='/edit' element={<EditPage API_URL={API_URL} />} />
          <Route path='/edit/:id' element={<EditInputs API_URL={API_URL} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
