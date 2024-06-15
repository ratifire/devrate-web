import React from 'react';
import PropTypes from 'prop-types';

const YoutubeEmbed = ({ link, title }) => {
  return (
    <iframe
      width='100%'
      height='100%'
      src={link}
      title={title}
      style={{ border: 'none' }}
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowFullScreen
    ></iframe>
  );
};

YoutubeEmbed.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
};

export default YoutubeEmbed;
