import { FC } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { PhotoContextProvider } from "./context";
import { Header, NavigationBar } from "./components";
import { SnapScoutRoutes } from "./routes";

export const App: FC = () => {

  const appNav = {
    brand: { name: "Nick Murphy", to: "/" },
    links: [
      { name: "Mountain", to: "/SnapScout/mountain" },
      { name: "Beach", to: "/SnapScout/beach" },
      { name: "Bird", to: "/SnapScout/bird" },
      { name: "Food", to: "/SnapScout/food" },
    ],
  };

  return (
    <PhotoContextProvider>
      <BrowserRouter basename="">
        <NavigationBar brand={appNav.brand} links={appNav.links} />
        <div className="container">
          <Route
            render={() => <Header /> }
          />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to={appNav.links[0]["to"]} />}
            />
            <SnapScoutRoutes />
          </Switch>
        </div>
      </BrowserRouter>
    </PhotoContextProvider>
  );
};

export default App;
