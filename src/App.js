import { isDisabled } from '@testing-library/user-event/dist/utils';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './container/ItemListContainer';

function App() {
  // if(stock == 0){
    
  // }
  return (
    <div>
      <Navbar />
      <ItemListContainer />
    </div>
  );
}

export default App;
