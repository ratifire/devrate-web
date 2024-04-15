const styles = {
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingY: 12,
    paddingX: 24,
    marginBottom: 24,
    width: '100%',
    backgroundColor: '#303032',
  },
  toolbar: {
    justifyContent: 'space between',
  },
  logoBox: {
    flexGrow: 1,
    lineHeight: 0,
  },
  headerNav: {
    display: { xs: 'none', md: 'flex' },
    alignItems: 'center',
    gap: 30,
  },
  userPhoto: {
    width: 44,
    height: 44,
  },
};
export default styles;
