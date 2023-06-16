export const ScrollToTop = (behavior) => {
  window.scrollTo({
    top: 0,
    behavior: behavior?? 'smooth'
  });
};