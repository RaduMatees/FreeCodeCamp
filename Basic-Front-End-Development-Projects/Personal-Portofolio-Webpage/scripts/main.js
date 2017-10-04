$(document).ready(function() {
  scrollNavbar()
  projectsHover()
  buttonHover()
})

function projectsHover() {
  $('.my-work-img-container').hover(function() {
    $(this).find(".my-work-img-container-descr").show()
    $(this).css('box-shadow', 'inset 0 0 0 2000px rgba(0,0,0,0.6)')
    $(this).css('transform', 'scale(1.05, 1.05)')
  }, function() {
    $(this).find(".my-work-img-container-descr").hide()
    $(this).css({'transform': 'scale(1, 1)', 'box-shadow': 'none'})
  })
}

function buttonHover() {
  $('.my-work-btn').hover(function() {
    $(this).css('background-color', '#24292E')
    $(this).find('.my-icon').css('transform', 'scale(1.3, 1.3)')
    $(this).css('color', '#ededed')
  }, function() {
    $(this).css('background-color', '#ededed')
    $(this).find('.my-icon').css('transform', 'scale(1, 1)')
    $(this).css('color', '#24292E')
  })
}

function scrollNavbar() {
  window.addEventListener("scroll", function() {
    if (window.scrollY < 50) {
        $('.my-navbar').css('background', 'rgba(30, 30, 30, 0)');
    }
    else {
        $('.my-navbar').css('background', 'rgb(30, 30, 30)');
    }
},false);
}
