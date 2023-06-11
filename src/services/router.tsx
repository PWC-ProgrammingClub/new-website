import {
    createBrowserRouter
} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Post from '../pages/Post'
import Posts from '../pages/Posts'


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
    },
    {
        path: "/post/:post",
        Component: Post
    },
    {
        path: "/posts/:start/:end",
        Component: Posts
    }
])


export default router