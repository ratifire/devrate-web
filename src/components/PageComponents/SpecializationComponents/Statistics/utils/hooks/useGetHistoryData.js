import { useSelector } from 'react-redux';
import { useGetMasteriesHistoryStatisticQuery } from '../../../../../../redux/chart/chartApiSlice';
import { useGetMasteriesBySpecializationIdQuery } from '../../../../../../redux/specialization/specializationApiSlice';
import { useGetSpecializationId } from '../../../../../../utils/hooks/specialization';

const useGetHistoryData = ({ from, to }) => {
  const activeMastery = useSelector((state) => state.activeMastery.activeMastery);
  const specializationId = useGetSpecializationId();
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

  const isLoading = isLoadingHistory || isLoadingMasteries;
  const isError = isErrorHistory || isErrorMasteries;

  return {
    isLoading,
    isError,
    dataHistory,
  };
};

export default useGetHistoryData;
