import { emptyPersonalTabsPictures, emptyUserTabsPictures } from '../constants/emptyTabsPictures';

export const renderIcons = (activeTab, profileType) => {
  let Picture = null;

  if (profileType === 'personal') {
    switch (activeTab) {
      case 'workExperience':
        Picture = emptyPersonalTabsPictures.emptyWorkExperiencePic;
        break;
      case 'achievement':
        Picture = emptyPersonalTabsPictures.emptyAchievementPic;
        break;
      case 'skills':
        Picture = emptyPersonalTabsPictures.emptySkillsPic;
        break;
      case 'education':
        Picture = emptyPersonalTabsPictures.emptyEducationPic;
        break;
      default:
        Picture = null;
    }
  } else if (profileType === 'user') {
    switch (activeTab) {
      case 'workExperience':
        Picture = emptyUserTabsPictures.WorkExperienceUserPic;
        break;
      case 'achievement':
        Picture = emptyUserTabsPictures.AchievementUserPic;
        break;
      case 'skills':
        Picture = emptyUserTabsPictures.SkillsUserPic;
        break;
      case 'education':
        Picture = emptyUserTabsPictures.EducationUserPic;
        break;
      default:
        Picture = null;
    }
  }

  return { Picture };
};

