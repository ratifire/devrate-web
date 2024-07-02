import React, { useRef, useState } from 'react';
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

const LoadImages = ({ handleChange, handleBlur, handlerDelete, value }) => {
  const editor = useRef(null);

  const defaultSettingsCanvas = {
    borderRadius: 4,
    isTransparent: false,
    width: 240,
    height: 240,
    showGrid: true,
    image: '',
  };

  const [settingsCanvas, setSettingsCanvas] = useState({ ...defaultSettingsCanvas });
  const [scale, setScale] = useState(1.1);
  const [error, setError] = useState('');
  const { t } = useTranslation();

  const handleWheel = (e) => {
    const delta = e.deltaY;
    const scaleFactor = delta > 0 ? -0.1 : 0.1;
    const newScale = scale + scaleFactor;

    if (newScale >= 0.5 && newScale <= 3) {
      setScale(newScale);
    }
  };

  const handleSave = () => {
    const img = editor.current?.getImageScaledToCanvas().toDataURL();
    const rect = editor.current?.getCroppingRect();
    if (!img || !rect) return;
    handleChange(img);
  };

  const handleClickDelete = () => {
    handlerDelete();
    setSettingsCanvas(defaultSettingsCanvas);
  };

  const onDrop = (acceptedFiles, fileRejections) => {
    if (fileRejections.length > 0) {
      setError(t('This file can not be used as avatar'));
      return;
    }

    if (acceptedFiles.length > 0) {
      const image = acceptedFiles[0];
      setSettingsCanvas({ ...settingsCanvas, image });
      setError(''); // Clear any previous error
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': [],
    },
    maxSize: 200 * 1024, // 200 KB
    onDrop,
  });

  return (
    <Box sx={styles.wrapper}>
      <input type='hidden' value={value} onChange={handleChange} onBlur={handleBlur} />
      <Box {...getRootProps()} sx={styles.dropZoneWrapper}>
        <input {...getInputProps()} />
        <Box sx={styles.dropZone}>
          <Typography variant='caption1' sx={styles.text}>
            {t('profile.modal.userInfo.photo.dropPhoto.first')}
            <br />
            {t('profile.modal.userInfo.photo.dropPhoto.second')}
            <span>{t('profile.modal.userInfo.photo.dropPhoto.third')}</span>
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
          width={settingsCanvas.width}
          height={settingsCanvas.height}
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
        <IconButton sx={styles.btnIcon} onClick={handleClickDelete} aria-label='Delete user Avatar'>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

LoadImages.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handlerDelete: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default LoadImages;
