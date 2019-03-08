// Preloader

document.addEventListener('DOMContentLoaded', function () {

  window.addEventListener('load', function() {
    document.querySelector('.sk-fading-circle').style.display = 'none';
    document.querySelector('.background').style.display = 'none';
  });

});

// Hover introduction info box title

document.querySelector('#introduction').addEventListener('mouseenter', function () {
  document.querySelector('#introduction-title').setAttribute('visible', true);
});

document.querySelector('#introduction').addEventListener('mouseleave', function () {
  document.querySelector('#introduction-title').setAttribute('visible', false);
});

// Open introduction info box

document.querySelector('#introduction').addEventListener('click', function () {
  if (document.querySelector('#introduction-text').getAttribute('visible') === false) {
  document.querySelector('#introduction-text').setAttribute('visible', true);
} else if (document.querySelector('#introduction-text').getAttribute('visible') === true){
  document.querySelector('#introduction-text').setAttribute('visible', false);
}
});

// Close button for introduction info box

document.querySelector('#close-introduction-box').addEventListener('mouseenter', function () {
  document.querySelector('#close-introduction-box').setAttribute('text', 'color: #821219');
});

document.querySelector('#close-introduction-box').addEventListener('mouseleave', function () {
  document.querySelector('#close-introduction-box').setAttribute('text', 'color: white');
});

document.querySelector('#close-introduction-box').addEventListener('click', function () {
  document.querySelector('#introduction-text').setAttribute('visible', false);
});

document.querySelector('#roomOne-roomTwo').addEventListener('click', function () {
  document.querySelector('#introduction-text').setAttribute('visible', false);
});

document.querySelector('#roomOne-roomFive').addEventListener('click', function () {
  document.querySelector('#introduction-text').setAttribute('visible', false);
});

document.querySelector('#roomOne-roomSix').addEventListener('click', function () {
  document.querySelector('#introduction-text').setAttribute('visible', false);
});

document.querySelector('#roomOne-roomSeven').addEventListener('click', function () {
  document.querySelector('#introduction-text').setAttribute('visible', false);
});

// Hover musicOxford info box title

document.querySelector('#musicOxford').addEventListener('mouseenter', function () {
  document.querySelector('#musicOxford-title').setAttribute('visible', true);
});

document.querySelector('#musicOxford').addEventListener('mouseleave', function () {
  document.querySelector('#musicOxford-title').setAttribute('visible', false);
});

// Open musicOxford info box

document.querySelector('#musicOxford').addEventListener('click', function () {
  if (document.querySelector('#musicOxford-text').getAttribute('visible') === false) {
  document.querySelector('#musicOxford-text').setAttribute('visible', true);
} else if (document.querySelector('#musicOxford-text').getAttribute('visible') === true){
  document.querySelector('#musicOxford-text').setAttribute('visible', false);
}
});

// Close button for musicOxford info box

document.querySelector('#close-musicOxford-box').addEventListener('mouseenter', function () {
  document.querySelector('#close-musicOxford-box').setAttribute('text', 'color: #821219');
});

document.querySelector('#close-musicOxford-box').addEventListener('mouseleave', function () {
  document.querySelector('#close-musicOxford-box').setAttribute('text', 'color: white');
});

document.querySelector('#close-musicOxford-box').addEventListener('click', function () {
  document.querySelector('#musicOxford-text').setAttribute('visible', false);
});

document.querySelector('#roomTwo-roomOne').addEventListener('click', function () {
  document.querySelector('#musicOxford-text').setAttribute('visible', false);
});

document.querySelector('#roomTwo-roomThree').addEventListener('click', function () {
  document.querySelector('#musicOxford-text').setAttribute('visible', false);
});

document.querySelector('#roomTwo-roomFour').addEventListener('click', function () {
  document.querySelector('#musicOxford-text').setAttribute('visible', false);
});

document.querySelector('#roomTwo-roomFive').addEventListener('click', function () {
  document.querySelector('#musicOxford-text').setAttribute('visible', false);
});

document.querySelector('#roomTwo-roomSix').addEventListener('click', function () {
  document.querySelector('#musicOxford-text').setAttribute('visible', false);
});

document.querySelector('#roomTwo-roomSeven').addEventListener('click', function () {
  document.querySelector('#musicOxford-text').setAttribute('visible', false);
});

// Hover handel info box title

document.querySelector('#handel').addEventListener('mouseenter', function () {
  document.querySelector('#handel-title').setAttribute('visible', true);
});

document.querySelector('#handel').addEventListener('mouseleave', function () {
  document.querySelector('#handel-title').setAttribute('visible', false);
});

// Open handel info box

document.querySelector('#handel').addEventListener('click', function () {
  if (document.querySelector('#handel-text').getAttribute('visible') === false) {
  document.querySelector('#handel-text').setAttribute('visible', true);
} else if (document.querySelector('#handel-text').getAttribute('visible') === true){
  document.querySelector('#handel-text').setAttribute('visible', false);
}
});

// Close button for handel info box

document.querySelector('#close-handel-box').addEventListener('mouseenter', function () {
  document.querySelector('#close-handel-box').setAttribute('text', 'color: #821219');
});

document.querySelector('#close-handel-box').addEventListener('mouseleave', function () {
  document.querySelector('#close-handel-box').setAttribute('text', 'color: white');
});

document.querySelector('#close-handel-box').addEventListener('click', function () {
  document.querySelector('#handel-text').setAttribute('visible', false);
});

document.querySelector('#roomThree-roomTwo').addEventListener('click', function () {
  document.querySelector('#handel-text').setAttribute('visible', false);
});

document.querySelector('#roomThree-roomFour').addEventListener('click', function () {
  document.querySelector('#handel-text').setAttribute('visible', false);
});

document.querySelector('#roomThree-roomFive').addEventListener('click', function () {
  document.querySelector('#handel-text').setAttribute('visible', false);
});

document.querySelector('#roomThree-roomSix').addEventListener('click', function () {
  document.querySelector('#handel-text').setAttribute('visible', false);
});

document.querySelector('#roomThree-roomSeven').addEventListener('click', function () {
  document.querySelector('#handel-text').setAttribute('visible', false);
});

// Hover nineteenth info box title

document.querySelector('#nineteenth').addEventListener('mouseenter', function () {
  document.querySelector('#nineteenth-title').setAttribute('visible', true);
});

document.querySelector('#nineteenth').addEventListener('mouseleave', function () {
  document.querySelector('#nineteenth-title').setAttribute('visible', false);
});

// Open nineteenth info box

document.querySelector('#nineteenth').addEventListener('click', function () {
  if (document.querySelector('#nineteenth-text').getAttribute('visible') === false) {
  document.querySelector('#nineteenth-text').setAttribute('visible', true);
} else if (document.querySelector('#nineteenth-text').getAttribute('visible') === true){
  document.querySelector('#nineteenth-text').setAttribute('visible', false);
}
});

// Close button for nineteenth info box

document.querySelector('#close-nineteenth-box').addEventListener('mouseenter', function () {
  document.querySelector('#close-nineteenth-box').setAttribute('text', 'color: #821219');
});

document.querySelector('#close-nineteenth-box').addEventListener('mouseleave', function () {
  document.querySelector('#close-nineteenth-box').setAttribute('text', 'color: white');
});

document.querySelector('#close-nineteenth-box').addEventListener('click', function () {
  document.querySelector('#nineteenth-text').setAttribute('visible', false);
});

document.querySelector('#roomFour-roomTwo').addEventListener('click', function () {
  document.querySelector('#nineteenth-text').setAttribute('visible', false);
});

document.querySelector('#roomFour-roomThree').addEventListener('click', function () {
  document.querySelector('#nineteenth-text').setAttribute('visible', false);
});

document.querySelector('#roomFour-roomFive').addEventListener('click', function () {
  document.querySelector('#nineteenth-text').setAttribute('visible', false);
});

document.querySelector('#roomFour-roomSix').addEventListener('click', function () {
  document.querySelector('#nineteenth-text').setAttribute('visible', false);
});

document.querySelector('#roomFour-roomSeven').addEventListener('click', function () {
  document.querySelector('#nineteenth-text').setAttribute('visible', false);
});

// Hover twentieth info box title

document.querySelector('#twentieth').addEventListener('mouseenter', function () {
  document.querySelector('#twentieth-title').setAttribute('visible', true);
});

document.querySelector('#twentieth').addEventListener('mouseleave', function () {
  document.querySelector('#twentieth-title').setAttribute('visible', false);
});

// Open twentieth info box

document.querySelector('#twentieth').addEventListener('click', function () {
  if (document.querySelector('#twentieth-text').getAttribute('visible') === false) {
  document.querySelector('#twentieth-text').setAttribute('visible', true);
} else if (document.querySelector('#twentieth-text').getAttribute('visible') === true){
  document.querySelector('#twentieth-text').setAttribute('visible', false);
}
});

// Close button for twentieth info box

document.querySelector('#close-twentieth-box').addEventListener('mouseenter', function () {
  document.querySelector('#close-twentieth-box').setAttribute('text', 'color: #821219');
});

document.querySelector('#close-twentieth-box').addEventListener('mouseleave', function () {
  document.querySelector('#close-twentieth-box').setAttribute('text', 'color: white');
});

document.querySelector('#close-twentieth-box').addEventListener('click', function () {
  document.querySelector('#twentieth-text').setAttribute('visible', false);
});

document.querySelector('#roomFive-roomOne').addEventListener('click', function () {
  document.querySelector('#twentieth-text').setAttribute('visible', false);
});

document.querySelector('#roomFive-roomTwo').addEventListener('click', function () {
  document.querySelector('#twentieth-text').setAttribute('visible', false);
});

document.querySelector('#roomFive-roomThree').addEventListener('click', function () {
  document.querySelector('#twentieth-text').setAttribute('visible', false);
});

document.querySelector('#roomFive-roomFour').addEventListener('click', function () {
  document.querySelector('#twentieth-text').setAttribute('visible', false);
});

document.querySelector('#roomFive-roomSix').addEventListener('click', function () {
  document.querySelector('#twentieth-text').setAttribute('visible', false);
});

document.querySelector('#roomFive-roomSeven').addEventListener('click', function () {
  document.querySelector('#twentieth-text').setAttribute('visible', false);
});

// Hover organ info box title

document.querySelector('#organ').addEventListener('mouseenter', function () {
  document.querySelector('#organ-title').setAttribute('visible', true);
});

document.querySelector('#organ').addEventListener('mouseleave', function () {
  document.querySelector('#organ-title').setAttribute('visible', false);
});

// Open organ info box

document.querySelector('#organ').addEventListener('click', function () {
  if (document.querySelector('#organ-text').getAttribute('visible') === false) {
  document.querySelector('#organ-text').setAttribute('visible', true);
} else if (document.querySelector('#organ-text').getAttribute('visible') === true){
  document.querySelector('#organ-text').setAttribute('visible', false);
}
});

// Close button for organ info box

document.querySelector('#close-organ-box').addEventListener('mouseenter', function () {
  document.querySelector('#close-organ-box').setAttribute('text', 'color: #821219');
});

document.querySelector('#close-organ-box').addEventListener('mouseleave', function () {
  document.querySelector('#close-organ-box').setAttribute('text', 'color: white');
});

document.querySelector('#close-organ-box').addEventListener('click', function () {
  document.querySelector('#organ-text').setAttribute('visible', false);
});

document.querySelector('#roomSix-roomOne').addEventListener('click', function () {
  document.querySelector('#organ-text').setAttribute('visible', false);
});

document.querySelector('#roomSix-roomTwo').addEventListener('click', function () {
  document.querySelector('#organ-text').setAttribute('visible', false);
});

document.querySelector('#roomSix-roomThree').addEventListener('click', function () {
  document.querySelector('#organ-text').setAttribute('visible', false);
});

document.querySelector('#roomSix-roomFour').addEventListener('click', function () {
  document.querySelector('#organ-text').setAttribute('visible', false);
});

document.querySelector('#roomSix-roomFive').addEventListener('click', function () {
  document.querySelector('#organ-text').setAttribute('visible', false);
});

document.querySelector('#roomSix-roomSeven').addEventListener('click', function () {
  document.querySelector('#organ-text').setAttribute('visible', false);
});

// Hover present info box title

document.querySelector('#present').addEventListener('mouseenter', function () {
  document.querySelector('#present-title').setAttribute('visible', true);
});

document.querySelector('#present').addEventListener('mouseleave', function () {
  document.querySelector('#present-title').setAttribute('visible', false);
});

// Open present info box

document.querySelector('#present').addEventListener('click', function () {
  if (document.querySelector('#present-text').getAttribute('visible') === false) {
  document.querySelector('#present-text').setAttribute('visible', true);
} else if (document.querySelector('#present-text').getAttribute('visible') === true){
  document.querySelector('#present-text').setAttribute('visible', false);
}
});

// Close button for present info box

document.querySelector('#close-present-box').addEventListener('mouseenter', function () {
  document.querySelector('#close-present-box').setAttribute('text', 'color: #821219');
});

document.querySelector('#close-present-box').addEventListener('mouseleave', function () {
  document.querySelector('#close-present-box').setAttribute('text', 'color: white');
});

document.querySelector('#close-present-box').addEventListener('click', function () {
  document.querySelector('#present-text').setAttribute('visible', false);
});

document.querySelector('#roomSeven-roomOne').addEventListener('click', function () {
  document.querySelector('#present-text').setAttribute('visible', false);
});

document.querySelector('#roomSeven-roomTwo').addEventListener('click', function () {
  document.querySelector('#present-text').setAttribute('visible', false);
});

document.querySelector('#roomSeven-roomThree').addEventListener('click', function () {
  document.querySelector('#present-text').setAttribute('visible', false);
});

document.querySelector('#roomSeven-roomFour').addEventListener('click', function () {
  document.querySelector('#present-text').setAttribute('visible', false);
});

document.querySelector('#roomSeven-roomFive').addEventListener('click', function () {
  document.querySelector('#present-text').setAttribute('visible', false);
});

document.querySelector('#roomSeven-roomSix').addEventListener('click', function () {
  document.querySelector('#present-text').setAttribute('visible', false);
});

// sounds

var haydn = document.querySelector('#haydn');
