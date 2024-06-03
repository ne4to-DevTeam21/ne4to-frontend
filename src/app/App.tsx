import {FC, lazy} from "react";
import { Routes } from 'react-router'
import { Route } from 'react-router-dom'

const HomePage = lazy(() => import('../pages/HomePage/HomePage').then(({ HomePage }) => ({ default: HomePage })))
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage').then(({ LoginPage }) => ({ default: LoginPage })))
const RegistrationPage = lazy(() => import('../pages/RegistrationPage/RegistrationPage').then(({ RegistrationPage }) => ({ default: RegistrationPage })))
const RulesPage = lazy(() => import('../pages/RulesPage/RulesPage').then(({ RulesPage }) => ({ default: RulesPage })))

export const App: FC = () => {

  return (
    <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegistrationPage />} path="/registration" />
        <Route element={<RulesPage />} path="/rules" />
    </Routes>
  )
}
