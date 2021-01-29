import { makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return createStyles({
    wrapper:{
      // margin: theme.s
    },
    subtext: {
      color: 'gray',
      marginTop: theme.spacing(-0.5),
      fontSize: 'x-small'
    }
  });
})

export default useStyles;
