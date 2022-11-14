import Image from "../../assets/images/berries-aa.jpg";
import NavMain from "../Nav/NavMain";
import CartButton from "../Cart/CartButton";

const Header = ({onShowCartModal}) => {
  return (
    <>
      <header className="header">
        <h1 className="title__primary title__primary">Meals App</h1>
        <NavMain />
        <CartButton showCartModal={onShowCartModal} />
      </header>
      <img className="image__primary" src={Image} alt="collection of berries"/>
    </>
  )
}

export default Header;
