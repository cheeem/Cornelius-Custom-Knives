let intersectionObserver;

export const viewport = element => {

	ensureIntersectionObserver();

	intersectionObserver.observe(element);

	return {
		destroy() {
			intersectionObserver.unobserve(element);
		}
	}

}

const ensureIntersectionObserver = () => {

  if (intersectionObserver) return;

  intersectionObserver = new IntersectionObserver(
      (entries) => {
          entries.forEach(entry => {
              const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
              entry.target.dispatchEvent(new CustomEvent(eventName));
          });
      }
  );
  
}