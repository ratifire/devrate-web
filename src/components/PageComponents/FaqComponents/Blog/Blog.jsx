import { Box, Typography } from '@mui/material';
import { styles } from './Blog.styles';
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { blogArr } from './blogArr';
import { checkScrollPadding } from '../../../../utils/helpers/checkScrollPadding';

const Blog = () => {
  const { t } = useTranslation();
  const listRef = useRef(null);
  
  useEffect(() => {
    checkScrollPadding(listRef.current, '16px');
  }, []);
  
  return (
    <Box sx={styles.wrapper}>
      <Typography variant="h6" sx={styles.title}>
        {t('faqText.blog')}
      </Typography>
      <Box sx={styles.list} ref={listRef} className="blog-list">
        {blogArr.map((blog) => (
          <Box sx={styles.card} key={blog.version}>
            <Typography variant="subtitle2" sx={styles.blogTitle}>
              {blog.title}
            </Typography>
            <Typography variant="caption1" sx={styles.blogData}>
              {blog.data}
              <span>
                {blog.version}
              </span>
            </Typography>
            <Typography variant="caption2" sx={styles.blogText}>
              {blog.text}
              <span>
                Читати далі...
              </span>
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Blog;