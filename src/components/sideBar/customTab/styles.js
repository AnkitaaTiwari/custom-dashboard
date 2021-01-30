import { makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return createStyles({
    container: {
      display: 'flex-end',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: theme.spacing(30),
    },
    title: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: theme.spacing(10.5),
      justifyContent: 'center',
    },
    tab: {
      '&:hover': {
        background: theme.palette.primary,
      },
      color: ({ color }) => color,
      height: ({ height }) => height,
      background: ({ background }) => background,
    },
    tabContent: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    labelContainer: {
      display: 'flex',
      alignItems: 'center',
      textTransform: 'none',
    },
    iconContainer: {
      margin: theme.spacing(1),
      height: theme.spacing(3),
    },
  });
});

export default useStyles;
