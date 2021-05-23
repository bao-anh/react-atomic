import { useState } from 'react';

const useErrorMessage = () => {
  const [errors, setErrors] = useState({});

  const onFocusField = (field) => {
    setErrors({
      ...errors,
      [field]: null
    });
  };

  return {
    errors,
    setErrors,
    onFocusField
  };
};

export default useErrorMessage;
