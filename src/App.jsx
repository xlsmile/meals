import {useState} from "react";
import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import Footer from "./components/Layout/Footer";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/Store/CartProvider";

const App = () => {

  const [cartModalIsShown, setCartModalIsShown] = useState(false);

  const handleShowCartModal = () => {
    setCartModalIsShown(true);
  }

  const handleHideCartModal = () => {
    setCartModalIsShown(false);
  }

  return (
    <CartProvider>
      <div className="content">
        {cartModalIsShown && <Cart onHideCartModal={handleHideCartModal} />}
        <Header onShowCartModal={handleShowCartModal} />
        <Main />
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App;
