$('.bgs').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    speed: 500
  });

  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();

  tl.from( "#bg", {
      scale: 1.2,
      duration: 0.5,
      scrollTrigger: {
          trigger: '#bg',
          start: 'left left'
        }
  } )

  tl.from( '#tiktok', {
      x : '-100vw',
      duration: 0.3,
      ease: "power4.out"
  } )

  tl.from( '#insta', {
      x : '100vw',
      duration: 0.3,
      ease: "power4.out"
  } )

  tl.from( '#onlyfans', {
      x : '-100vw',
      duration: 0.3,
      ease: "power4.out"
  } )

  tl.from( '#onlyfans2', {
      x : '100vw',
      duration: 0.3,
      ease: "power4.out"
  } )

  tl.from( '#shop', {
      x : '-100vw',
      duration: 0.3,
      ease: "power4.out"
  } )
          