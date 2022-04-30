import { FC } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import { PhotoContextProvider } from "./context";
import { NavigationBar } from "./components";
import { ProfileRoutes, SnapScoutRoutes } from "./routes";

export const App: FC = () => {

  const appNav = {
    brand: { name: "Nick Murphy", to: "/" },
    links: [
      { name: "Profile", to: "/Profile" },
      { name: "SnapScout", to: "/SnapScout" },
    ],
  };

  return (
    <PhotoContextProvider>
      <BrowserRouter>
        <NavigationBar brand={appNav.brand} links={appNav.links} />
        <div className="container">
          <Route
            exact
            path="/"
            render={() => <Redirect to={appNav.links[0]["to"]} />}
          />
          <ProfileRoutes />
          <SnapScoutRoutes />
        </div>
      </BrowserRouter>
    </PhotoContextProvider>
  );
};

export default App;
