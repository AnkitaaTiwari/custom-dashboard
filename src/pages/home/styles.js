import { makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return createStyles({
    homeContent: {
      margin: theme.spacing(2, 4, 0),
      height: 'calc(100% - 1rem)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    button: {
      borderRadius: theme.spacing(200),
      width: theme.spacing(20),
      textTransform: 'none',
      fontSize: 'small',
    }
  });
})

export default useStyles;
