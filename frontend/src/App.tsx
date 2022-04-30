import { FC } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { PhotoContextProvider } from "./context";
import { Header, Item, Search, NotFound, NavigationBar } from "./components";


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

  const snapScoutNav = {
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
            render={(props) => (
              <Header
                history={props.history}
              />
            )}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to={appNav.links[0]["to"]} />}
            />
            <Route
              path={snapScoutNav.links[0]["to"]}
              render={() => <Item searchTerm={snapScoutNav.links[0]["name"]} />}
            />
            <Route path={snapScoutNav.links[1]["to"]} render={() => <Item searchTerm={snapScoutNav.links[1]["name"]} />} />
            <Route path={snapScoutNav.links[2]["to"]} render={() => <Item searchTerm={snapScoutNav.links[2]["name"]} />} />
            <Route path={snapScoutNav.links[3]["to"]} render={() => <Item searchTerm={snapScoutNav.links[3]["name"]} />} />
            <Route
              path="/SnapScout/search/:searchInput"
              render={(props) => (
                <Search searchTerm={props.match.params.searchInput} />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </PhotoContextProvider>
  );
};

export default App;
