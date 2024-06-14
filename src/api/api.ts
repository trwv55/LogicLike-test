import axios, { AxiosRequestConfig } from "axios";

export async function fetchData<T>(url: string): Promise<T> {
  const options: AxiosRequestConfig = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  try {
    const response = await axios.get<T>(url, options);

    if (!response.data) {
      throw new Error("Could not fetch data");
    }

    return response.data;
  } catch (error) {
    console.error("Network response was not ok", error);
    throw error;
  }
}
