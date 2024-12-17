import { useEffect } from 'react';

const useCheckTimeDifference = (startTime, setShowCancelButton, setDisableLink) => {
  useEffect(() => {
    const eventStartTime = new Date(startTime);

    const checkTimeDifference = () => {
      const currentTime = new Date();
      const timeDifferenceInMinutes = (currentTime - eventStartTime) / (1000 * 60);

      if (timeDifferenceInMinutes >= 1) {
        setShowCancelButton(false);
      }

      if (timeDifferenceInMinutes >= 60) {
        setDisableLink(true);
      }
    };

    checkTimeDifference();

    const timer = setInterval(checkTimeDifference, 60000);

    return () => clearInterval(timer);
  }, [startTime]);
};

export default useCheckTimeDifference;
