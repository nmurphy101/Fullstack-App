import { FC } from "react";

import { Form, Navigation } from ".";
import { useReRoute } from "../../hooks";


export const SnapScoutHeader: FC = () => {
  const reRoute = useReRoute();

  // Prevent page reload, clear input, set URL and push history on submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, searchInput: string) => {
    e.preventDefault();
    e.currentTarget.reset();
    const url = `/SnapScout/search/${searchInput}`;
    reRoute(url);
  };

  return (
    <div>
      <h1>SnapScout</h1>
      <Form handleSubmit={handleSubmit} />
      <Navigation />
    </div>
  );
};
