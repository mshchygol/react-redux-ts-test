import { LogOut, User } from 'lucide-react'
import reactLogo from '../assets/react.svg'
import './Header.css'
import { useNavigate } from 'react-router'
import { useAppDispatch, useAppSelector } from '../hooks'
import { clear } from '../coursesSlice'

function Header() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const purchasedCourses = useAppSelector((state) => state.courses.purchasedCourses)

    function logoutUser() {
        localStorage.removeItem('user')
        dispatch(clear())
        navigate('/register')
    }

    return (
        <header>
            <div className="header-title">
                <img src={reactLogo} className="logo header-logo react" alt="React logo" />
                <h2>Courses app</h2>
            </div>
            <div className="header-icons">
                <User size={30}></User>
                {purchasedCourses.length > 0 && <span>{purchasedCourses.length}</span>}
                <LogOut size={30} onClick={logoutUser} className='logout-icon'></LogOut>
            </div>
        </header>
    )
}

export default Header