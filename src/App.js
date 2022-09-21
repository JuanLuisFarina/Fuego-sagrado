import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <Navbar />      
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:idCategory' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
      
    </div>
  );
}

export default App;
