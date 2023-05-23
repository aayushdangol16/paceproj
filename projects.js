window.addEventListener('resize', function() {
  adjustLayout();
});

function adjustLayout() {
  var windowWidth = window.innerWidth;

  if (windowWidth < 768) {
    document.querySelector('.project-container').style.flexDirection = 'column';
    document.querySelectorAll('.left-box, .middle-box, .right-box').forEach(function(box) {
      box.style.width = '100%';
      box.style.height = 'auto';
    });
  } else {
    document.querySelector('.project-container').style.flexDirection = 'row';
    document.querySelectorAll('.left-box, .middle-box, .right-box').forEach(function(box) {
      box.style.width = '30%';
      box.style.height = '400px';
    });
  }
}

adjustLayout();
