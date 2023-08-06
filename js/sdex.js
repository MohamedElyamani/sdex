$('[data-fancybox="gallery1"]').fancybox({
	// Options will go here
    loop: true,
    buttons: [
        // "zoom",
        "share",
        "slideShow",
        "fullScreen",
        // "download",
        "thumbs",
        "close"
      ],
      slideShow: {
        autoStart: false,
        speed: 5000
      },
      // Transition effect between slides
  //
  // Possible values:
  //   false            - disable
  //   "fade'
  //   "slide'
  //   "circular'
  //   "tube'
  //   "zoom-in-out'
  //   "rotate'
  //
  transitionEffect: "slide",
});

let ils = document.querySelectorAll('.navbar-nav .nav-link');
ils.forEach((el)=>{
  el.addEventListener('click',()=>{
    ils.forEach((el)=>{
      el.classList.remove('current')
    })
    el.classList.add('current')
  })
})