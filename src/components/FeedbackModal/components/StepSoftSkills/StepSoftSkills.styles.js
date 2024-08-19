export const styles = {
  title: (theme) => ({
    fontSize: '20px',
    color: theme.palette.text.primary,
  }),
  container: {
    marginBottom: '-24px', // Костыль, компонент TextAreaInput не учитывает свою высоту. Или пусть будет так или переписать компонент
  }
};
