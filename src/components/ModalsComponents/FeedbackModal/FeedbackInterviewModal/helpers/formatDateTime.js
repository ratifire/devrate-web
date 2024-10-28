const formatDateTime = (ISO) => {
  const date = new Date(ISO);

  return {
    date: date.toLocaleDateString('en-GB').replace(/\//g, '/'),
    time: date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
  }
}

export default formatDateTime;
