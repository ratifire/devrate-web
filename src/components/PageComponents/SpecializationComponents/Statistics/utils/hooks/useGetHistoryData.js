import { useSelector } from 'react-redux';
import { useGetMasteriesHistoryStatisticQuery } from '../../../../../../redux/chart/chartApiSlice';
import { useGetMasteriesBySpecializationIdQuery } from '../../../../../../redux/specialization/specializationApiSlice';
import { useGetSpecializationId } from '../../../../../../utils/hooks/specialization';

const useGetHistoryData = ({ from, to }) => {
  const activeMastery = useSelector((state) => state.activeMastery.activeMastery);
  const specializationId = useGetSpecializationId();

  const {
    data: masteriesData,
    isFetching: isFetchingMasteries,
    isError: isErrorMasteries,
  } = useGetMasteriesBySpecializationIdQuery(specializationId, { skip: !specializationId });

  const masteries = specializationId ? masteriesData : [];

  const selectMastery = masteries?.find((v) => v?.level.toUpperCase() === activeMastery?.toUpperCase());

  const selectMasteryId = selectMastery?.id;

  const {
    data: historyData,
    isFetching: isFetchingHistory,
    isError: isErrorHistory,
  } = useGetMasteriesHistoryStatisticQuery({ selectMasteryId, to, from }, { skip: !selectMasteryId });

  const data = selectMasteryId ? historyData : [];

  const isFetching = isFetchingHistory || isFetchingMasteries;
  const isError = isErrorHistory || isErrorMasteries;

  return {
    isFetching,
    isError,
    data,
  };
};

export default useGetHistoryData;
