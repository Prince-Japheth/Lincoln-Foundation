var loader = document.getElementById("preloader");
window.onload = function () {
  loader.style.display = "none";
};

(function ($) {

  "use strict";
  // TOP Menu Sticky
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $("#sticky-header").removeClass("sticky");
      $('#back-top').fadeIn(500);
    } else {
      $("#sticky-header").addClass("sticky");
      $('#back-top').fadeIn(500);
    }
  });


  // Counter Js
  document.addEventListener('DOMContentLoaded', function () {
    var counter1 = new CountUp('counter1', 120);
    var counter2 = new CountUp('counter2', 320);
    var counter3 = new CountUp('counter3', 140);
    var counter4 = new CountUp('counter4', 100);

    // Start the count-up animations
    if (!counter1.error) {
      counter1.start();
    } else {
      console.error(counter1.error);
    }

    if (!counter2.error) {
      counter2.start();
    } else {
      console.error(counter2.error);
    }

    if (!counter3.error) {
      counter3.start();
    } else {
      console.error(counter3.error);
    }

    if (!counter4.error) {
      counter4.start();
    } else {
      console.error(counter4.error);
    }
  });
  ////////////


  $(document).ready(function () {

    // mobile-menu
    var menu = $('ul#navigation');
    if (menu.length) {
      menu.slicknav({
        prependTo: ".mobile-menu",
        closedSymbol: '+',
        openedSymbol: '-'
      });
    };
  });


  // news.html pagination
  document.addEventListener('DOMContentLoaded', function () {
    const newsItems = document.querySelectorAll('.single-news');
    const itemsPerPage = 6;
    const totalPages = Math.ceil(newsItems.length / itemsPerPage);
    let currentPage = 1;

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageNumbers = document.getElementById('pageNumbers');
    const newsHeading = document.getElementById('news-heading');

    function showPage(page) {
      newsItems.forEach((item, index) => {
        item.style.display = (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) ? 'block' : 'none';
      });

      // Scroll to the news-heading element after updating the page
      newsHeading.scrollIntoView({ behavior: 'smooth' });
    }

    function updatePagination() {
      showPage(currentPage);

      prevBtn.disabled = currentPage === 1;
      nextBtn.disabled = currentPage === totalPages;

      pageNumbers.innerHTML = '';
      for (let i = 1; i <= totalPages; i++) {
        const pageNumber = document.createElement('button');
        pageNumber.textContent = i;
        pageNumber.className = 'btn btn-outline-primary mx-2 p-3 px-4';
        pageNumber.disabled = (i === currentPage);
        pageNumber.addEventListener('click', () => {
          currentPage = i;
          updatePagination();
        });
        pageNumbers.appendChild(pageNumber);
      }
    }

    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        updatePagination();
      }
    });

    nextBtn.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
      }
    });

    updatePagination(); // Initial call to set up the page
  });


})(jQuery);	