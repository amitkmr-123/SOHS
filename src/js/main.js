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

document.addEventListener('DOMContentLoaded', function () {
	const hamburger = document.querySelector('.hdr .inner_hdr .cst-humburger-icon');
	if (hamburger) {
		hamburger.addEventListener('click', function () {
			document.body.classList.toggle('menuToggle');
		});
	}
});

document.querySelectorAll('.hdr .btm_content .flx .menu .hs-menu-wrapper > ul > li.hs-item-has-children > a').forEach(a => {
	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
	svg.setAttribute("viewBox", "0 0 384 512");
	svg.innerHTML = '<path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>';
	a.appendChild(svg);
});

document.querySelectorAll('.hdr .btm_content .flx .menu .hs-menu-wrapper > ul > li.hs-item-has-children > a > svg').forEach(svg => {
	svg.addEventListener('click', function (e) {
		e.preventDefault();

		const li = svg.closest('li.hs-item-has-children');

		svg.classList.toggle('active');

		if (li) {
			li.classList.toggle('active');
		}
	});
});

  // Store references to anchor elements
  let menuLinks;

  function handleMenuClick(e) {
    e.preventDefault();

    const parentLi = this.closest('li.hs-item-has-children');
    const siblingLis = parentLi.parentElement.querySelectorAll('li.hs-item-has-children');

    siblingLis.forEach(li => {
      if (li !== parentLi) li.classList.remove('desActive');
    });

    parentLi.classList.toggle('desActive');
  }

  function bindOrUnbindMenuClicks() {
    menuLinks = document.querySelectorAll(
      '.hdr .btm_content .flx .menu .hs-menu-wrapper > ul > li.hs-item-has-children > a'
    );

    menuLinks.forEach(link => {
      link.removeEventListener('click', handleMenuClick); // Remove first to avoid duplicates

      if (window.innerWidth >= 1441) {
        link.addEventListener('click', handleMenuClick);
      } else {
        // Optional: cleanup classes on smaller screens
        const parentLi = link.closest('li.hs-item-has-children');
        parentLi.classList.remove('desActive');
      }
    });
  }

  // Run on page load
  window.addEventListener('DOMContentLoaded', bindOrUnbindMenuClicks);

  // Run on resize
  window.addEventListener('resize', bindOrUnbindMenuClicks);