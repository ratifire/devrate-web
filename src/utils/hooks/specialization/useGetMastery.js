import { useSelector } from 'react-redux';
import { useGetMasteriesBySpecializationIdQuery } from '../../../redux/specialization/specializationApiSlice';
import { useGetSpecializationId } from './index';

const useGetMastery = () => {
  const activeMastery = useSelector((state) => state.activeMastery.activeMastery);
  const { id: userId } = useSelector((state) => state.auth.user.data);
  const specializationId = useGetSpecializationId();

  const {
    data: dataMasteries,
    isError,
    isFetching,
  } = useGetMasteriesBySpecializationIdQuery(specializationId, { skip: !specializationId });

  const data = specializationId ? dataMasteries : [];

  const selectMastery = data?.find((v) => v.level && v.level.toUpperCase() === activeMastery.toUpperCase()) || null;

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
