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

  // Initialize Swiper sliders
  const initSwipers = () => {
    if (typeof window !== 'undefined' && (window as any).Swiper) {
      const Swiper = (window as any).Swiper;
      
      // Partner slider
      new Swiper('.swiperPartner', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        speed: 3000,
        breakpoints: {
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 }
        }
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
