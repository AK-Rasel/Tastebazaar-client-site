import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../Pages/Home";
import AllFoodItems from "../Pages/AllFoodItems";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Cart from "../Pages/Cart";
import Error from "../Pages/Error";
import MyAddedFoodItems from "../Pages/MyAddedFoodItems";
import AddFoodItem from "../Pages/AddFoodItem";
import Order from "../Pages/Order";
import FoodDetail from "../Pages/FoodDetail";
import PrivetRouter from "../PrivetRouter/PrivetRouter";

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout/>,
      errorElement:<Error/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"all-food-items",
            element:<PrivetRouter><AllFoodItems/></PrivetRouter>,
            loader:() => fetch('http://localhost:5000/api/v1/all-food-items')
        },
        {
            path:"blog",
            element:<Blog/>
        },
        {
            path:"my-added-food-items",
            element:<MyAddedFoodItems/>
        },
        {
            path:"food-detail/:id",
            element:<FoodDetail/>,
            loader: (params) => fetch(`http://localhost:5000/api/v1/all-food-items/food-detail/${params._id}`)
        },
        {
            path:"added-food-item",
            element:<AddFoodItem/>
        },
        {
            path:"order",
            element:<Order/>
        },
        {
            path:"cart",
            element:<Cart/>
        },
        {
            path:"login",
            element:<Login/>
        },
        {
            path:"register",
            element:<Register/>
        },
      ]
    },
  ]);
  export default router;