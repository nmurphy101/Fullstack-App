import { FC } from "react";
import { Route, Switch } from "react-router-dom";

import { SecurePasswordHeader, SecurePasswordSearch } from "../components";

export const SecurePasswordRoutes: FC = () => {

  return (
    <>
      <Route
        exact
        path="/SecurePassword"
        render={() => <SecurePasswordHeader /> }
      />
      <Switch>
        <Route
          path="/SecurePassword/search/:searchInput"
          render={(props) => (
            <SecurePasswordSearch searchTerm={props.match.params.searchInput} />
          )}
        />
      </Switch>
    </>
  );
};
