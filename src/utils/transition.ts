export const scrollRedirect = async (
  e: React.WheelEvent,
  gsap: any,
  location: string,
  navigate: Function,
  next: string,
  prev: string,
  delay: Boolean
) => {
  if (!delay) {
    if (e.deltaY < 0) {
      await gsap.to('.content', { opacity: 0, x: '-100%', duration: 1.5 });
      navigate(next, { state: location });
    }
    if (e.deltaY > 0) {
      await gsap.to('.content', { opacity: 0, x: '100%', duration: 1.5 });
      navigate(prev, { state: location });
    }
  }
};
