import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import Footer from "./components/Layout/Footer";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/Store/CartProvider";

const App = () => {

const mo = document.getElementById("mo");

  const handleShowCartModal = (e) => {
    e.preventDefault();
    console.log("show");
    mo.show();
  }

  const handleHideCartModal = (e) => {
    e.preventDefault();
    console.log("close");
    mo.close();
  }

  return (
    <CartProvider>
      <div className="content">
        <Cart onHideCartModal={handleHideCartModal} />
        <Header onShowCartModal={handleShowCartModal} />
        <Main />
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App;
