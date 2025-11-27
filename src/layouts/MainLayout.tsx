import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { initializeTemplateScripts } from "../utils/templateScripts";

const MainLayout = () => {
  useEffect(() => {
    // Initialize template scripts after component mount
    const initScripts = () => {
      if (typeof window !== 'undefined' && (window as any).$) {
        const $ = (window as any).$;
        
        // Initialize theme switch
        let lightMode = false;
        if (localStorage.getItem('lightmode') === 'active') {
          lightMode = true;
          $('body').addClass('lightmode');
        }

        // Initialize counter animation
        const initCounter = () => {
          const $counters = $(".counter");
          
          function updateCount($counter: any) {
            const target = +$counter.data("target");
            const count = +$counter.text().replace("+", "");
            const duration = 2000;
            const steps = 60;
            const increment = Math.max(1, Math.ceil(target / steps));
            const delay = Math.floor(duration / (target / increment));

            if (count < target) {
              const nextCount = Math.min(target, count + increment);
              $counter.text(nextCount);
              setTimeout(() => updateCount($counter), delay);
            } else {
              $counter.text(target);
            }
          }

          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const $counter = $(entry.target);
                updateCount($counter);
                observer.unobserve(entry.target);
              }
            });
          }, { threshold: 0.5 });

          $counters.each(function() {
            observer.observe(this);
          });
        };

        // Initialize animations - matches original template behavior
        const initAnimations = () => {
          const elements = document.querySelectorAll('[data-animate]');
          
          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                  entry.target.classList.add(entry.target.getAttribute('data-animate') || '');
                  (entry.target as HTMLElement).style.opacity = '1';
                  observer.unobserve(entry.target);
                }, Number(delay));
              }
            });
          }, { threshold: 0.1 });
          
          // Observe all elements
          elements.forEach(el => observer.observe(el));

          // Critical: Immediate visibility for hero/above-fold elements
          // This ensures no flash of invisible content on initial load
          requestAnimationFrame(() => {
            elements.forEach(el => {
              const rect = el.getBoundingClientRect();
              const isAboveFold = rect.top < window.innerHeight;
              
              if (isAboveFold && (el as HTMLElement).style.opacity !== '1') {
                const delay = el.getAttribute('data-delay') || 0;
                setTimeout(() => {
                  el.classList.add(el.getAttribute('data-animate') || '');
                  (el as HTMLElement).style.opacity = '1';
                }, Number(delay));
              }
            });
          });
        };

        initCounter();
        initAnimations();
      }
    };

    // Wait for jQuery to be available
    const checkJQuery = setInterval(() => {
      if (typeof (window as any).$ !== 'undefined') {
        clearInterval(checkJQuery);
        initScripts();
        initializeTemplateScripts();
      }
    }, 100);

    return () => clearInterval(checkJQuery);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
