import { useSelector } from 'react-redux';

const useGetSpecializationId = () => {
  const { activeSpecialization, mainSpecialization } = useSelector((state) => state.specialization);

  return activeSpecialization?.id || mainSpecialization?.id;
}

export default useGetSpecializationId;
