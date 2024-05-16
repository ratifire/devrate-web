import React, { useEffect, useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import Dropzone from 'react-dropzone';
import { styles } from './LoadImages.styles';
import { Box, Typography } from '@mui/material';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const LoadImages = ({ getImg, imgData }) => {
  const editor = useRef(null);

  const defaultSettingsCanvas = {
    image: imgData,
    borderRadius: 4,
    isTransparent: false,
    width: 240,
    height: 240,
    showGrid: true,
  };
  const [settingsCanvas, setSettingsCanvas] = useState({ ...defaultSettingsCanvas });
  const [scale, setScale] = useState(1.2);
  const { t } = useTranslation();
  console.log(editor, '1111111111111');
  const handleWheel = (e) => {
    e.preventDefault();
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
    console.log(img, 'q2222222222222222222');
    setSettingsCanvas({
      ...settingsCanvas,
      img,
      rect,
      scale: scale,
    });
    getImg(settingsCanvas);
  };
  useEffect(() => {
    handleSave();
    console.log(settingsCanvas);
  }, [settingsCanvas.image, editor.current]);
  return (
    <Box sx={styles.wrapper}>
      <Dropzone
        onDrop={([image]) => setSettingsCanvas({ ...settingsCanvas, image })}
        onClick={true}
        noKeyboard
        style={styles.dropZoneWrapper}
      >
        {({ getRootProps, getInputProps }) => (
          <Box sx={styles.dropZone} {...getRootProps()}>
            <input {...getInputProps()} />
            <Typography variant='caption1' sx={styles.text}>
              {t('profile.modal.userInfo.photo.dropPhoto.first')}
              <br />
              {t('profile.modal.userInfo.photo.dropPhoto.second')}
              <span>{t('profile.modal.userInfo.photo.dropPhoto.third')}</span>
            </Typography>
            <BackupOutlinedIcon sx={styles.icon} />
          </Box>
        )}
      </Dropzone>
      <>
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
      </>
    </Box>
  );
};
LoadImages.propTypes = {
  getImg: PropTypes.func.isRequired,
  imgData: PropTypes.any,
};
export default LoadImages;
