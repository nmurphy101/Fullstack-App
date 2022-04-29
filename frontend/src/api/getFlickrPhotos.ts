import { apiKey } from ".";
// import { SearchGetResponse } from "@/src/types";

import { request } from "./request";


// create a case with caseCreateRequest information
export async function getFlickrPhotos(query: string): Promise<any> {
  const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
  const response = await request({url, method: "GET"});
  return response;
}
