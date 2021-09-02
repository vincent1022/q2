import Login from "../page/PublicPage/Login";
import Register from "../page/PublicPage/Register";
import Home from "../page/PrivatePage/Home"
import News from "../page/PrivatePage/News"

import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "../page/PublicPage/NotFound";

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

        <Route exact path={"/home"}>
          <Home />
        </Route>

        <Route exact path={"/news"}>
          <News />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};