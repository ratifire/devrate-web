import React from 'react';
import PropTypes from 'prop-types';

const YoutubeEmbed = ({ link, title }) => {
  return (
    <iframe
      allowFullScreen
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      height='100%'
      src={link}
      style={{ border: 'none' }}
      title={title}
      width='100%'
    />
  );
};

YoutubeEmbed.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
};

export default YoutubeEmbed;
