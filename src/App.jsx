import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css'

import ProductsList from './components/ProductsList'
import Home from './components/Home';
import About from './components/About';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux';
import Cart from './components/Cart';

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

function App() {
  const numOfProducts = useSelector(state => state.cart.numOfProducts);
  return (
    <>
      <BrowserRouter>
        <div id='navDiv'>
          <nav>
            <NavLink to="/" activeclassname="active">Home</NavLink>
            <NavLink to="/about" activeclassname="active">About</NavLink>
            <NavLink to="/products" activeclassname="active">Products</NavLink>
            <NavLink to="/cart" activeclassname="active">

              <IconButton style={{ background: "white" }}>
                <ShoppingCartIcon fontSize="medium" />
                <CartBadge badgeContent={numOfProducts > 0 ? numOfProducts : "0"} color="primary" overlap="circular" /> 
              </IconButton>

            </NavLink>
          </nav>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<ProductsList />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
