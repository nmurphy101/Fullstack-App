import { FC } from "react";

import { Container } from "./Container";


interface Props {
  searchTerm: string,
}

export const Item: FC<Props> = ({ searchTerm }) => {
  return (
    <div>
      <h2>{searchTerm} Pictures</h2>
      <Container searchTerm={searchTerm} />
    </div>
  );
};
