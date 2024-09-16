import { useSelector } from 'react-redux';
import { useGetSpecializationId } from './index';
import { useGetMasteriesBySpecializationIdQuery } from '../../../redux/specialization/specializationApiSlice';

const useGetMastery = () => {
  const activeMastery = useSelector((state) => state.activeMastery.activeMastery);
  const { id: userId } = useSelector((state) => state.auth.user.data);
  const specializationId =  useGetSpecializationId();

  const {
    data: masteries,
    isLoading: isLoadingMasteries,
    isError: isErrorMasteries,
  } = useGetMasteriesBySpecializationIdQuery(specializationId, { skip: !specializationId });

  const selectMastery = masteries?.find(
    (mastery) => mastery.level && mastery.level.toUpperCase() === activeMastery.toUpperCase()
  );

  const masteryId = selectMastery?.id;

  const isLoading = isLoadingMasteries;
  const isError = isErrorMasteries;

  return {
    isLoading,
    isError,
    masteryId,
    userId,
    activeMastery,
  };
};

export default useGetMastery;
