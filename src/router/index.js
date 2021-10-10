import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import ProcessParent from '../views/ProcessParent.vue'
import AddEmployee from '../views/AddEmployee.vue'
import PersonalInformation from '../views/PersonalInformation.vue'
import SeatDemo from '../views/SeatDemo.vue'
import PaymentDemo from '../views/PaymentDemo.vue'
// import ConfirmationDemo from '../views/ConfirmationDemo.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/process',
    name: 'ProcessParent',
    component: ProcessParent
  },
  {
    path: '/addemployee',
    name: 'AddEmployee',
    component: AddEmployee
  },
  {
    path: '/personalInformation',
    name: 'PersonalInformation',
    component: PersonalInformation
  },
  {
    path: '/seat',
    name: 'Seat',
    component: SeatDemo
  },
  {
    path: '/payment',
    name: 'Payment',
    component: PaymentDemo
  }
  // {
  //   path: '/confirmation',
  //   name: 'Confirmation',
  //   component: ConfirmationDemo
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
