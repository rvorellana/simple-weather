import { styled } from '@mui/system';
import Tabs from '@mui/material/Tabs';

const StyledTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.primary,
  },
  [theme.breakpoints.down('sm')]: {
    minHeight: '48px',
  },
}));

export default StyledTabs;
