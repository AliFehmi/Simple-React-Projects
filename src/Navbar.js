import StoreIcon from '@mui/icons-material/Store';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import useLogout from './useLogout';
import { useLoginContext } from './useLoginContext';
import { useItemamountContext } from './useItemamountContext';
const Navbar = () => {
    const {count}= useItemamountContext();
    console.log("in navbar",count)
    const { logout } = useLogout()
    const { user } = useLoginContext()
    const handleClick = () => {
        logout()
    }

    

    return (
        <div className="navbarContainer">
            <Link className='link' to="/">
                <div className="navbarLogo">
                    <StoreIcon fontSize='large' className='storeIcon' />
                    <h1>eSHOP</h1>
                </div>
            </Link>
            <div className="navbarSearch">
                <input type='text'></input>
                <SearchIcon fontSize='large' className='searchIcon' />

            </div>
            {user && (
                <button className='logoutButton' onClick={handleClick}> Log out </button>
            )}
            {!user && (
                <Link className='link' to="/signup">
                    <div className="navbarAccount">
                        <p className='accountLine1'>Hello Guest</p>
                        <p className='accountLine2'>Sign In</p>
                    </div>
                </Link>
            )}



            <Link className='link' to="/basket">
                <div className="navbarBasket">
                    <span className='navbarBasketLine'>Your Shop</span>
                    <ShoppingBasketIcon fontSize='large' />
                    <span className='navbarBasketCount'>{count}</span>
                </div>
            </Link>

        </div>
    );
}

export default Navbar;