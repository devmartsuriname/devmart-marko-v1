// Template script initialization utilities
// This file handles initialization of jQuery-based template functionality

declare global {
  interface Window {
    $: any;
    jQuery: any;
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export const initializeTemplateScripts = () => {
  if (typeof window === 'undefined') return;

  const $ = window.$;
  if (!$) return;

  // YouTube video initialization removed - now using native HTML5 video
  // const initBannerVideo = () => { ... }

  // Initialize video modal
  const initVideoModal = () => {
    $('.request-loader').on('click', function() {
      const videoUrl = $(this).data('video');
      $('#my-video-frame').attr('src', videoUrl);
      $('#modal-overlay').addClass('active');
    });

    $('.my-close').on('click', function() {
      $('#modal-overlay').removeClass('active');
      $('#my-video-frame').attr('src', '');
    });
  };

  // Initialize Swiper sliders - exact configuration from original template
  const initSwipers = () => {
    if (typeof window !== 'undefined' && (window as any).Swiper) {
      const Swiper = (window as any).Swiper;
      
      // Partner slider - matches swiper-script.js configuration
      new Swiper('.swiper.swiperPartner', {
        autoplay: {
          delay: 5000,
        },
        speed: 1000,
        slidesPerView: 6,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        breakpoints: {
          1025: {
            slidesPerView: 6
          },
          767: {
            slidesPerView: 4
          },
          230: {
            slidesPerView: 3
          }
        },
        pagination: {
          enabled: true,
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
      });

      // Testimonial slider - matches swiper-script.js configuration
      new Swiper('.swiper.swiperTestimonial', {
        autoplay: {
          delay: 5000,
        },
        speed: 1000,
        slidesPerView: 3,
        spaceBetween: 50,
        loop: true,
        grabCursor: true,
        breakpoints: {
          1025: {
            slidesPerView: 3,
          },
          769: {
            slidesPerView: 2
          },
          319: {
            slidesPerView: 1,
          },
        },
      });
    }
  };

  // Run all initializations
  try {
    // initBannerVideo(); // Removed - now using native HTML5 video
    initVideoModal();
    initSwipers();
  } catch (error) {
    console.error('Error initializing template scripts:', error);
  }
};
