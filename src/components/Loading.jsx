import loadingGif from '../icons/loading.gif';
import '../styles/components/Loading.css';

function Loading() {
  return (
    <div className="loading flex-row">
      <img src={loadingGif} alt="loading_gif" />
      <p>Downloading...</p>
    </div>
  );
}
export default Loading;
