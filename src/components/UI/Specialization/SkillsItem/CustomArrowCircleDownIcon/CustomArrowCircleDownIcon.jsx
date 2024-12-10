import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { SvgIcon } from '@mui/material';
import { useArrowTheme } from '../hooks';

const CustomArrowCircleDownIcon = (props) => {
  const { arrowDownIcon, iconCircle } = useArrowTheme();

  return (
    <SvgIcon {...props}>
      <circle cx='12' cy='12' r='12' style={iconCircle} />
      <g transform='translate(4, 4) scale(0.65)'>
        <ArrowDownwardIcon style={arrowDownIcon} />
      </g>
    </SvgIcon>
  );
};

export default CustomArrowCircleDownIcon;
