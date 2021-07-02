import { makeStyles, Theme } from '@material-ui/core'
const placeholderImageURL = 'https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg'
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    textAlign: 'center',
  },
  imgBox: {
    width: '80vw',
    height: '60vh',
    boxShadow: theme.shadows[10],
    // maxHeight: "80vh",
    margin: 'auto',
  },
  img: {
    backgroundImage: 'url(' + placeholderImageURL + ')',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
  },
  input: {
    display: 'none',
  },
}))

export default useStyles
