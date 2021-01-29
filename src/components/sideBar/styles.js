import { makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return createStyles({

    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: theme.spacing(30),
      height: '100%',
      justifyContent: 'space-between',
    },
    title: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: theme.spacing(9.5),
      justifyContent: 'center',
    },
    tab: {
      '&:hover': {
        color: 'white',
        background: theme.palette.primary.main,
      },
    },
    tabContent: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    labelContainer: {
      display: 'flex',
      alignItems: 'center',
      textTransform: 'none',
    },
    iconContainer: {
      fontSize: 'small',
      margin: theme.spacing(1),
      height: theme.spacing(3)
    },
    drawerPaper: {

    }
  });
})

export default useStyles;
