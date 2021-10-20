import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {LOGOUT} from "../redux/authReducer";

const Profile = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {login} = useSelector(store => store.auth);

    const logout = () => {
        dispatch({type: LOGOUT})
    }

    useEffect(() => {
        if (!login) {
            history.push('/');
        }
    }, [login])


    return (
        <div>
            <h1>Hello {login}</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Profile