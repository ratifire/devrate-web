import { useSelector } from 'react-redux';
import {
  useGetMainMasteryBySpecializationIdQuery,
  useGetSpecializationByUserIdQuery,
} from '../../../../../redux/specialization/specializationApiSlice';
import { useGetMasteriesHistoryStatisticQuery } from '../../../../../redux/chart/chartApiSlice';

const useGetHistoryData = ({ from, to }) => {
  const { id: userId } = useSelector((state) => state.auth.user.data);
  const {
    data: specializations,
    isLoading: isLoadingSpecializations,
    isError: isErrorSpecializations,
  } = useGetSpecializationByUserIdQuery(userId);
  const specializationId = specializations?.[0]?.id;
  const {
    data: mainMastery,
    isLoading: isLoadingMainMastery,
    isError: isErrorMainMastery,
  } = useGetMainMasteryBySpecializationIdQuery(specializationId, { skip: !specializationId });
  const masteryId = mainMastery?.id;
  const {
    data: dataHistory,
    isLoading: isLoadingHistory,
    isError: isErrorHistory,
  } = useGetMasteriesHistoryStatisticQuery({ masteryId: masteryId, to, from }, { skip: !masteryId });

  const isLoading = isLoadingSpecializations || isLoadingHistory || isLoadingMainMastery;
  const isError = isErrorSpecializations || isErrorHistory || isErrorMainMastery;

  return {
    isLoading,
    isError,
    dataHistory,
  };
};

export default useGetHistoryData;
