import { makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return createStyles({
    button: {
      margin: theme.spacing(2, 1),
      textTransform: 'none',
    },
    avatar: {
      marginRight: theme.spacing(1),
    },
    userName: {
      fontWeight: 600,
      fontSize: 'small',
    },
    subtext: {
      color: 'gray',
      fontSize: 'small',
      marginTop: theme.spacing(-0.5),
    }
  });
})

export default useStyles;
