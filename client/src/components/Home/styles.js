import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column-reverse',
    },
  },
}));
