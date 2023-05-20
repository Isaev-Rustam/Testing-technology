import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './styles.module.css';
import Layout from './Layout/layout';

interface IModal {
  opened: boolean;
  onClose: () => void;
  children: ReactNode | null;
}

const ANIMATION_TIME = 300;
export const useMount = ({ opened }: { opened: boolean }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (opened && !mounted) {
      setMounted(true);
    } else if (!opened && mounted) {
      setTimeout(() => {
        setMounted(false);
      }, ANIMATION_TIME);
    }
  }, [opened, mounted]);

  return {
    mounted,
  };
};

const Portal = ({ children }: { children: ReactNode }) => {
  const [container] = useState(() => document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return createPortal(children, container);
};

export var SimpleAnimatedModal = ({ opened, onClose, children }: IModal) => {
  const { mounted } = useMount({ opened });

  if (!mounted) {
    return null;
  }

  return (
    <Portal>
      <Layout onClose={onClose} opened={opened}>
        {children}
      </Layout>
    </Portal>
  );
};

const Modal = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <button
        type="button"
        className={styles.button}
        onClick={() => setOpened(true)}
      >
        modalR
      </button>
      <SimpleAnimatedModal opened={opened} onClose={() => setOpened(false)}>
        <h2 className={styles.modalContent}>Simple animation content</h2>
      </SimpleAnimatedModal>
    </>
  );
};

export default Modal;
