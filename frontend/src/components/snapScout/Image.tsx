import { FC } from "react";

interface Props {
  url: string,
  title: string,
}

export const Image: FC<Props> = ({ url, title }) => (
  <li>
    <img src={url} alt={title} />
  </li>
);
