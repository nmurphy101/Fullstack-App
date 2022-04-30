import { createContext, FC, useState, ReactNode, useCallback } from "react";

import { getSecurePassword } from "../api";
import { useCrypto } from "../hooks";


interface Props {
  children: ReactNode,
}

export const SecurePasswordContext = createContext(null);

export const SecurePasswordProvider: FC<Props> = ({ children }) => {
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(true);
  const crypto = useCrypto();

  const runSearch = useCallback(
    async (query: string) => {
      const pwHash = crypto(query);
      const payload = {
        partialSHA1: pwHash.slice(0, 10),
      };
      getSecurePassword(payload)
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
    <SecurePasswordContext.Provider value={{ result, loading, runSearch }}>
      {children}
    </SecurePasswordContext.Provider>
  );
};
