import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { Box, IconButton, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import { ButtonDef } from '../../FormsComponents/Buttons';
import { styles } from './LoadImages.styles';

const LoadImages = ({ handleChange, handleBlur, handlerDelete, value, isDisabled, onChange }) => {
  const editor = useRef(null);
  const { t } = useTranslation();

  const [settingsCanvas, setSettingsCanvas] = useState({
    borderRadius: 4,
    isTransparent: false,
    width: 240,
    height: 240,
    showGrid: true,
    image: value || '',
  });
  const [scale, setScale] = useState(1.5);
  const [error, setError] = useState('');

  const handleWheel = (e) => {
    const delta = e.deltaY;
    const scaleFactor = delta > 0 ? -0.1 : 0.1;
    const newScale = Math.max(0.5, Math.min(3, scale + scaleFactor));
    setScale(newScale);
  };

  const handleSave = () => {
    if (editor.current) {
      const img = editor.current.getImageScaledToCanvas().toDataURL();
      handleChange(img);
    }
  };

  const handleClickDelete = () => {
    handlerDelete();
    setSettingsCanvas((prev) => ({ ...prev, image: '' }));
  };

  const checkImageDimensions = (file) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        if (img.width < 98 || img.height < 98) {
          reject(new Error('Image dimensions must be at least 98x98 pixels'));
        } else {
          resolve();
        }
      };
      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = URL.createObjectURL(file);
    });
  };

  const onDrop = async (acceptedFiles, fileRejections) => {
    if (fileRejections.length > 0) {
      setError(t('This file can not be used as avatar'));
      return;
    }

    if (acceptedFiles.length > 0) {
      const image = acceptedFiles[0];
      try {
        await checkImageDimensions(image);
        setSettingsCanvas((prev) => ({ ...prev, image }));
        setError('');
        handleChange(image);
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/tiff': [],
      'image/webp': [],
    },
    maxSize: 5 * 1024 * 1024,
    onDrop,
  });

  const handleChangeImg = () => {
    const img = editor.current.getImageScaledToCanvas().toDataURL();
    onChange(img);
  };

  return (
    <Box sx={styles.wrapper}>
      <input type='hidden' value={value} onBlur={handleBlur} onChange={handleChange} />
      <Box sx={styles.dropZoneWrapper} {...getRootProps()}>
        <input {...getInputProps()} />
        <Box sx={styles.dropZone}>
          <Typography sx={styles.text} variant='caption1'>
            {t('profile.modal.userInfo.photo.dropPhoto.first')}
            <br />
            {t('profile.modal.userInfo.photo.dropPhoto.second')}
            <Box sx={styles.link}>{t('profile.modal.userInfo.photo.dropPhoto.third')}</Box>
          </Typography>
          <BackupOutlinedIcon sx={styles.icon} />
          {error && (
            <Typography color='error' sx={styles.error}>
              {error}
            </Typography>
          )}
        </Box>
      </Box>
      <Box sx={styles.boxAvatarEditor}>
        {settingsCanvas.image && (
          <>
            <AvatarEditor
              ref={editor}
              border={50}
              borderRadius={settingsCanvas.borderRadius}
              color={[29, 29, 29, 0.25]}
              height={240}
              image={settingsCanvas.image}
              scale={scale}
              style={styles.preview}
              width={240}
              onImageChange={handleChangeImg}
              onWheel={handleWheel}
            />
            <Box sx={styles.customBorder} />
          </>
        )}
        {!settingsCanvas.image && (
          <Box sx={styles.imgDef}>
            <ImageOutlinedIcon sx={styles.imgDefIcon} />
          </Box>
        )}
      </Box>
      <Box sx={styles.wrapperBtn}>
        <ButtonDef
          correctStyle={styles.btn}
          disabled={isDisabled || !settingsCanvas.image || !!error}
          handlerClick={handleSave}
          label='profile.modal.btn'
          type='submit'
          variant='contained'
        />
        {value && (
          <IconButton aria-label='Delete user Avatar' sx={styles.btnIcon} onClick={handleClickDelete}>
            <DeleteIcon />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

LoadImages.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handlerDelete: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default React.memo(LoadImages);
