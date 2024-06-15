import {FC} from "react";
import {Routes} from 'react-router'
import {Route} from 'react-router-dom'
import {HomePage} from "../pages/HomePage/HomePage.tsx";
import {LoginPage} from "../pages/LoginPage/LoginPage.tsx";
import {RegistrationPage} from "../pages/RegistrationPage/RegistrationPage.tsx";
import {RulesPage} from "../pages/RulesPage/RulesPage.tsx";

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
