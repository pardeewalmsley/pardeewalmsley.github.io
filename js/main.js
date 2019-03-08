// Global language variable

var language = 'EN';

// Functions on load
$(window).on('load', function() {
  $('.name').removeClass('above-screen');
  $('.description').fadeIn(4000).removeClass('hidden');
  if (localStorage.awlanguage) {
     language = JSON.parse(localStorage.getItem('awlanguage'));
     a.innerHTML = language;
    } else {
      localStorage.setItem('awlanguage', JSON.stringify(language));
    }
  changeLanguage(language);
});

// Parallax scrolling landscape
document.addEventListener('scroll', () => {
	const top = window.pageYOffset;
	const two = document.querySelector('.two');
	const three = document.querySelector('.three');
	const four = document.querySelector('.four');

	two.style.bottom = (-(top * 0.2) + 'px');
	three.style.bottom = (-(top * 0.3) + 'px');
	four.style.bottom = (-(top * 0.4) + 'px');
});

// Open/Close Menu
function openNav() {
    $("#menu").css('width', '100%');
}

function closeNav() {
    $("#menu").css('width', '0%');
}

// Custom dropdown language menu
var x, i, j, selElmnt, a, b, c;

x = document.getElementsByClassName("language-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];

  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);

  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 0; j < selElmnt.length; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {

        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            changeLanguage(this.innerHTML);
            language = this.innerHTML;
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);

// Change Language

function changeLanguage(language) {
    if (language === 'EN') {
      $('.en').css('display', 'block');
      $('.fr').css('display', 'none');
      $('.de').css('display', 'none');
      localStorage.setItem('awlanguage', JSON.stringify(language));
    } else if (language === 'FR') {
      $('.en').css('display', 'none');
      $('.fr').css('display', 'block');
      $('.de').css('display', 'none');
      localStorage.setItem('awlanguage', JSON.stringify(language));
    } else if (language === 'DE') {
      $('.en').css('display', 'none');
      $('.fr').css('display', 'none');
      $('.de').css('display', 'block');
      localStorage.setItem('awlanguage', JSON.stringify(language));
    }
}

// Waypoints for home page

var sectionBreak1 = $('.section-break1').waypoint(function(direction) {
  $('.section-break1').css('width', '100%');
}, {
  offset: '80%;'
});
var sectionBreak2 = $('.section-break2').waypoint(function(direction) {
  $('.section-break2').css('width', '100%');
}, {
  offset: '80%;'
});
var sectionBreak3 = $('.section-break3').waypoint(function(direction) {
  $('.section-break3').css('width', '100%');
}, {
  offset: '80%;'
});

var webAppContainer = $('#web-app-container').waypoint(function(direction) {
  $('#web-app-container').removeClass('below-screen');
}, {
  offset: '140%;'
});
var virtRealContainer = $('#virt-real-container').waypoint(function(direction) {
  $('#virt-real-container').removeClass('below-screen');
}, {
  offset: '140%;'
});
var threedContainer = $('#threed-container').waypoint(function(direction) {
  $('#threed-container').removeClass('below-screen');
}, {
  offset: '140%;'
});
var mapsContainer = $('#maps-container').waypoint(function(direction) {
  $('#maps-container').removeClass('below-screen');
}, {
  offset: '140%;'
});
var aboutContainer = $('.about').waypoint(function(direction) {
  $('.about').removeClass('below-screen');
}, {
  offset: '140%;'
});
var contactContainer = $('.contact').waypoint(function(direction) {
  $('.contact').css('opacity', '1');
}, {
  offset: '120%;'
});

// Waypoints for portfolio page

var sectionBreak6 = $('.section-break6').waypoint(function(direction) {
  $('.section-break6').css({'width': '90vw', 'margin-left': '5vw'});
}, {
  offset: '80%;'
});

var webAppPortfolioContainer = $('#web-apps-portfolio-wrap').waypoint(function(direction) {
  $('#web-apps-portfolio-wrap').removeClass('below-screen');
}, {
  offset: '300%;'
});
var virtRealPortfolioContainer = $('#virt-real-portfolio-wrap').waypoint(function(direction) {
  $('#virt-real-portfolio-wrap').removeClass('below-screen');
}, {
  offset: '120%;'
});
var threedPortfolioContainer = $('#threed-portfolio-wrap').waypoint(function(direction) {
  $('#threed-portfolio-wrap').removeClass('below-screen');
}, {
  offset: '120%;'
});
var mapsPortfolioContainer = $('#maps-portfolio-wrap').waypoint(function(direction) {
  $('#maps-portfolio-wrap').removeClass('below-screen');
}, {
  offset: '300%;'
});
var skillsContainer = $('.skills').waypoint(function(direction) {
  $('.skills').removeClass('below-screen');
}, {
  offset: '130%;'
});

// Social links hover

$('.fa-github').hover(function() {
  $('.github').fadeIn(100);
}, function() {
  $('.github').fadeOut(100);
});

$('.fa-codepen').hover(function() {
  $('.codepen').fadeIn(100);
}, function() {
  $('.codepen').fadeOut(100);
});

$('.fa-linkedin-in').hover(function() {
  $('.linkedin').fadeIn(100);
}, function() {
  $('.linkedin').fadeOut(100);
});

$('.icon-sketchfab').hover(function() {
  $('.sketchfab').fadeIn(100);
}, function() {
  $('.sketchfab').fadeOut(100);
});

// Smooth scrolling mouse on portfolio page

$("#mouse").click(function() {
    $('html, body').animate({
        scrollTop: $(".section-break5").offset().top
    }, 1000);
});
