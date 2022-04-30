import { useContext, useEffect, FC } from "react";

import { SecurePasswordContext, SecureEmailContext } from "../../context";
import { Loader } from "../common";
import { Result } from ".";


interface Props {
  searchTerm: string,
  method: "password" | "email",
}

export const SecurePasswordContainer: FC<Props> = ({ searchTerm, method }) => {
  const { SPResult, isSPLoading, runSPSearch } = useContext(SecurePasswordContext);
  const { SEResult, isSELoading, runSESearch } = useContext(SecureEmailContext);
  useEffect(() => {
    method == "password" ? runSPSearch(searchTerm) : runSESearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);

  console.log(isSPLoading, isSELoading);

  return (
    <div className="photo-container">
      {isSPLoading || isSELoading ? <Loader /> : <Result data={SPResult? SPResult : SEResult} method={method} />}
    </div>
  );
};
