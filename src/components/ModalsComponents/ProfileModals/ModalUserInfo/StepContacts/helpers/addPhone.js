const addPhone = (phone) => {
  const cleanedPhone = phone.replace(/\D/g, '');
  return phone.trim().startsWith('+') ? phone : `+${cleanedPhone}`;
};

export default addPhone;
