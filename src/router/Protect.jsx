
import { useSelector } from 'react-redux';
import ErrorToaster from '../components/ToastComp/ErrorToaster';

const Protect = ({children}) => {
    const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated)

    if (!isAuthenticated) {
        return <ErrorToaster message = "You are not authenticated!" /
            >
    }
    return children
}

export default Protect