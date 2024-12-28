export const styles = {
  wrapper: () => ({
    display: 'flex',
    justifyContent: 'space-between',
    gridGap: '20px',
  }),
  info: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: theme.spacing(3),
    position: 'relative',
    zIndex: 10,
  }),
  skill: (theme) => ({
    flex: '0 1 max(679px)',
    paddingY: theme.spacing(3),
    paddingX: theme.spacing(4),
    backgroundColor: theme.palette.sliderAssessment.backgroundColor,
    border: theme.palette.sliderAssessment.border,
    borderRadius: 2,
  }),
  skillBg: (theme) => ({
    flex: '0 1 max(679px)',
    paddingY: theme.spacing(3),
    paddingX: theme.spacing(4),
    backgroundColor: theme.palette.sliderAssessment.backgroundColor2,
    border: theme.palette.sliderAssessment.border,
    borderRadius: 2,
    position: 'relative',
    ':before': {
      content: '""',
      borderRadius: 2,
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: theme.palette.sliderAssessment.backgroundColor2,
    },
  }),
  wrapperSearch: {
    flex: '0 1 max(333px)',
    height: '280px',
    position: 'relative',
  },
  search: {
    position: 'sticky',
    right: '0',
    top: '0',
    height: '100%',
    width: '100%',
  },
  wrapperSelect: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    gridGap: theme.spacing(2),
  }),
  star: (theme) => ({
    color: theme.palette.experienceSkillSect.star,
  }),
  select: (theme) => ({
    ' .MuiSelect-select.MuiSelect-standard.MuiInputBase-input.MuiInput-input': {
      paddingRight: '34px',
      paddingY: theme.spacing(0),
      fontSize: '20px',
      lineHeight: '32px',
      fontWeight: 500,
      letterSpacing: 0.15,
      backgroundColor: 'transparent',
    },
    ' div>svg': {
      display: 'none',
    },
    ':not(.Mui-disabled, .Mui-error):hover:before': {
      borderBottom: 'none',
    },
    ':not(.Mui-disabled, .Mui-error):before': {
      borderBottom: 'none',
    },
    ':after': {
      borderBottom: 'none',
    },
  }),
  selectPaper: (theme) => ({
    backgroundColor: theme.palette.modals.select.selectedField.backgroundColor,
    paddingX: theme.spacing(2),
    ' .MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.Mui-selected': {
      backgroundColor: theme.palette.modals.select.selectedField.selected.backgroundColor,
      ':hover': {
        backgroundColor: theme.palette.modals.select.selectedField.hover,
      },
    },
  }),
  selectItem: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14px',
    lineHeight: '22px',
    fontWeight: 500,
    letterSpacing: 0.1,
    color: theme.palette.modals.select.selectedField.selected.color,
    borderBottom: `1px solid ${theme.palette.neutral['600']}`,
    paddingY: '12px',
    paddingX: theme.spacing(2),
    ':last-of-type': {
      borderBottom: `1px solid transparent`,
    },
    ':hover': {
      backgroundColor: theme.palette.modals.select.selectedField.hover,
    },
  }),
  selectItemStar: (theme) => ({
    color: theme.palette.experienceSkillSect.star,
    fontSize: '14px',
  }),
  list: {
    overflowY: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    gridGap: '0 32px',
    maxHeight: '200px',
    paddingRight: '16px',
    '>div': {
      flex: '0 1 calc(50% - 16px)',
      maxWidth: '291px',
      width: '2vw',
      textWrap: 'nowrap',
      '>span': {
        display: 'inline-block',
        width: '100%',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
      },
    },
    '&::-webkit-scrollbar': {
      width: 6,
    },
    '&::-webkit-scrollbar-track': (theme) => ({
      backgroundColor: theme.palette.scroll.scrollWrapp.backgroundColor,
      borderRadius: 8,
    }),
    '&::-webkit-scrollbar-thumb': (theme) => ({
      borderRadius: 6,
      backgroundColor: theme.palette.scroll.scrollEl.backgroundColor,
    }),
  },
  text: (theme) => ({
    '&.Junior': {
      color: theme.palette.experienceSkillSect.text.junior,
    },
    '&.Middle': {
      color: theme.palette.experienceSkillSect.text.middle,
    },
    '&.Senior': {
      color: theme.palette.experienceSkillSect.text.senior,
    },
    '>span': {
      textTransform: 'lowercase',
      display: 'inline-block',
      '&:first-letter': {
        textTransform: 'uppercase',
      },
    },
  }),
  btnIcon: (theme) => ({
    position: 'absolute',
    bottom: '4px',
    right: '16px',
    borderRadius: 1,
    gridGap: theme.spacing(2),
    fontSize: '14px',
    padding: '7px 10px',
    color: theme.palette.iconBtn.search.color,
    ' svg': {
      color: theme.palette.iconBtn.search.svgColor,
    },
  }),
  textArea: (theme) => ({
    marginBottom: theme.spacing(0),
    width: '100%',
    height: '100%',
    padding: theme.spacing(0),
  }),
};
