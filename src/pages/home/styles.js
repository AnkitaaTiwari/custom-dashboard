import { makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return createStyles({
    content: {
      margin: theme.spacing(0, 4),
    }
  });
})

export default useStyles;
