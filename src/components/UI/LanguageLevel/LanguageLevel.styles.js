export const styles = {
  wrapper: (theme) => ({
    backgroundColor: theme.palette.rightSection.languages.level.backgroundColor,
    padding: theme.spacing(1),
    border: `1px solid ${theme.palette.rightSection.languages.border.borderColor}`,
    borderRadius: 4,
    display: 'flex',

  }),
  language: (theme) => ({
    backgroundColor:  theme.palette.rightSection.languages.type.backgroundColor,
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '12px',
    color: theme.palette.rightSection.languages.type.color,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '24px',
    height: '24px',
    textTransform: 'uppercase',
  }),
  level: (theme) => ({
    lineHeight: '18px',
    color: theme.palette.rightSection.languages.level.color,
    padding: '3px 6px',
  }),
  icon: (theme) => ({
    color: theme.palette.rightSection.languages.modalDeleteIcon.color,
    padding: theme.spacing(0),
    borderColor: `1px solid ${theme.palette.rightSection.languages.border.borderColor}`,
  }),
};
