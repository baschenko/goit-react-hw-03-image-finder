import { Vortex } from 'react-loader-spinner';
import { Loader } from './ImageGalleryPedingView.styled';

export default function ImageGalleryPedingView() {
  return (
    <Loader role="alert">
      <div>Загружаємо...</div>

      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </Loader>
  );
}
