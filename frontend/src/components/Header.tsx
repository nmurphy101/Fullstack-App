import { FC } from "react";

import { Form, Navigation } from ".";


interface Props {
  history: any,
  handleSubmit: any,
}

export const Header: FC<Props> = ({ history, handleSubmit }) => {
  return (
    <div>
      <h1>SnapShot</h1>
      <Form history={history} handleSubmit={handleSubmit} />
      <Navigation />
    </div>
  );
};
