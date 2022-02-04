import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";


const Navigation = () => {

    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks
    if (!sessionUser) {
        sessionLinks = (
            <>
                <NavLink to={'/login'}>Log In</NavLink>
                <NavLink to={'/signup'}>Sign Up</NavLink>
            </>
        )
    } else {
        sessionLinks = (
            <>
                <ProfileButton />
                <NavLink to={'/'}>Log Out</NavLink>
            </>
        )
    }
    return (
        <ul>
            <NavLink to={'/'}>Home</NavLink>
            {sessionLinks}
        </ul>
    )
}


export default Navigation;
