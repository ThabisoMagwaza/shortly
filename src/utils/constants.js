export const COLORS = {
  Secondary49: 'var(--color-secondary-49)',
  Secondary75: 'var(--color-secondary-75)',
  Primary14: 'var(--color-primary-14)',
  Primary21: 'var(--color-primary-21)',
  Primary26: 'var(--color-primary-26)',
  Primary33: 'var(--color-primary-33)',
  Primary40: 'var(--color-primary-40)',
  Primary63: 'var(--color-primary-63)',
  Primary95: 'var(--color-primary-95)',
  Accent67: 'var(--color-accent-67)',
  Accent87: 'var(--color-accent-87)',
  White: 'var(--color-white)',
  Gray59: 'var(--color-gray-59)',
  Gray75: 'var(--color-gray-75)',
};

const BREAKPOINTS = {
  phone: 650,
  tablet: 950,
  laptop: 1300,
};

export const QUERIES = {
  phoneAndUp: `(min-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndUp: `(min-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptop / 16}rem)`,
};
