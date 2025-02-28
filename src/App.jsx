import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { FormularioContext } from "./modules/FormularioContext/pages/FormularioContext"
import { Formulario } from "./modules/Formulario/pages/Formulario"
import { Layout } from "./layout/Layout"
import { Dashboard } from "./modules/Dashboard/pages/Dashboard"
import LoginPage from "./modules/Login/pages/Login"
import ProtectedRoute from "./routes/PrivateRoutes"
import { TaskProvider } from "./context/TaskContext"
import { FormularioRedux } from "./modules/FormularioRedux/pages/FormularioRedux"
import { Provider } from "react-redux"
import store from "./reducers/store"
import { Patterns } from "./modules/Patterns/pages/Patterns"
import { ShadcnIndex } from "./modules/ShadcnDemo/pages/ShadcIndex"
import { Toaster } from "./components/ui/sonner"
import { FormIndex } from "./modules/Forms/pages/FormIndex"
import { ShadcnForm } from "./modules/Forms/components/ShadcnForm"
import { TareasIndex } from "./modules/Tareas/pages/TareasIndex"
import { TanstackIndex } from "./modules/Tanstack/pages/TanstackIndex"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { TaskDetail } from "./modules/TaskDetail/pages/TaskDetail"

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute><Layout /></ProtectedRoute>,
    children: [
      {
        path: '/',
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>
      },
      {
        path: '/formulario',
        element: <ProtectedRoute><Formulario /></ProtectedRoute>
      },
      {
        path: '/formulariocontext',
        element: <ProtectedRoute><FormularioContext /></ProtectedRoute>
      },
      {
        path: '/formularioredux',
        element: <ProtectedRoute><FormularioRedux /></ProtectedRoute>
      },
      {
        path: '/patterns',
        element: <ProtectedRoute><Patterns/></ProtectedRoute>
      },
      {
        path: '/shadcn',
        element: <ProtectedRoute><ShadcnIndex/></ProtectedRoute>
      },
      {
        path: '/forms',
        element: <ProtectedRoute><FormIndex/></ProtectedRoute>
      },
      {
        path: '/shadcnform',
        element: <ProtectedRoute><ShadcnForm/></ProtectedRoute>
      },
      {
        path: '/tareas',
        element: <ProtectedRoute><TareasIndex/></ProtectedRoute>
      },
      {
        path: '/tanstack',
        element: <ProtectedRoute><TanstackIndex/></ProtectedRoute>
      },
      {
        path: '/tareas/:id',
        element: <ProtectedRoute><TaskDetail /></ProtectedRoute>
      },
    ]
  },
  {
    path: '/login',
    element: <LoginPage />
  },
])

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
      refetchOnWindowFocus: true
    }
  }
})

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Toaster richColors />
        <TaskProvider>
          <RouterProvider router={router} />
        </TaskProvider>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
