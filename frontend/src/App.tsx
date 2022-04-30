import { FC } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import { PhotoContextProvider, SecurePasswordProvider } from "./context";
import { NavigationBar } from "./components";
import { ProfileRoutes, SnapScoutRoutes, SecurePasswordRoutes } from "./routes";

export const App: FC = () => {

  const appNav = {
    brand: { name: "Nick Murphy", to: "/" },
    links: [
      { name: "Profile", to: "/Profile" },
      { name: "SnapScout", to: "/SnapScout" },
      { name: "SecurePasswordChecker", to: "/SecurePassword" },
    ],
  };

  return (
    <SecurePasswordProvider>
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
            <SecurePasswordRoutes />
          </div>
        </BrowserRouter>
      </PhotoContextProvider>
    </SecurePasswordProvider>
  );
};

export default App;
