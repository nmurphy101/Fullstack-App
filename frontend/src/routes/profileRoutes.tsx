import { FC } from "react";
import { Route, Switch } from "react-router-dom";

import { ProfileHeader, Item } from "../components";

export const ProfileRoutes: FC = () => {
  const profileNav = {
    links: [{ name: "About Me", to: "/Profile/about_me" }],
  };

  return (
    <>
      <Route
        exact
        path="/Profile"
        render={() => <ProfileHeader /> }
      />
      <Switch>
        <Route path={profileNav.links[0]["to"]} render={() => <Item searchTerm={profileNav.links[0]["name"]} />} />
      </Switch>
    </>
  );
};
