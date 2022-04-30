import { createContext, FC, useState, ReactNode, useCallback } from "react";

import { getPwnedPassword } from "../api";
import { useCrypto } from "../hooks";


interface Props {
  children: ReactNode,
}

export const SecurePasswordContext = createContext(null);

export const SecurePasswordProvider: FC<Props> = ({ children }) => {
  const [SPResult, setResult] = useState({});
  const [isSPLoading, setLoading] = useState(false);
  const crypto = useCrypto();

  const runSPSearch = useCallback(
    async (query: string) => {
      setLoading(true);
      const pwHash = crypto(query);
      const payload = {
        partialSHA1: pwHash.slice(0, 10),
      };
      getPwnedPassword(payload)
        .then((data) => {
          setResult({
            results: data.candidates,
            pwHash: pwHash,
          });
          setLoading(false);
        })
        .catch((error) => {
          if (error == 404) {
            setResult({
              results: [],
              pwHash: pwHash,
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
    <SecurePasswordContext.Provider value={{ SPResult, isSPLoading, runSPSearch }}>
      {children}
    </SecurePasswordContext.Provider>
  );
};
