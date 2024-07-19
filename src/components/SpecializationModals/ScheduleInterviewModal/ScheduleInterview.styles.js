export const styles = {
  title: (theme) => ({
    color: theme.palette.text.primary,
    paddingRight: '38px',
    ':first-letter': {
      textTransform: 'uppercase',
    },
  }),
  timeGrid: (theme) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(3),
  }),
  tabsRow: (theme) => ({
    display: 'flex',
    width: '100%',

    '& .MuiTabs-flexContainer': {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      borderBottom: '1px solid ' + theme.palette.neutral[400],
    }
  }),
  action: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    gap: theme.spacing(3),
    alignItems: 'center',
  }),
  checkboxes: (theme) => ({
    display: 'flex',
    width: 'fit-content',
    gap: theme.spacing(3),
    alignItems: 'center',

    '& .MuiFormControlLabel-root': {
      margin: 0
    }
  }),
  weekHeading: (theme) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(3),
    width: '100%',
    alignItems: 'center',

    '& .MuiSvgIcon-root': {
      fill: theme.palette.neutral[100],
    }
  }),
  texts: (theme) => ({
    display: 'flex',
    width: '100%',
    gap: theme.spacing(3),
    justifyContent: 'space-between',
  }),
  tab: (theme) => ({
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '32px',
    letterSpacing: '0.15ox',
    color: theme.palette.neutral[100],
    textTransform: 'none',
  }),
  wrapper: (theme) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gridGap: `${theme.spacing(4)} ${theme.spacing(3)}`,
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(4),
  }),
  input50: (theme) => ({
    flex: `0 1 calc(50% - ${theme.spacing(2)})`,
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary[600],
      },
      'fieldset': {
        borderColor: theme.palette.neutral[500],
      },
    },
  }),
  input100: (theme) => ({
    flex: `0 1 100%`,
    display: 'flex',
    alignItems: 'flex-start',
    gridGap: theme.spacing(3),
  }),
  timeWrapper: (theme) => ({
    display: 'flex',
    gap: theme.spacing(3),
    width: `calc(50% - ${theme.spacing(2)})`,
  }),
  input25: (theme) => ({
    flex: `0 1 25%`,
    display: 'flex',
    alignItems: 'flex-start',
    gridGap: theme.spacing(3),
  }),
  iconBtn: (theme) => ({
    marginTop: theme.spacing(1),
    padding: '12px',
    borderRadius: 1,
    color: theme.palette.primary[200],
  }),
  responsibility: (theme) => ({
    flex: `0 1 100%`,
    display: 'flex',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gridGap: theme.spacing(3),
  }),
  workExperienceBtn: {
    width: '228px',
  }
};
