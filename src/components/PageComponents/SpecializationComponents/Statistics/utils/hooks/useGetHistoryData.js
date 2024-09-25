import { useSelector } from 'react-redux';
import { useGetMasteriesHistoryStatisticQuery } from '../../../../../../redux/chart/chartApiSlice';
import { useGetMasteriesBySpecializationIdQuery } from '../../../../../../redux/specialization/specializationApiSlice';
import { useGetSpecializationId } from '../../../../../../utils/hooks/specialization';

const useGetHistoryData = ({ from, to }) => {
  const activeMastery = useSelector((state) => state.activeMastery.activeMastery);
  const specializationId = useGetSpecializationId();
  const {
    data: masteries,
    isFetching: isFetchingMasteries,
    isError: isErrorMasteries,
  } = useGetMasteriesBySpecializationIdQuery(specializationId, { skip: !specializationId });

  const selectMastery = masteries?.find(
    (v) => v.level && v.level.toUpperCase() === activeMastery.toUpperCase()
  );

  const selectMasteryId = selectMastery?.id;

  const {
    data: dataHistory,
    isFetching: isFetchingHistory,
    isError: isErrorHistory,
  } = useGetMasteriesHistoryStatisticQuery({ selectMasteryId, to, from }, { skip: !selectMasteryId });

  const isFetching = isFetchingHistory || isFetchingMasteries;
  const isError = isErrorHistory || isErrorMasteries;

  return {
    isFetching,
    isError,
    dataHistory,
  };
};

export default useGetHistoryData;
