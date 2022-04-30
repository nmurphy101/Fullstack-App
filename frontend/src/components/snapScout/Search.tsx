import { FC } from "react";

import { Container } from "./Container";


interface Props {
  searchTerm: string,
}

export const Search: FC<Props> = ({ searchTerm }) => {
  return (
    <div>
      <h2>{searchTerm} Images</h2>
      <Container searchTerm={searchTerm} />
    </div>
  );
};
