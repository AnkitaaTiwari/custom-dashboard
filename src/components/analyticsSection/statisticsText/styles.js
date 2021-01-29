import { makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return createStyles({
    cardContainer: {
      height: theme.spacing(54),
      width: '100%',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      margin: theme.spacing(2, 4),
      height: 'calc(100% - 2rem)',
      // height: 'calc(100% - 0.25rem)',
    },
  });
})

export default useStyles;
