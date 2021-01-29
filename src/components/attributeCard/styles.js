import { makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return createStyles({
    cardContainer: {
      height: theme.spacing(10),
      width: theme.spacing(30),
    },
    content: {
      display: 'flex',
      margin: theme.spacing(0.25),
      height: 'calc(100% - 0.25rem)',
    },
    iconsSection: {
      width: theme.spacing(12),
    },
    circularBackground: {
      background: theme.palette.primary.light,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '0 100rem 100rem 0',
      fontSize: 'xxx-large',
    },
    textSection: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 'calc(100% - 6rem)'
    },
    title: {
      fontWeight: 600,
      fontSize: 'medium',
    },
    subtext: {
      color: 'gray',
      textTransform: 'uppercase',
      fontSize: theme.spacing(1.375),
      marginTop: theme.spacing(-0.5),
    }
  });
})

export default useStyles;
