import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css"

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
