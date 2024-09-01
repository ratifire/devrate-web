import React, { useState } from 'react';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import { styles } from './Bookmark.style';
import { useTheme } from '@mui/material/styles';

const Bookmark = ({ isBookmarked = false, onToggle }) => {
  const [bookmarked, setBookmarked] = useState(isBookmarked);
  const theme = useTheme();
  const classes = styles(theme);

  const handleClick = () => {
    const newValue = !bookmarked;
    setBookmarked(newValue);
    if (onToggle) {
      onToggle(newValue);
    }
  };

  return (
    <IconButton
      style={classes.iconButton}
      onClick={handleClick}
      aria-label="bookmark"
    >
      {bookmarked ? (
        <BookmarkIcon style={classes.bookmarkIcon} />
      ) : (
        <BookmarkBorderIcon style={classes.bookmarkIcon} />
      )}
    </IconButton>
  );
};

Bookmark.propTypes = {
  isBookmarked: PropTypes.bool,
  onToggle: PropTypes.func,
};

export default Bookmark;
