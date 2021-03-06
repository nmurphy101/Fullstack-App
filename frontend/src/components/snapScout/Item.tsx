import { FC } from "react";

import { Container } from "./Container";
import { SnapScoutHeader } from "./SnapScoutHeader";

interface Props {
  searchTerm: string,
}

export const Item: FC<Props> = ({ searchTerm }) => {
  return (
    <div>
      <SnapScoutHeader />
      <h2>{searchTerm} Pictures</h2>
      <Container searchTerm={searchTerm} />
    </div>
  );
};
