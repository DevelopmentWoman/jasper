import { Route, Routes, useLocation } from "react-router-dom"
import { JasperRoutes } from "../jasper/routes/JasperRoutes"




export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={<JasperRoutes/>}/>
    </Routes>
  )
}
