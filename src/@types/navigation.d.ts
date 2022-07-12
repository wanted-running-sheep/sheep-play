declare module 'navigation' {
  interface NavBarItemInterface {
    Icon: JSX.Element;
    title: 'Search' | 'Bookmark';
    onClickLink: () => void;
  }
}
