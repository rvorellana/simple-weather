import { styled } from '@mui/system';
import Tab from '@mui/material/Tab';

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 'bold',
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color: '#B0B0B0',
  borderBottom: `2px solid transparent`,
  '&.Mui-selected': {
    color: '#000000',
    fontWeight: 'bold',
    borderBottom: `2px solid orange`,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.pxToRem(12),
    minHeight: '48px',
  },
}));

export default StyledTab;
