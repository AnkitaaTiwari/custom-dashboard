import { makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return createStyles({
    cardContainer: {
      height: theme.spacing(10),
      width: theme.spacing(30),
    },
  });
})

export default useStyles;
