import React from "react";
import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import Footer from "./components/Layout/Footer";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/Store/CartProvider";

const App = () => {
  let modal = null;

  React.useEffect(() => {
    modal = document.querySelector(".modal");
    return () => {
      modal = null;
    };
  }, []);

  const handleShowCartModal = () => {
    // modal.show();
    modal.showModal();
  };

  const handleHideCartModal = () => {
    modal.close();
  };

  return (
    <CartProvider>
      <div className="content">
        <Cart onHideCartModal={handleHideCartModal} />
        <Header onShowCartModal={handleShowCartModal} />
        <Main />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
