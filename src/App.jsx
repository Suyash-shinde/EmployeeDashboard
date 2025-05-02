import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Login"
import Register from "./Register"
import ProtectedRoute from "./utilities/ProtectedRoute"
import Dashboard from "./Dashboard"
import Forgot from "./Forgot"

function App() {

  return (
  <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/forgot" element={<Forgot/>}/>
                <Route element={<ProtectedRoute/>}>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                </Route>
                <Route path="/register" element={<Register/>}/>
            </Routes>
            
  </BrowserRouter>
  )
}

export default App
