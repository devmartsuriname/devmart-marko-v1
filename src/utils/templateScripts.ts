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

  // Initialize YouTube player for banner video
  const initBannerVideo = () => {
    if (!document.getElementById('banner-video-background')) return;

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = function() {
      const player = new window.YT.Player('banner-video-background', {
        videoId: 'P68V3iH4TeE',
        playerVars: {
          autoplay: 1,
          controls: 0,
          mute: 1,
          loop: 1,
          playlist: 'P68V3iH4TeE',
          showinfo: 0,
          rel: 0,
          enablejsapi: 1,
          disablekb: 1,
          modestbranding: 1,
          iv_load_policy: 3,
          origin: window.location.origin
        }
      });
    };
  };

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
    initBannerVideo();
    initVideoModal();
    initSwipers();
  } catch (error) {
    console.error('Error initializing template scripts:', error);
  }
};
