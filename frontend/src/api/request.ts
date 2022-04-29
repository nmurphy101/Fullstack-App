import axios, { AxiosRequestConfig, AxiosError } from "axios";

/**
 * Performs an API request.
 * @param options The request options.
 * @param authToken The optional authentication token.
 */
export async function request<T>(options: AxiosRequestConfig, authToken?: string): Promise<T> {
  const url = options.url;
  const method = options.method;

  const client = axios.create({
    url,
    method,
  });

  if (authToken) {
    client.defaults.headers.common = {
      Authorization: `Bearer ${authToken}`,
    };
  }

  try {
    const result = await client(options);
    console.log("TESTING: ", result);
    return result.data;
  } catch (error: unknown) {
    let errorMessage: string | AxiosError | unknown = error;
    if (axios.isAxiosError(error)) {
      console.log("TESTING2 ERROR: ", error, typeof error);
      if (error.response) {
        errorMessage = error.response.data.message;
      } else if (error.request) {
        errorMessage = error.request;
      } else if (error.message) {
        errorMessage = error.message;
      } else {
        errorMessage = `Unknown error type`;
      }
    }
    throw errorMessage;
  }
}
