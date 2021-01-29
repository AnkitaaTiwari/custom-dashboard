import { makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return createStyles({
    content: {
      background: '#F5F6F8',
      height: 'calc(100vh - 76px)',
    }
  });
})

export default useStyles;
