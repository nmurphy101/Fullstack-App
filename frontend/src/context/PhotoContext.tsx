import { createContext, FC, useState, ReactNode, useCallback } from "react";

import { getFlickrPhotos } from "../api";


interface Props {
  children: ReactNode,
};

export const PhotoContext = createContext(null);

export const PhotoContextProvider: FC<Props> = ({ children }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const runSearch = useCallback(
    async (query: string) => {
      getFlickrPhotos(query)
        .then(data => {
          setImages(data.photos.photo);
          setLoading(false);
        })
        .catch(error => {
          console.log(
            "Encountered an error with fetching and parsing data",
            error
          );
        });
    },
    [],
  );

  return (
    <PhotoContext.Provider value={{ images, loading, runSearch }}>
      {children}
    </PhotoContext.Provider>
  );
};
