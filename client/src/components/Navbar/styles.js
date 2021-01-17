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
    [theme.breakpoints.down('xs')]: {
      padding: '5px 20px',
      display: 'flex',
      justifyContent: 'space-evenly',
    },
  },
  login: {
    marginRight: '-28px',
  },
  heading: {
    color: '#115293',
    textDecoration: 'none',
    [theme.breakpoints.down('xs')]: {
      fontSize: '26px',
      marginLeft: '15px',
    },
  },
  image: {
    marginLeft: '15px',
    [theme.breakpoints.down('xs')]: {
      height: '40px',
      marginLeft: '5px',
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '200px',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '130px',
      marginRight: '65px',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '65px',
    },
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    [theme.breakpoints.down('xs')]: {
      height: '30px',
      width: '30px',
      marginRight: '10px',
      marginTop: '4px',
    },
  },
  logout: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
    },
  },
}));
