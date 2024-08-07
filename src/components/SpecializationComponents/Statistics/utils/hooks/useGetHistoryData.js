import { useSelector } from 'react-redux';
import { useGetMasteriesHistoryStatisticQuery } from '../../../../../redux/chart/chartApiSlice';
import {
  useGetMainMasteryBySpecializationIdQuery,
  useGetSpecializationByUserIdQuery,
} from '../../../../../redux/specialization/specializationApiSlice';

const useGetHistoryData = ({ from, to }) => {
  const { id: userId } = useSelector((state) => state.auth.user.data);
  const {
    data: specializations,
    isLoading: isLoadingSpecializations,
    isError: isErrorSpecializations,
  } = useGetSpecializationByUserIdQuery(userId, { skip: !userId });
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
  } = useGetMasteriesHistoryStatisticQuery({ masteryId, to, from }, { skip: !masteryId });

  const isLoading = isLoadingSpecializations || isLoadingHistory || isLoadingMainMastery;
  const isError = isErrorSpecializations || isErrorHistory || isErrorMainMastery;

  return {
    isLoading,
    isError,
    dataHistory,
  };
};

export default useGetHistoryData;
