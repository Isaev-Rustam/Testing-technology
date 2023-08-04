import { ReactNode, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

import ModalTwUi from '../../components/tailwind-ui/modal';
import ModalRC from '../../components/modal/modal';

const ModalPortal = ({ children }: { children: ReactNode }) => {
  const domItem = useMemo(
    () => document.getElementById('modal-root') as HTMLDivElement,
    []
  );

  return createPortal(children, domItem);
};

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <div style={{ display: 'flex' }}>
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          ModalTwUi
        </button>
        <ModalPortal>
          <ModalTwUi closeModal={closeModal} isOpen={isOpen} />
        </ModalPortal>
        <ModalRC />
      </div>
      <div className="mt-4">
        <div
          style={{ position: 'static', top: '-10px' }}
          className="bg-amber-400 w-40 h-40"
        >
          box
        </div>
        <div
          style={{ position: 'relative', top: '-100px' }}
          className="bg-red-400 w-40 h-40"
        >
          box
        </div>
        <div
          style={{ position: 'relative', top: '-200px' }}
          className="bg-blue-400 w-40 h-40"
        >
          box
        </div>
      </div>
    </>
  );
};
export default Modal;
