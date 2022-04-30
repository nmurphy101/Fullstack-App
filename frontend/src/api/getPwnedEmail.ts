import { apiKey } from ".";
// import { SearchGetResponse } from "@/src/types";

import { request } from "./request";


// create a case with caseCreateRequest information
export async function getPwnedEmail(query: string): Promise<any> {
  const response = await request(
    {
      url: `https://haveibeenpwned.com/unifiedsearch/${encodeURIComponent(query)}`,
      method: "GET",
    }
  );
  return response;
}
