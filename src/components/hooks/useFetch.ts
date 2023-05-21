import { useState } from 'react';
import { fetchAPI } from '../../api';

export const useFetch = <T>() => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (url: string, options: RequestInit) => {
    try {
      const data = await fetchAPI(url, options);

      setData(data);
    } catch (error) {
      if (!(error instanceof Error)) return;

      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const getAPI = (url: string) => {
    fetchData(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  const postAPI = <T>(url: string, body: T) =>
    fetchData(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

  const patchAPI = <T>(url: string, body: T) =>
    fetchData(url, {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

  const deleteAPI = (url: string) => {
    fetchData(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return { data, isLoading, getAPI, postAPI, patchAPI, deleteAPI };
};
