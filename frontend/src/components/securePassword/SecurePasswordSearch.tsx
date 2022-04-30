import { FC, useState } from "react";

import { Button } from "../common";
import { SecurePasswordContainer, SecurePasswordHeader } from "./";


interface Props {
  searchTerm: string,
}

type MethodType = "password" | "email";

export const SecurePasswordSearch: FC<Props> = ({ searchTerm }) => {
  const [method, setMethod] = useState("password" as MethodType);
  const [isSubmitted, setSubmitted] = useState(false);

  const methodClick = (e: React.MouseEvent<HTMLButtonElement>, method: MethodType): void => {
    e.stopPropagation();
    setMethod(method);
    setSubmitted(false);
  };

  const onSubmit = (): void => {
    setSubmitted(true);
  };

  console.log("WHAT ARE YOU? ", onSubmit, typeof onSubmit);

  return (
    <div>
      <SecurePasswordHeader onSubmit={() => onSubmit()} />
      <Button
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => methodClick(e, "password")}
        disabled={method != "password" ? false : true}
      >
        Password
      </Button>
      <Button
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => methodClick(e, "email")}
        disabled={method != "email" ? false : true}
      >
        Email
      </Button>
      { isSubmitted &&
        <>
          <h2>{`"${searchTerm}"`} Results</h2>
          <SecurePasswordContainer searchTerm={searchTerm} method={method} />
        </>
      }
    </div>
  );
};
