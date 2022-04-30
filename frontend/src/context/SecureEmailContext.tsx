import { createContext, FC, useState, ReactNode, useCallback } from "react";

import { getPwnedEmail } from "../api";
import { useCrypto } from "../hooks";


interface Props {
  children: ReactNode,
}

export const SecureEmailContext = createContext(null);

export const SecureEmailProvider: FC<Props> = ({ children }) => {
  const [SEResult, setResult] = useState({});
  const [isSELoading, setLoading] = useState(false);

  const runSESearch = useCallback(
    async (query: string) => {
      setLoading(true);
      getPwnedEmail(query)
        .then((data) => {
          console.log("DATA RETURNED: ", data);
          setResult({
            results: data,
            email: query,
          });
          setLoading(false);
        })
        .catch((error) => {
          if (error == 404) {
            setResult({
              results: "",
              pwHash: query,
            });
            setLoading(false);
          } else {
            console.log(
              "Encountered an error with fetching and parsing data",
              error
            );
          }
        });
    },
    [],
  );

  return (
    <SecureEmailContext.Provider value={{ SEResult, isSELoading, runSESearch }}>
      {children}
    </SecureEmailContext.Provider>
  );
};
