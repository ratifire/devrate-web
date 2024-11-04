export const styles = {
  wrapper: (theme) => ({
    width: '100%',
    padding: theme.spacing(4),
    paddingBottom: theme.spacing(0),
  }),
  title: (theme) => ({
    marginBottom: theme.spacing(4),
    color: theme.palette.faq.blog.title,
  }),
  list: (theme) => ({
    maxHeight: '586px',
    height: '100%',
    overflowY: 'auto',

    '&::-webkit-scrollbar': {
      paddingRight: theme.spacing(3),
      width: 10,
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: theme.palette.scroll.scrollWrapp.backgroundColor,
      borderRadius: 8,
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 6,
      backgroundColor: theme.palette.scroll.scrollEl.backgroundColor,
    },
  }),
  card: (theme) => ({
    width: '100%',
    padding: theme.spacing(3),
    borderRadius: 1,
    marginBottom: '20px',
    backgroundColor: theme.palette.faq.blog.blogItem.backgroundColor,
    boxShadow: `inset 0 0 0 1px ${theme.palette.faq.blog.blogItem.boxShadow}`,
  }),
  blogTitle: (theme) => ({
    color: theme.palette.faq.blog.blogItem.title,
    marginBottom: theme.spacing(1),
    lineHeight: '22px',
  }),
  blogData: (theme) => ({
    color: theme.palette.faq.blog.blogItem.data,
    '>span': {
      color: theme.palette.faq.blog.blogItem.version,
      fontWeight: 400,
      marginLeft: theme.spacing(1),
    },
  }),
  blogText: (theme) => ({
    color: theme.palette.faq.blog.blogItem.text,
    display: 'block',
    fontWeight: 400,
    marginTop: theme.spacing(2),
    '>span': {
      marginLeft: theme.spacing(1),
      color: theme.palette.faq.blog.blogItem.btn,
      cursor: 'pointer',
    },
  }),
};
