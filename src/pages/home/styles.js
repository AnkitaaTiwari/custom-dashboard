import { makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return createStyles({
    content: {
      margin: theme.spacing(10.5, 30, 0, 0),
    }
  });
})

export default useStyles;
