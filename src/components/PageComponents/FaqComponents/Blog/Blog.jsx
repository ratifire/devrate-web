import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { styles } from './Blog.styles';
import { useTranslation } from 'react-i18next';
import { blogArr } from './blogArr';
import { useScrollPadding } from '../../../../utils/helpers/useScrollPadding';

const Blog = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);

  useScrollPadding(containerRef, '16px');

  const renderBlogList = () => {
    return blogArr?.map((blog) => (
      <Box sx={styles.card} key={blog.version}>
        <Typography variant='subtitle2' sx={styles.blogTitle}>
          {t(blog.title)}
        </Typography>
        <Typography variant='caption1' sx={styles.blogData}>
          {blog.data}
          <span>{blog.version}</span>
        </Typography>
        <Typography variant='caption2' sx={styles.blogText}>
          {t(blog.text)}
          <span>{t('blogText.readNext')}</span>
        </Typography>
      </Box>
    ));
  };

  return (
    <Box sx={styles.wrapper}>
      <Typography variant='h6' sx={styles.title}>
        {t('blogText.title')}
      </Typography>
      <Box sx={styles.list} ref={containerRef} className='blog-list'>
        {renderBlogList()}
      </Box>
    </Box>
  );
};

export default Blog;
