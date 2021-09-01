import Login from "../page/PublicPage/Login";
import Register from "../page/PublicPage/Register";

import { BrowserRouter, Switch, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Login />
        </Route>

        <Route exact path={"/register"}>
          <Register />
        </Route>

        <Route exact path={"/login"}>
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};