import { FC } from "react";

import {NoImages, Image} from ".";


interface Props {
  data: any,
};

export const Gallery: FC<Props> = ({ data }) => {
  let images;
  let noImages;
  // map variables to each item in fetched image array and return image component
  if (data.length > 0) {
    images = data.map((image: any) => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return <Image url={url} key={id} title={title} />;
    });
  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }
  return (
    <div>
      <ul>{images}</ul>
      {noImages}
    </div>
  );
};
