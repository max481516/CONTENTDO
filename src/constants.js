const BREAKPOINTS = {
  laptopMax: 1499,
  largeTabletMax: 1099,
  tabletMax: 769,
  mobileMax: 549,
};

const QUERIES = {
  laptop: `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
  largeTablet: `(max-width: ${BREAKPOINTS.largeTabletMax / 16}rem)`,
  tablet: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  mobile: `(max-width: ${BREAKPOINTS.mobileMax / 16}rem)`,
};

export { BREAKPOINTS, QUERIES };
