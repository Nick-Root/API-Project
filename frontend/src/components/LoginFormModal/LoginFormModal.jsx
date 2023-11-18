
import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import './LoginForm.css';

function LoginFormModal() {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const { closeModal } = useModal();

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});
        return dispatch(sessionActions.login({ credential, password }))
            .then(closeModal)
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) {
                    setErrors(data.errors);
                }
            });
    };

    return (
        <div className='main'>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        placeholder='Username or Email'
                        className='credentialinput'
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <input
                        type="password"
                        placeholder='Password'
                        className='passwordinput'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                {errors.credential && (
                    <p className='errors'>{errors.credential}</p>
                )}
                <button type="submit" className="loginbutton" disabled={credential.length < 4 || password.length < 6}>Log In</button>
            </form>
        </div>
    );
}

export default LoginFormModal;
