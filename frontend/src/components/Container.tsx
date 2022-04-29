import { useContext, useEffect, FC } from "react";

import { PhotoContext } from "../context/PhotoContext";
import { Gallery, Loader} from ".";


interface Props {
  searchTerm: string,
}

export const Container: FC<Props> = ({ searchTerm }) => {
  const { images, loading, runSearch } = useContext(PhotoContext);
  useEffect(() => {
    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <div className="photo-container">
      {loading ? <Loader /> : <Gallery data={images} />}
    </div>
  );
};
