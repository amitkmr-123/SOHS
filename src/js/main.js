// Smooth 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    if (document.querySelector(this.getAttribute('href'))) {
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
    }
  });
});
// Load
window.addEventListener('load', function () {
  document.body.classList.add('window-loaded');
  //
  AOS.init({
    duration: 1000,
    once: true,
    disable: 'mobile'
  });
});
// Scroll
window.addEventListener('scroll', function () {
  const html = document.documentElement;
  const top = html.scrollTop;
  if (top > 100) {
    document.body.classList.add('page-scrolled');
  }
  else {
    document.body.classList.remove('page-scrolled');
  }
});

// 

var images = document.querySelectorAll('.ftr .page-center .custom_logo img.hs-image-widget, .hdr .logo img.hs-image-widget');
Array.prototype.slice.call(images).forEach(function (img, index) {
  if (images[index].hasAttribute('src')) {
    images[index].setAttribute('src', images[index].getAttribute('src').split('?')[0]);
  }
  var logoSrcSet = img.getAttribute('srcset');
  if (logoSrcSet) {
    var srcsetArr = logoSrcSet.split(', ');
    var updatedSrcSetArr = [];
    srcsetArr.forEach(function (src) {
      updatedSrcSetArr.push(src.split('?')[0]);
    });
    img.setAttribute('srcset', updatedSrcSetArr.join(', '));
  }
});

function headerHeight() {
  const innerHdr = document.querySelector('.hdr .inner_hdr');
  const hdr = document.querySelector('.hdr');

  if (innerHdr && hdr) {
    const style = getComputedStyle(innerHdr);
    const marginTop = parseFloat(style.marginTop) || 0;
    const marginBottom = parseFloat(style.marginBottom) || 0;
    const totalHeight = innerHdr.offsetHeight + marginTop + marginBottom;

    hdr.style.minHeight = totalHeight + 'px';
  }
}

window.addEventListener('load', headerHeight);
window.addEventListener('resize', () => {
  clearTimeout(window._resizeTimer);
  window._resizeTimer = setTimeout(headerHeight, 100);
});
