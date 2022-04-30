import { apiKey } from ".";
// import { SearchGetResponse } from "@/src/types";

import { request } from "./request";


// create a case with caseCreateRequest information
export async function getPwnedPassword(data: object): Promise<any> {
  const response = await request(
    {
      url: `https://api.enzoic.com/passwords`,
      method: "POST",
      data,
    }
  );
  return response;
}
