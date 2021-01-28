import { makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return createStyles({
    toolbar: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      padding: 0,
    }
  });
})

export default useStyles;
