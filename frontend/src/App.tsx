import { FC } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import { PhotoContextProvider } from "./context";
import { Header, Item, Search, NotFound} from "./components";
import { useReRoute } from "./hooks";


export const App: FC = () => {
  const reRoute = useReRoute();

  // Prevent page reload, clear input, set URL and push history on submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, searchInput: string) => {
    e.preventDefault();
    e.currentTarget.reset();
    const url = `/search/${searchInput}`;
    reRoute(url);
  };

  return (
    <PhotoContextProvider>
      <HashRouter basename="/SnapScout">
        <div className="container">
          <Route
            render={props => (
              <Header
                handleSubmit={handleSubmit}
                history={props.history}
              />
            )}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/mountain" />}
            />
            <Route
              path="/mountain"
              render={() => <Item searchTerm="mountain" />}
            />
            <Route path="/beach" render={() => <Item searchTerm="beach" />} />
            <Route path="/bird" render={() => <Item searchTerm="bird" />} />
            <Route path="/food" render={() => <Item searchTerm="food" />} />
            <Route
              path="/search/:searchInput"
              render={props => (
                <Search searchTerm={props.match.params.searchInput} />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </HashRouter>
    </PhotoContextProvider>
  );
}

export default App;
