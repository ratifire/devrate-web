import { useSelector } from 'react-redux';
import { useGetMasteriesHistoryStatisticQuery } from '../../../../../redux/chart/chartApiSlice';
import {
  useGetMasteriesBySpecializationIdQuery,
  useGetSpecializationByUserIdQuery,
} from '../../../../../redux/specialization/specializationApiSlice';

const useGetHistoryData = ({ from, to }) => {
  const { id: userId } = useSelector((state) => state.auth.user.data);
  const activeMastery = useSelector((state) => state.activeMastery.activeMastery);

  const {
    data: specializations,
    isLoading: isLoadingSpecializations,
    isError: isErrorSpecializations,
  } = useGetSpecializationByUserIdQuery(userId, { skip: !userId });

  const specializationId = specializations?.[0]?.id;

  const {
    data: masteries,
    isLoading: isLoadingMasteries,
    isError: isErrorMasteries,
  } = useGetMasteriesBySpecializationIdQuery(specializationId, { skip: !specializationId });

  const selectMastery = masteries?.find(
    (mastery) => mastery.level && mastery.level.toUpperCase() === activeMastery.toUpperCase()
  );

  const selectMasteryId = selectMastery?.id;

  const {
    data: dataHistory,
    isLoading: isLoadingHistory,
    isError: isErrorHistory,
  } = useGetMasteriesHistoryStatisticQuery({ selectMasteryId, to, from }, { skip: !selectMasteryId });

  const isLoading = isLoadingSpecializations || isLoadingHistory || isLoadingMasteries;
  const isError = isErrorSpecializations || isErrorHistory || isErrorMasteries;

  return {
    isLoading,
    isError,
    dataHistory,
  };
};

export default useGetHistoryData;
