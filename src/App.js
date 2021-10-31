import { useState } from "react";
import Cart from "../src/Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCartHandler = () => {
    setIsCartShown(true);
  };

  const hideCartHandler = () => {
    setIsCartShown(false);
  };

  return (
    <>
      {isCartShown && <Cart onClose={hideCartHandler} />}
      <Header showCart={showCartHandler} />

      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
