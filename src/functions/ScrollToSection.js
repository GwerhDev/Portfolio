export const ScrollToSection = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: 'smooth' });
};