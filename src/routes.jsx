import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Sobre } from "./pages/Sobre"
import { Contatos } from "./pages/Contatos"
import { Projetos } from "./pages/Projetos"
import { Page404 } from "./pages/Page404"


export const AppRoutes = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/sobre" element={<Sobre />}></Route>
            <Route path="/contatos" element={<Contatos />}></Route>
            <Route path="/projetos" element={<Projetos />}></Route>
            <Route path="*" element={<Page404 />}></Route>
        </Routes>
        </BrowserRouter>
    )
}