import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import List from "./pages/List";
import LoginForm from "./components/LoginForm";
import Profile from "./pages/Profile";
import { ChakraProvider } from "@chakra-ui/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/list",
    element: <List />,
  },
  {
    path: "/profile/:id",
    element: <Profile />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  }
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
