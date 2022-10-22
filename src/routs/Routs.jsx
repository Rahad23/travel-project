import { createBrowserRouter } from "react-router-dom";
import BookingCoxesBuzar from "../component/bookingCoxesBuzar/BookingCoxesBuzar";
import BookingSremongol from "../component/bookingSreemongol/BookingSremongol";
import BookingSundorbon from "../component/bookingSundorbon/BookingSundorbon";
import CoxesBuzar from "../component/coxesBuzar/CoxesBuzar";
import Slider from "../component/slider/Slider";
import Sreemongol from "../component/sreemongol/Sreemongol";
import Sundorbon from "../component/sundorbon/Sundorbon";
import Login from "../loginRegistration/login/Login";
import Register from "../loginRegistration/register/Register";
import Main from "../main/Main";
import PrivateRoute from "../privateRoute/PrivateRoute";
import BookingPage from './../bookingPage/bookingPage/BookingPage';

export const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Slider></Slider>
                },
                {
                    path: '/coxesBuzar',
                    element: <CoxesBuzar></CoxesBuzar>
                },
                {
                    path: '/bookingCoxesBuzar',
                    element: <BookingCoxesBuzar></BookingCoxesBuzar>
                },
                {
                    path: '/sreemongol',
                    element: <Sreemongol></Sreemongol>
                },
                {
                    path: '/bookingSreemongol',
                    element: <BookingSremongol></BookingSremongol>
                },
                {
                    path: '/sundorbon',
                    element: <Sundorbon></Sundorbon>
                },
                {
                    path: '/SundorbonBooking',
                    element: <BookingSundorbon></BookingSundorbon>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                },
                {
                    path: "/booking",
                    element: 
                    <PrivateRoute>
                        <BookingPage></BookingPage>
                    </PrivateRoute>,
                    loader: async()=> fetch('http://localhost:5000/bedroom')
                }
            ]
        }
]);