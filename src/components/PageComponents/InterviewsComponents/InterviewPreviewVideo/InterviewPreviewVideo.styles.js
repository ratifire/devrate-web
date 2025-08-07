import videoChatBgLight from '@assets/pictures/interviewPreviewVideo/videoChatBgLight.webp';
import interviewPreviewMascot from '@assets/pictures/interviewPreviewVideo/interviewPreviewMascot.svg';

export const styles = {
  label: (theme) => ({
    lineHeight: '1.5',
    color: theme.palette.interviewPreviewVideo.color,
    '&:not(:last-child)': {
      marginBottom: theme.spacing(1),
    },
  }),

  content: (theme) => ({
    width: '100%',
    borderRadius: 1,
    boxShadow: '0 0 0 1px #1D1D1D',
    aspectRatio: '16/9',
    position: 'relative',
    padding: theme.spacing(3),
    height: '100%',
    background: `url(${videoChatBgLight})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    '&::before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: '156px',
      height: '179px',
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${interviewPreviewMascot})`,
    },
  }),
  wrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
    gridGap: '16px',
  },
  info: (theme) => ({
    position: 'relative',
    paddingLeft: theme.spacing(3),
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '5px',
      height: '100%',
      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg width='4' height='104' viewBox='0 0 4 104' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 68.9383C3.99462 70.355 3.92475 75.3731 3.93549 78.5905C3.96237 86.0345 3.94625 93.4809 3.54852 100.906C3.48403 102.068 3.47865 104.039 2.25859 103.999C0.995538 103.957 0.259203 102.637 0.307575 100.613C0.431193 95.7148 0.732176 90.7903 0.517188 85.9151C0.205456 78.7848 0.393573 71.6639 0.334451 64.5407C0.286079 58.1434 0.361327 51.7461 0.302206 45.3488C0.248459 39.3402 -0.0202747 33.3339 0.00122452 27.3277C0.017349 22.1433 0.339831 16.9613 0.463449 11.777C0.490323 10.557 0.269957 9.08643 0.291456 7.74937C0.30758 6.64178 0.323709 4.79658 0.431203 3.7007C0.479575 3.2277 0.538697 2.73595 0.490325 2.27231C0.286087 0.141437 0.726806 -0.420552 2.11348 0.293643C2.41983 0.450531 2.81757 0.270226 3.02718 0.785383C3.03793 0.806457 3.05405 0.848607 3.0648 0.869681C3.90325 2.43154 3.5109 4.03321 3.52702 5.64659C3.60764 13.566 3.60765 21.4877 3.6399 29.407C3.65602 34.2659 3.59689 39.1318 3.75276 43.9836C3.79576 45.3113 3.97312 46.6414 3.86563 47.9878L3.86563 47.9644C3.90863 49.3717 3.98387 50.779 3.97849 52.184C3.957 57.5065 4.05912 63.0632 3.94088 68.1679C3.94625 68.3716 4 68.6433 4 68.9383Z' fill='%23EE7538'/%3e%3c/svg%3e ")`,
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
    },
  }),
  playButton: (theme) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60px',
    height: '60px',
    backgroundColor: theme.palette.interviewPreviewVideo.playButton.backgroundColor,
    borderRadius: '100px',
    padding: 0,
    '&:hover': {
      background: theme.palette.interviewPreviewVideo.playButton.hover.backgroundColor,
    },
  }),
  userIcon: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(3),
    '& .MuiAvatar-root': {
      width: '70px',
      height: '70px',
    },
  }),
};
