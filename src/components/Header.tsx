import { LogOut, User } from 'lucide-react';
import reactLogo from '../assets/react.svg'
import './Header.css'
import { useNavigate } from 'react-router';

function Header() {
    const navigate = useNavigate()

    function logoutUser() {
        localStorage.removeItem('user')
        navigate('/register')
    }

    return (
        <header>
            <div>
                <img src={reactLogo} className="logo react" alt="React logo" />
            </div>
            <div>
                <User size={30}></User>
                <LogOut size={30} onClick={logoutUser} className='logout-icon'></LogOut>
            </div>
        </header>
    )
}

export default Header;