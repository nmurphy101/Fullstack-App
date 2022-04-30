import { useContext, useEffect, FC } from "react";

import { SecurePasswordContext } from "../../context/SecurePasswordContext";
import { Loader } from "../common";
import { Result } from ".";


interface Props {
  searchTerm: string,
}

export const SecurePasswordContainer: FC<Props> = ({ searchTerm }) => {
  const { result, loading, runSearch } = useContext(SecurePasswordContext);
  useEffect(() => {
    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <div className="photo-container">
      {loading ? <Loader /> : <Result data={result} />}
    </div>
  );
};
