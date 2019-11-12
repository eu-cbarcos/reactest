import React from 'react';

export const useSubmit = (submitFunction) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const handleSubmit = async (event) => {
    try {
      setLoading(true);
      setError(null);
      await submitFunction(event);
    } catch (error) {
      setError(error);
    } finally  {
      setLoading(false);
    }
  };
  return [handleSubmit,loading,error]
};