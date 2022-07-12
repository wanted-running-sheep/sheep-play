import styled from 'styled-components';

interface ModalProps {
  close: () => void;
  children?: JSX.Element | JSX.Element[];
}

const Modal: React.FC<ModalProps> = ({ close, children }) => {
  return (
    <Wrapper onClick={close}>
      <ModalBody onClick={(e) => e.stopPropagation()}>{children}</ModalBody>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox()}
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.modalLevel};
  background-color: rgba(0, 0, 0, 0.6);
`;
const ModalBody = styled.div`
  position: relative;
  width: 80%;
  height: 85%;
  max-width: 1200px;
  max-height: 700px;
  margin: 0 auto;
  background: ${({ theme }) => theme.color.background.indigo};
  border-radius: 40px;
  ${({ theme }) => theme.media.desktop`
    width: 95%;
  `}
  ${({ theme }) => theme.media.tablet`
    height: 95%;
  `}
`;

export default Modal;
