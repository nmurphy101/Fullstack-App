import { FC } from "react";

import { SecurePasswordContainer, SecurePasswordHeader } from "./";


interface Props {
  searchTerm: string,
}

export const SecurePasswordSearch: FC<Props> = ({ searchTerm }) => {
  return (
    <div>
      <SecurePasswordHeader />
      <h2>{`"${searchTerm}"`} Results</h2>
      <SecurePasswordContainer searchTerm={searchTerm} />
    </div>
  );
};
