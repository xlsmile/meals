import Image from "../../assets/images/fruits-aa.jpg";
import NavMain from "../Nav/NavMain";
import CartButton from "../Cart/CartButton";

const Header = ({onShowCartModal}) => {
  return (
    <>
      <header className="header">
        <h1 className="title__primary title__primary">Fruit Salads</h1>
        <NavMain />
        <CartButton showCartModal={onShowCartModal} />
      </header>
      <img className="image__primary" src={Image} alt="collection of fruits"/>
    </>
  )
}

export default Header;
