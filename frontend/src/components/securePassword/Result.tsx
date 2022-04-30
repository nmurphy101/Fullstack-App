import { FC } from "react";


interface Props {
  data: any,
  method: "password" | "email",
}

interface match {
  sha1: string,
  exposureCount: number,
}

export const Result: FC<Props> = ({ data, method }) => {
  let result = `${method} is Safe. It has not been seen yet.`;
  console.log("WHATS THE DATA: ", data);
  data.results?.forEach((match: match) => {
    if (match.sha1.includes(data.pwHash)) {
      const count = method == "password" ? match.exposureCount : data;
      result = `${method} is Compromised. It's been seen ${count} times.`;
    }
  });

  return (
    <div>
      {result}
    </div>
  );
};
