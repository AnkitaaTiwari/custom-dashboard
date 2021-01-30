import { makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return createStyles({
    subtext: {
      color: 'gray',
      marginTop: theme.spacing(-0.5),
      fontSize: theme.spacing(1.375),
    },
    footerContainer: {
      width: '100%',
      height: theme.spacing(4.5),
      
    },
    subtextContainer: {
      height: theme.spacing(4.375),
      display: 'flex',
      alignItems: 'center',
    },
  });
});

export default useStyles;
