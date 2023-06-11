import {
    createBrowserRouter
} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'


/**
 * The react router for the application
 */
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    }
])


export default router