import { useState } from "react"
import { useNavigate } from "react-router"
import reactLogo from '../assets/react.svg'
import './Registration.css'

interface ValidationErorrs {
    email: string,
    password: string
}

function Registration() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<ValidationErorrs>({
        email: '',
        password: ''
    });
    const navigate = useNavigate()

    const validateForm = () => {
        const newErrors: ValidationErorrs = {
            email: "",
            password: ""
        };

        if (!email) {
            newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid"
        }

        if (!password) {
            newErrors.password = "Password is required"
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters"
        } else if (!/[a-z]/.test(password)) {
            newErrors.password = "Password must contain at least one lowercase letter"
        } else if (!/[A-Z]/.test(password)) {
            newErrors.password = "Password must contain at least one uppercase letter"
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            newErrors.password = "Password must contain at least one special character"
        }

        setErrors(newErrors);

        return !newErrors.email && !newErrors.password
    };


    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        if (validateForm()) {
            localStorage.setItem('user', JSON.stringify({ email, password }))
            navigate('/')
        }
    };

    return (
        <>
            <div>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Welcome!</h1>
            <h2>Please register:</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                </div>
                <button type="submit">Register</button>
            </form>
        </>
    )
}

export default Registration;