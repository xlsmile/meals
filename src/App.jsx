import React from "react";
import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import Footer from "./components/Layout/Footer";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/Store/CartProvider";

/* ===================================================

Advantages of using native HTML dialog element/tag:

- Easy to implement, instead of serching for zillions of "out-of-the box" options.
- Dialog element already comes with some styling, even though there's no explicit CSS attached to it. The dialog is already centered, it has a border, the width is limited to the content, and it has some default padding. So, it may be good for some quick demos (concept testings).
- Easy to style with CSS.
- No need for Aria dialog attribute
- Supported by all major browsers as of end of 2022

=================================================== */

const App = () => {
  let modal = null;

  React.useEffect(() => {
    modal = document.querySelector(".modal");
    return () => {
      modal = null;
    };
  }, []);

  const handleShowCartModal = () => {
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
