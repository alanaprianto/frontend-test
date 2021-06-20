import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  );
}
