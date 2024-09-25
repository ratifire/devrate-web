import { useSelector } from 'react-redux';
import { useGetMasteriesBySpecializationIdQuery } from '../../../redux/specialization/specializationApiSlice';
import { useGetSpecializationId } from './index';

const useGetMastery = () => {
  const activeMastery = useSelector((state) => state.activeMastery.activeMastery);
  const { id: userId } = useSelector((state) => state.auth.user.data);
  const specializationId = useGetSpecializationId();

  const { data, isError, isFetching } = useGetMasteriesBySpecializationIdQuery(specializationId, { skip: !specializationId });

  const selectMastery = data?.find((v) => v.level && v.level.toUpperCase() === activeMastery.toUpperCase());

  const masteryId = selectMastery?.id;

  return {
    isFetching,
    isError,
    masteryId,
    userId,
    activeMastery,
  };
};

export default useGetMastery;
