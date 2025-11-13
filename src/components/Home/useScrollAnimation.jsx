import { useEffect, useRef } from "react";

export default function useScrollAnimation(animation = "fade-up", duration = 800) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = 0;
    el.style.transition = `all ${duration}ms ease`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("aos-animate", animation);
          } else {
            // reset so it can play again when re-entering
            el.classList.remove("aos-animate", animation);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, duration]);

  return ref;
}
