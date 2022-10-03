import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(true);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseData = await response.json();

      applyData(responseData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
    }
  }, []);

  return {
    isLoading,
    sendRequest,
  };
};

export default useHttp;
