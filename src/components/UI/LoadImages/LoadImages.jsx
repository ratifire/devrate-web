import React, { useRef, useState, useEffect, useCallback } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { useDropzone } from 'react-dropzone';
import { styles } from './LoadImages.styles';
import { Box, IconButton, Typography } from '@mui/material';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { ButtonDef } from '../../Buttons';
import DeleteIcon from '@mui/icons-material/Delete';

const LoadImages = ({ handleChange, handleBlur, handlerDelete, value, showDeleteButton }) => {
  const editor = useRef(null);
  const { t } = useTranslation();

  const [settingsCanvas, setSettingsCanvas] = useState({
    borderRadius: 4,
    isTransparent: false,
    width: 240,
    height: 240,
    showGrid: true,
    image: '',
  });
  const [scale, setScale] = useState(1.1);
  const [error, setError] = useState('');

  useEffect(() => {
    if (value) {
      setSettingsCanvas(prev => ({ ...prev, image: value }));
    }
  }, [value]);

  const handleWheel = useCallback((e) => {
    const delta = e.deltaY;
    const scaleFactor = delta > 0 ? -0.1 : 0.1;
    const newScale = Math.max(0.5, Math.min(3, scale + scaleFactor));
    setScale(newScale);
  }, [scale]);

  const handleSave = useCallback(() => {
    if (editor.current) {
      const img = editor.current.getImageScaledToCanvas().toDataURL();
      handleChange(img);
    }
  }, [handleChange]);

  const handleClickDelete = useCallback(() => {
    handlerDelete();
    setSettingsCanvas(prev => ({ ...prev, image: '' }));
  }, [handlerDelete]);

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

  const onDrop = useCallback(async (acceptedFiles, fileRejections) => {
    if (fileRejections.length > 0) {
      setError(t('This file can not be used as avatar'));
      return;
    }

    if (acceptedFiles.length > 0) {
      const image = acceptedFiles[0];
      try {
        await checkImageDimensions(image);
        setSettingsCanvas(prev => ({ ...prev, image }));
        setError('');
      } catch (err) {
        setError(err.message);
      }
    }
  }, [t]);

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

  return (
    <Box sx={styles.wrapper}>
      <input type='hidden' value={value} onChange={handleChange} onBlur={handleBlur} />
      <Box sx={styles.dropZoneWrapper}>
        <input {...getInputProps()} />
        <Box sx={styles.dropZone}>
          <Typography variant='caption1' sx={styles.text}>
            {t('profile.modal.userInfo.photo.dropPhoto.first')}
            <br />
            {t('profile.modal.userInfo.photo.dropPhoto.second')}
            <Box {...getRootProps()} sx={styles.link}>
              {t('profile.modal.userInfo.photo.dropPhoto.third')}
            </Box>
          </Typography>
          <BackupOutlinedIcon sx={styles.icon} />
          {error && (
            <Typography color='error' sx={styles.error}>
              {error}
            </Typography>
          )}
        </Box>
      </Box>

      {settingsCanvas.image ? (
        <AvatarEditor
          ref={editor}
          width={240}
          height={240}
          borderRadius={settingsCanvas.borderRadius}
          image={settingsCanvas.image}
          style={styles.preview}
          border={50}
          color={[29, 29, 29, 0.25]}
          scale={scale}
          onWheel={handleWheel}
        />
      ) : (
        <Box sx={styles.imgDef}>
          <ImageOutlinedIcon sx={styles.imgDefIcon} />
        </Box>
      )}

      <Box sx={styles.wrapperBtn}>
        <ButtonDef
          variant='contained'
          type='submit'
          handlerClick={handleSave}
          label='profile.modal.btn'
          correctStyle={styles.btn}
        />
        {showDeleteButton && (
          <IconButton sx={styles.btnIcon} onClick={handleClickDelete} aria-label='Delete user Avatar'>
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
  showDeleteButton: PropTypes.bool.isRequired,
};

export default React.memo(LoadImages);