import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./screens/home/Home";
import PinView from "./screens/pinView/PinView";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route to exact="/">
            <Home />
          </Route>
          <Route to exact="/pin">
            <PinView />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
