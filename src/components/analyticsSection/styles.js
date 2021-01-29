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
    },
    titleContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    titleWrapper: {
      height: theme.spacing(6.25)
    },
    title: {
      fontWeight: 600,
      height: '100%',
      display: 'flex',
      alignItems: 'flex-end',
    },
    rangeSelectorWrapper: {
      heigth: theme.spacing(1),
      marginRight: theme.spacing(-1),
    },
    statisticsContainer: {
      display: 'flex',
      marginTop: theme.spacing(2),
    },
    statisticsWrapper: {
      display: 'flex',
    },
    divider: {
      margin: theme.spacing(0, 2),
    },
    graphContainer: {
      marginTop: theme.spacing(2),
    }
  });
})

export default useStyles;
