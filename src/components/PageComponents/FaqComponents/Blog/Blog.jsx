import { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useScrollPadding } from '../../../../utils/helpers/useScrollPadding';
import { styles } from './Blog.styles';
import { blogArr } from './blogArr';

const Blog = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);

  useScrollPadding(containerRef, '16px');

  const renderBlogList = () => {
    return blogArr?.map((blog) => (
      <Box key={blog.id} sx={styles.card}>
        <Typography sx={styles.blogTitle} variant='subtitle2'>
          {t(blog.title)}
        </Typography>
        <Typography sx={styles.blogData} variant='caption1'>
          {blog.data}
          <span>{blog.version}</span>
        </Typography>
        <Typography sx={styles.blogText} variant='caption2'>
          {t(blog.text)}
          <button>{t('blogText.readNext')}</button>
        </Typography>
      </Box>
    ));
  };

  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.title} variant='h6'>
        {t('blogText.title')}
      </Typography>
      <Box ref={containerRef} sx={styles.list}>
        {renderBlogList()}
      </Box>
    </Box>
  );
};

export default Blog;
