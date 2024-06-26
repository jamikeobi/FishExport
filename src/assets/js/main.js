(function ($) {
  "use strict";
  function setCookie(cname, cvalue, days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      var expires = "; expires=" + date.toGMTString();
    } else {
      var expires = "";
    }
    document.cookie = cname + "=" + cvalue + expires + "; path=/";
  }
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  function checkCookie(cookieToCheck) {
    var cookie = getCookie(cookieToCheck);
    if (cookie != "") {
      return true;
    }
    return false;
  }
  function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }
  $(".newsletter-popup-trigger").on("click", function () {
    setCookie("newsletter_popup_viewed", "true");
  });
  $("#androNewsletterPopup").on("hidden.bs.modal", function () {
    setCookie("newsletter_popup_viewed", "true");
  });
  $(window).on("load", function () {
    $(".andro_preloader").addClass("hidden");
    if (!checkCookie("newsletter_popup_viewed")) {
      setTimeout(function () {
        $("#androNewsletterPopup").modal("show");
      }, 3000);
    }
  });
  $(".aside-trigger-right").on("click", function () {
    var $el = $(".andro_aside-right");
    $el.toggleClass("open");
    if ($el.hasClass("open")) {
      setTimeout(function () {
        $el.find(".sidebar").fadeIn();
      }, 300);
    } else {
      $el.find(".sidebar").fadeOut();
    }
  });
  $(".aside-trigger-left").on("click", function () {
    $(".andro_aside-left").toggleClass("open");
  });
  $(".andro_aside .menu-item-has-children > a").on("click", function (e) {
    var submenu = $(this).next(".sub-menu");
    e.preventDefault();
    submenu.slideToggle(200);
  });
  $(".andro_dropdown-scroll").slimScroll({
    height: 300,
    position: "right",
    size: "5px",
    color: "#dcdcdc",
    opacity: 1,
    wheelStep: 5,
    touchScrollStep: 50,
  });
  var header = $(".can-sticky");
  var headerHeight = header.innerHeight();
  function doSticky() {
    if (window.pageYOffset > headerHeight) {
      header.addClass("sticky");
    } else {
      header.removeClass("sticky");
    }
  }
  doSticky();
  $('[data-toggle="tooltip"]').tooltip();
  $(".popup-youtube").magnificPopup({ type: "iframe" });
  $(".popup-vimeo").magnificPopup({ type: "iframe" });
  $(".popup-video").magnificPopup({ type: "iframe" });
  $(".gallery-thumb").magnificPopup({
    type: "image",
    gallery: { enabled: true },
  });
  $(".js-range-slider").ionRangeSlider();
  $(".andro_product-single-thumb")
    .wrap(
      '<span style="display:inline-block" class="andro_product-single-zoom"></span>'
    )
    .css("display", "block")
    .parent()
    .zoom();
  $(".andro_countdown-timer").each(function () {
    var $this = $(this);
    $this.countdown($this.data("countdown"), function (event) {
      $(this).text(event.strftime("%D days %H:%M:%S"));
    });
  });
  $(".andro_notice a").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".andro_notice").next().slideToggle();
  });
  $(".andro_category-mm").on("click", function () {
    $(this).toggleClass("open");
  });
  $(".deals-slider, .andro_testimonials").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    responsive: [
      { breakpoint: 991, settings: { slidesToShow: 2 } },
      { breakpoint: 575, settings: { slidesToShow: 1 } },
    ],
  });
  $(".sponsers-slider").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 6 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 575, settings: { slidesToShow: 3 } },
      { breakpoint: 400, settings: { slidesToShow: 2 } },
    ],
  });
  $(".fis-main-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
  });
  $(".andro_grid-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 991,
        settings: { slidesToShow: 3, autoplay: true, arrows: false },
      },
      { breakpoint: 768, settings: { slidesToShow: 2, arrows: false } },
      { breakpoint: 575, settings: { slidesToShow: 1, arrows: false } },
    ],
  });
  $(".andro_other-mentions-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $(".andro_other-mentions .slider-prev"),
    nextArrow: $(".andro_other-mentions .slider-next"),
    dots: false,
    autoplay: false,
    responsive: [
      { breakpoint: 991, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 450, settings: { slidesToShow: 1 } },
    ],
  });
  $(".banner-1 .andro_banner-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
  });
  $(".banner-2 .andro_banner-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
  });
  $(".banner-3 .andro_banner-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    prevArrow: $(".banner-3 .slider-prev"),
    nextArrow: $(".banner-3 .slider-next"),
  });
  $(".andro_fresh-arrivals-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    prevArrow: $(".andro_fresh-arrivals .slider-prev"),
    nextArrow: $(".andro_fresh-arrivals .slider-next"),
    responsive: [
      { breakpoint: 991, settings: { slidesToShow: 2 } },
      { breakpoint: 575, settings: { slidesToShow: 1 } },
    ],
  });
  $(".andro_upsells-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    prevArrow: $(".andro_upsells .slider-prev"),
    nextArrow: $(".andro_upsells .slider-next"),
  });
  $(".andro_related-posts-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    prevArrow: $(".andro_related-posts .slider-prev"),
    nextArrow: $(".andro_related-posts .slider-next"),
    responsive: [
      { breakpoint: 991, settings: { slidesToShow: 2 } },
      { breakpoint: 575, settings: { slidesToShow: 1 } },
    ],
  });
  $(".masonry").imagesLoaded(function () {
    var isotopeContainer = $(".masonry");
    isotopeContainer.isotope({ itemSelector: ".masonry-item" });
  });
  $(".qty span").on("click", function () {
    var qty = $(this).closest(".qty").find("input");
    var qtyVal = parseInt(qty.val());
    if ($(this).hasClass("qty-add")) {
      qty.val(qtyVal + 1);
    } else {
      return qtyVal > 1 ? qty.val(qtyVal - 1) : 0;
    }
  });
  $(".andro_back-to-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
  $(window).on("scroll", function () {
    doSticky();
  });
  $(window).on("resize", function () {});
})(jQuery);


// Hamburger Menu

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navbar-toggler');
    const navbarNav = document.querySelector('#navbarNav');

    toggleButton.addEventListener('click', function() {
      navbarNav.classList.toggle('toggle');
    });
  });

