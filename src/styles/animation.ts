import { Keyframes, keyframes } from 'styled-components';

type DropDownAniMationType =
  | 'dropDownMountedAnimation'
  | 'dropDownUnMountedAnimation';

const dropDownAnimation: { [k in DropDownAniMationType]: Keyframes } = {
  dropDownMountedAnimation: keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
  `,
  dropDownUnMountedAnimation: keyframes`
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  `,
};
const animation = {
  dropDownAnimation,
};
export default animation;
