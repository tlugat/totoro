import { useState, useEffect } from 'react';
import { ApiResponse } from 'src/api/shared/interfaces';
import { getOrganizationCurrentSubscription } from '../requests';
import { useToast } from 'src/hooks/useToast';
import { Subscription } from 'react-hook-form/dist/utils/createSubject';

export type useOrganizationsResponse = {
  data: ApiResponse<Subscription>;
  error: any;
  loading: boolean;
  getData: () => Promise<any>
};

export const useOrganizationCurrentSubscription = (id: string): useOrganizationsResponse => {
  const [data, setData] = useState<ApiResponse<Subscription>>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const { setToast } = useToast();

  const getAPIData = async (): Promise<any> => {
    if(error) setError(null);
    setLoading(true);
    try {
      const response = await getOrganizationCurrentSubscription(id);
      if('error' in response) {
        setError(response.message);
        setToast({ variant: 'error', message: response.message, duration: 6000})
        return;
      }
      setData(response);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if(!error) {
      getAPIData();
    }
  }, []);

  return { data, error, loading, getData: getAPIData };
};