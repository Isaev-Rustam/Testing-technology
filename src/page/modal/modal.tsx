import ModalTwUi from '../../components/tailwind-ui/modal.tsx';
import ModalRC from '../../components/modal/modal';

export default function Modal() {
  return (
    <div style={{ display: 'flex' }}>
      <ModalTwUi />
      <ModalRC />
    </div>
  );
}
