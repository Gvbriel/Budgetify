import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MainWindow from "@/views/MainWindow";
import BudgetForm from "@/components/BudgetForm";
import Login from "@/views/user/Login";
import Register from "@/views/user/Register";
import CardsList from "@/components/CardsList";
import CardForm from "@/components/CardForm";
import Dashboard from "../components/Dashboard";

Vue.use(VueRouter)

const routes = [
  {
    path: '/budget',
    name: 'Budget',
    component: MainWindow
  },
  {
    path: '/budget/add',
    name: 'BudgetAdd',
    component: BudgetForm
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/cards',
    name: 'Cards',
    component: CardsList
  },
  {
    path: '/cards/add',
    name: 'CardsAdd',
    component: CardForm
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
]

const router = new VueRouter({
  routes
})

export default router
