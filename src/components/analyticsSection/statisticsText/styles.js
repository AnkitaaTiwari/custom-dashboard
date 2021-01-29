import { makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
    },
    numbers: {
      fontWeight: 600,
      marginRight: theme.spacing(2),
    },
    name: {
      color: 'gray',
      fontSize: theme.spacing(1.4),
    },
  });
})

export default useStyles;
