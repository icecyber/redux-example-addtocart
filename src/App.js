import AddToCardForm from './pages/addToCardForm/AddToCardForm';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import AddToCardPage from './pages/addtocardpage/AddToCardPage';

function App() {
  return (
    <BrowserRouter>
      <Home/>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/form' element={<AddToCardForm />}/>
          <Route path='/cart' element={<AddToCardPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
