const mixins = {
  flexBox: (align = 'center', justify = 'center') => `
    display: flex;
    align-items: ${align};
    justify-content: ${justify};
  `,
  backgroundImage: (
    position = 'center',
    size = 'cover',
    repeat = 'no-repeat'
  ) => `
    background-position: ${position};
    background-size: ${size};
    background-repeat: ${repeat};
  `,
  boxShadow: () => `
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  `,
};

export default mixins;
