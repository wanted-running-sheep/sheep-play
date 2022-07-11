import styled from 'styled-components';

interface ModalProps {
  close: () => void;
  children?: JSX.Element | JSX.Element[];
  background?: URL;
}

const Modal: React.FC<ModalProps> = ({ close, children, background }) => {
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
  position: absolute;
  width: 70%;
  height: 80%;
  margin: 0 auto;
  background: ${({ theme }) => theme.color.background.white};
  background-image: url(background);
  border-radius: 40px;
`;

export default Modal;
