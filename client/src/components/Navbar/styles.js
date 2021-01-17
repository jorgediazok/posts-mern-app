import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    [theme.breakpoints.down('sm')]: {
      padding: '5px 30px',
    },
  },
  heading: {
    color: '#115293',
    textDecoration: 'none',
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
      marginLeft: '-20px',
    },
  },
  image: {
    marginLeft: '15px',
    [theme.breakpoints.down('xs')]: {
      height: '30px',
      marginLeft: '5px',
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '180px',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
    },
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    },
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    [theme.breakpoints.down('xs')]: {
      height: '30px',
      width: '30px',
    },
  },
  logout: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '10px',
      maxWidth: '20px',
    },
  },
}));
