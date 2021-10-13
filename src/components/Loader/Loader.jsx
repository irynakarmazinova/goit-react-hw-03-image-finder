import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const LoaderSpinner = () => (
  <div role="alert" className="loader">
    <Loader
      type="MutatingDots"
      color="#3f51b5"
      height={100}
      width={100}
      timeout={3000}
    />
  </div>
);
export default LoaderSpinner;
