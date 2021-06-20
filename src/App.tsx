import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/detail/:id" component={Detail} exact />
      </Switch>
    </Router>
  );
}
