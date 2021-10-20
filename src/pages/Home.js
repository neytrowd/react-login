import {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom'
import {LOGIN} from "../redux/authReducer";


const Home = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const loginRef = useRef(null);
    const passwordRef = useRef(null);
    const [login, setLogin] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const loginHandler = () => {
        const login = 'developer21';
        const password = '123456';
        // here we need to do async query
        const loginVal = loginRef.current.value;
        const passVal = passwordRef.current.value

        if (login === loginVal && password === passVal) {
            setLogin(true);
            setCurrentUser(login);
        } else {
            setLogin(false);
        }
    }

    const signIn = () => {
        history.push('/profile')
        dispatch({type: LOGIN, payload: currentUser})
    }

    return (
        <div>
            <h3>Login</h3>
            <p><input ref={loginRef} type={'text'} onChange={loginHandler}/></p>
            <p><input ref={passwordRef} type={'password'} onChange={loginHandler}/></p>
            <p><button disabled={!login} onClick={signIn}>Login</button></p>
        </div>
    )
}

export default Home