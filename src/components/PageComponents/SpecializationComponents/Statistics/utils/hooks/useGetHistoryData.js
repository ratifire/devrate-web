import { useSelector } from 'react-redux';
import { useGetMasteriesHistoryStatisticQuery } from '../../../../../../redux/chart/chartApiSlice';
import {
  useGetMasteriesBySpecializationIdQuery,
} from '../../../../../../redux/specialization/specializationApiSlice';

const useGetHistoryData = ({ from, to }) => {
  const activeMastery = useSelector((state) => state.activeMastery.activeMastery);
  // ToDo: Вынести это в отдельный хук
  const activeSpecialization = useSelector((state) => state.specialization.activeSpecialization);
  const mainSpecialization = useSelector((state) => state.specialization.mainSpecialization);
  const specializationId =  activeSpecialization?.id || mainSpecialization?.id;

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
