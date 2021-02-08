import Home from "../components/page/public/Home"
import SignIn from "../components/page/public/SignIn"
import PageExample from "../components/page/public/PageExample"
import Price from "../components/page/public/Price"
import Notes from "../components/page/private/Notes"
import SingUp from "../components/page/public/SignUp"

export default function configRoutes(){
  const routes = [
    {
      path:"/SingIn",
      component: SignIn
    },
    {
      path: "/SingUp",
      component: SingUp,
    },
    {
      path:"/PageExample/:id",
      component:PageExample
    },
  
    {
      path: "/Price",
      component: Price
    },
    {
      path: "/User/Notes",
      component: Notes
    },
    {
      path: "/",
      component: Home
    }
  ];
  return routes
}



