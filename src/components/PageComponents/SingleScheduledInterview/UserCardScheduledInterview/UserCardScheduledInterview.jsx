import { useTranslation } from 'react-i18next';
import { UserCard } from '../../../UI/Interview';

const UserCardScheduledInterview = () => {
  const { t } = useTranslation();

  return (
    <UserCard
      isViewBtn
      data='03/06/2023'
      firstName='Олена'
      label={t('singleScheduledInterview.userCardScheduledInterview.btn')}
      lastName='Король'
      lvl='Middle'
      role='Middle PHP Developer'
      src=''
      time='15:30'
    />
  );
};

export default UserCardScheduledInterview;
