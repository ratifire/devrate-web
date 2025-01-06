export const checkTimeDifference = (startTime, cancelButtonHandler, disableLinkHandler) => {
  const eventStartTime = new Date(startTime);

  const currentTime = new Date();
  const timeDifferenceInMinutes = (currentTime - eventStartTime) / (1000 * 60);

  if (timeDifferenceInMinutes >= 1) {
    cancelButtonHandler(false);
  }

  if (timeDifferenceInMinutes >= 60) {
    disableLinkHandler(true);
  }
};
