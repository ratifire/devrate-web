import React, { useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import Dropzone from 'react-dropzone';
import { styles } from './LoadImages.styles';
import { Box, Typography } from '@mui/material';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

const LoadImages = () => {
  const editor = useRef(null);
  const [state] = useState({
    borderRadius: 4,
    preview: undefined,
    width: 240,
    height: 240,
  });

  const [image, setImage] = useState(null);

  const [scale, setScale] = useState(1);

  const handleWheel = (e) => {
    const delta = e.deltaY;
    const scaleFactor = delta > 0 ? -0.1 : 0.1;
    const newScale = scale + scaleFactor;

    if (newScale >= 0.5 && newScale <= 3) {
      setScale(newScale);
    }
  };
  // const handleSave = () => {
  //   const img = editor.current?.getImageScaledToCanvas().toDataURL();
  //   const rect = editor.current?.getCroppingRect();
  //   if (!img || !rect) return;
  //   setState({
  //     ...state,
  //     preview: {
  //       img,
  //       rect,
  //       scale: state.scale,
  //       width: state.width,
  //       height: state.height,
  //       borderRadius: state.borderRadius,
  //     },
  //   });
  // };
  return (
    <Box sx={styles.wrapper}>
      <Dropzone
        onDrop={(dropped) => setImage(dropped[0])}
        onClick={true}
        noKeyboard
        style={{ width: '334px', height: '334px' }}
      >
        {({ getRootProps, getInputProps }) => (
          <Box sx={styles.dropZone} {...getRootProps()}>
            <input {...getInputProps()} />
            <Typography variant='caption1' sx={styles.text}>
              Drop photo here <br />
              or <span> download from your device</span>
            </Typography>
            <BackupOutlinedIcon sx={styles.icon} />
          </Box>
        )}
      </Dropzone>
      <>
        {image ? (
          <AvatarEditor
            ref={editor}
            width={state.width}
            height={state.height}
            borderRadius={state.borderRadius}
            image={image}
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

export default LoadImages;
