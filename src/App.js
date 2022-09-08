
import './App.css';
import { useState } from 'react';
import Naivebar from './components/Naive/Naivebar';
import Title from './components/Title/Title';
import Menu from './components/Menu/Menu';
import menu from './utils';

function App() {
  const [menu2, setMenu] = useState(menu);
  function addToCart(item,isRemoving) {

    const selectedIndex = menu2.findIndex((n) => n.id === item.id);
    //findIndex works like map bt it returns index
    let selectedItem = null;
    if (selectedIndex >= 0) {
      const quantityData = menu2[selectedIndex];
      selectedItem = {
        ...quantityData,
        quantity: isRemoving ? quantityData.quantity - 1:
        quantityData.quantity + 1,
      };

      console.log(selectedItem)
      const updateItems = menu2.map((item) => {
        if (item.id === selectedItem.id) {
          return selectedItem;
        } else return item;
      });
      setMenu(updateItems);
      console.log(updateItems)
    }


  }
  return (
    <div className="App">
      <Naivebar menu={menu2} addToCart={addToCart}/>
      <Title />
      <Menu menu={menu2} addToCart={addToCart}/>
    </div>
  );
}

export default App;
