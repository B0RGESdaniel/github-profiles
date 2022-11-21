import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
import { apiGithub } from '../apiGithub';

export const useFetch = <T>(url: string, options?: AxiosRequestConfig) => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isFetching, setIsFethcing] = useState(true);

  useEffect(() => {
    apiGithub
      .get<T>(url, options)
      .then(response => {
        setData(response.data);
        setIsFethcing(false);
      })
      .catch(error => {
        setIsFethcing(false);
        toast.error(error.toString());
      });
  }, []);

  return { data, isFetching };
};
