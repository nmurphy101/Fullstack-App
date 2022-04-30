import { FC } from "react";

import { Container, SnapScoutHeader } from "./";


interface Props {
  searchTerm: string,
}

export const SnapScoutSearch: FC<Props> = ({ searchTerm }) => {
  return (
    <div>
      <SnapScoutHeader />
      <h2>{searchTerm} Images</h2>
      <Container searchTerm={searchTerm} />
    </div>
  );
};
