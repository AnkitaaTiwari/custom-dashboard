import { makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return createStyles({
    button: {
      margin: theme.spacing(2, 1),
      textTransform: 'none',
    },
    avatar: {
      marginRight: theme.spacing(1),
      width: theme.spacing(4),
      height: theme.spacing(4),
      fontSize: 'small',
    },
    userName: {
      fontWeight: 600,
      fontSize: theme.spacing(1.5),
    },
    subtext: {
      color: 'gray',
      fontSize: theme.spacing(1.375),
      marginTop: theme.spacing(-0.5),
    }
  });
});

export default useStyles;
