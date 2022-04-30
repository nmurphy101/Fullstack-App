import { FC } from "react";
import { Route } from "react-router-dom";

import { Item, Search } from "../components";

export const SnapScoutRoutes: FC = () => {
  const snapScoutNav = {
    links: [
      { name: "Mountain", to: "/SnapScout/mountain" },
      { name: "Beach", to: "/SnapScout/beach" },
      { name: "Bird", to: "/SnapScout/bird" },
      { name: "Food", to: "/SnapScout/food" },
    ],
  };

  return (
    <>
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
    </>
  );
};
