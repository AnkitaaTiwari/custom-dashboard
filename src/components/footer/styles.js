import { makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return createStyles({
    subtext: {
      color: 'gray',
      marginTop: theme.spacing(-0.5),
      fontSize: 'x-small'
    }
  });
})

export default useStyles;
