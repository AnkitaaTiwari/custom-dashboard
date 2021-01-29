import { makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return createStyles({
      dateContainer: {
      padding: '9px',
      fontSize: theme.spacing(1),
    }
  });
})

export default useStyles;
