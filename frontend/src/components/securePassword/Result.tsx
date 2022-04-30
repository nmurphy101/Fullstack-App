import { FC } from "react";


interface Props {
  data: any,
}

interface match {
  sha1: string,
  exposureCount: number,
}

export const Result: FC<Props> = ({ data }) => {
  let result = `Password is Safe. It has not been seen yet.`;
  data.results.forEach((match: match) => {
    if (match.sha1.includes(data.pwHash)) {
      result = `Password is Compromised. It's been seen ${match.exposureCount} times.`;
    }
  });

  return (
    <div>
      {result}
    </div>
  );
};
