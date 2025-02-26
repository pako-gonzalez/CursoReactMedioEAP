import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { FormularioContext } from "./modules/FormularioContext/pages/FormularioContext"
import { Formulario } from "./modules/Formulario/pages/Formulario"
import { Layout } from "./layout/Layout"
import { Dashboard } from "./modules/Dashboard/pages/Dashboard"
import LoginPage from "./modules/Login/pages/Login"
import ProtectedRoute from "./routes/PrivateRoutes"
import { TaskProvider } from "./context/TaskContext"

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute><Layout/></ProtectedRoute>,
    children: [
      {
        path: '/',
        element: <ProtectedRoute><Dashboard/></ProtectedRoute>
      },
      {
        path: '/formulario',
        element: <ProtectedRoute><Formulario/></ProtectedRoute>
      },
      {
        path: '/formulariocontext',
        element: <ProtectedRoute><FormularioContext/></ProtectedRoute>
      },
    ]
  },
  {
    path: '/login',
    element: <LoginPage/>
  },
])

function App() {

  return (

    <TaskProvider>
      <RouterProvider router={router}/>
    </TaskProvider>

  )
}

export default App
