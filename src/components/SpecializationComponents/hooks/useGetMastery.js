import { useSelector } from 'react-redux';
import {
  useGetMasteriesBySpecializationIdQuery,
  useGetSpecializationByUserIdQuery,
} from '../../../redux/specialization/specializationApiSlice';

const useGetMastery = () => {
  const activeMastery = useSelector((state) => state.activeMastery.activeMastery);
  const { id: userId } = useSelector((state) => state.auth.user.data);

  const {
    data: specializations,
    isLoading: isLoadingSpecializations,
    isError: isErrorLoadingSpecializations,
  } = useGetSpecializationByUserIdQuery(userId, {
    skip: !userId,
  });

  const specializationId = specializations?.[0]?.id;

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

  const isLoading = isLoadingSpecializations || isLoadingMasteries;
  const isError = isErrorLoadingSpecializations || isErrorMasteries;

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
