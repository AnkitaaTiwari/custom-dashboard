import { makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: theme.spacing(30),
    },
    title: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: theme.spacing(10.5),
      justifyContent: 'center',
    },
    drawer: {
    
    },
    drawerPaper: {

    }
  });
})

export default useStyles;
