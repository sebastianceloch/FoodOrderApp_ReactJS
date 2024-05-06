import Products from "./components/Products.jsx";
import Header from "./components/Header.jsx";
import { CartContextProvider } from "./store/CartContext.jsx";
import Cart from "./components/Cart.jsx";
function App() {
  return (
    <>
      <CartContextProvider>
      <Header/>
      <Products/>
      </CartContextProvider>
    </>
  );
}

export default App;
