export const ScrollToSection = (id, behavior) => {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: behavior?? 'smooth' });
};