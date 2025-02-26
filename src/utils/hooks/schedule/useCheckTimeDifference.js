import { useEffect, useState } from 'react';
import { checkTimeDifference } from '../../helpers/dateHandlers.js';

const useCheckTimeDifference = (startTime) => {
  const [showCancelButton, setShowCancelButton] = useState(true);
  const [disableLink, setDisableLink] = useState(false);
  useEffect(() => {
    checkTimeDifference(startTime, setShowCancelButton, setDisableLink);
  }, [startTime, setDisableLink, setDisableLink]);

  return { showCancelButton, disableLink };
};

export default useCheckTimeDifference;
