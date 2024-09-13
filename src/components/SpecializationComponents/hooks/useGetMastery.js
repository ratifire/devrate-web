import { useSelector } from 'react-redux';
import {
  useGetMasteriesBySpecializationIdQuery,
} from '../../../redux/specialization/specializationApiSlice';
import { useGetSpecializationId } from './index';

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

  const selectMasteryIndex = masteries?.findIndex(
    (mastery) => mastery.level && mastery.level.toUpperCase() === activeMastery.toUpperCase()
  );

  const nextMasteryLevel = masteries?.[selectMasteryIndex + 1]?.level || 'Guru';

  const masteryId = selectMastery?.id;

  const isLoading = isLoadingMasteries;
  const isError = isErrorMasteries;

  return {
    isLoading,
    isError,
    masteryId,
    nextMasteryLevel,
    userId,
    activeMastery,
  };
};

export default useGetMastery;
