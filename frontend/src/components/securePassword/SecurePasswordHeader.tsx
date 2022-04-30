import { FC } from "react";

import { Form } from "../common";
import { useReRoute } from "../../hooks";


interface Props {
  onSubmit?: any,
}

export const SecurePasswordHeader: FC<Props> = ({ onSubmit }) => {
  const reRoute = useReRoute();

  // Prevent page reload, clear input, set URL and push history on submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, searchInput: string) => {
    e.preventDefault();
    e.currentTarget.reset();
    console.log(onSubmit);
    onSubmit ? onSubmit(): null;
    const url = `/SecurePassword/search/${searchInput}`;
    reRoute(url);
  };

  return (
    <div>
      <h1>Secure Password Checker</h1>
      <Form handleSubmit={handleSubmit} />

      {/* <iframe
        className={styles.profileFrame}
        scrolling="no"
        title="fx."
        src=""
        frameBorder="no"
        allowTransparency={true}
        allowFullScreen={true}
      /> */}
    </div>
  );
};
