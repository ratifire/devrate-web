export const styles = {
  Sidebar: {
    width: '325px',
    lineHeight: '1.5',
    background: '#3E3E40',
    borderRight: '1px solid #d3e2e8',
    borderTopLeftRadius: '8px',
    borderBottomLeftRadius: '8px',
  },
  SidebarSection: {
    marginLeft: '8px',
    marginRight: '8px',
    height: '500px',
    overflow: 'scroll',
    scrollbarColor: 'white',
  },
  sideBarEventWrapper: (theme) => ({
    backgroundColor: theme.palette.neutral[600],
    borderRadius: 2,
  }),
};
