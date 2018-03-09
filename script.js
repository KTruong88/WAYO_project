// smooth scroll
$( () => {
  //find anchor tags with #id
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    //asign the current #id as a jQuery function
    var target = this.hash;
    var $target = $(target);

    $('html, body').animate({
      'scrollTop': $target.offset().top
    }, 1000, 'swing');
  });
});

// datepicker calendar
$( () => {
  $('#datepicker').datepicker({
    yearRange: "-100:+0",
    dateFormat: 'M, dd yy'
  });
});

// dropdown timepicker
$( () => {
    $('.timepicker').timepicker({
      timeFormat: 'h:mm:ss p'
    });
});

// slideshow



$( () => {
    var counter = 0;
    var pics = [
      './images/img1.png',
      './images/gallery2.jpg',
      './images/img3.png',
      './images/img4.png',
      './images/img5.png',
      './images/img6.png',
      './images/img7.png',
      './images/img8.png'
    ];

  $('.slideshow-img').click( () => {
    counter = (counter+1) % pics.length;
    $('.slideshow-img').children('img').attr('src', pics[counter] )
    $('.counter').html(counter + 1 + "/8")
  });
})



// About Q/A + - toggle




$( () => {
  $('.db1').click( () => {
    $('.db1').children('img').toggle();
  });
});

$(() => {
  $('.db2').click(() => {
    $('.db2').children('img').toggle();
  });
});

$(() => {
  $('.db3').click(() => {
    $('.db3').children('img').toggle();
  });
});

$(() => {
  $('.db4').click(() => {
    $('.db4').children('img').toggle();
  });
});

$(() => {
  $('.db5').click(() => {
    $('.db5').children('img').toggle();
  });
});

$(() => {
  $('.db6').click(() => {
    $('.db6').children('img').toggle();
  });
});

$(() => {
  $('.db7').click(() => {
    $('.db7').children('img').toggle();
  });
});

$(() => {
  $('.db8').click(() => {
    $('.db8').children('img').toggle();
  });
});

$(() => {
  $('.db9').click(() => {
    $('.db9').children('img').toggle();
  });
});

$(() => {
  $('.db10').click(() => {
    $('.db10').children('img').toggle();
  });
});

$(() => {
  $('.db11').click(() => {
    $('.db11').children('img').toggle();
  });
});

$(() => {
  $('.db12').click(() => {
    $('.db12').children('img').toggle();
  });
});

$( () => {
  $('.db1').click ( () => {
    $('.db1').toggleClass('big')
    $('.dropdown-text').toggle('.dropdown-text')
  })
})

$(() => {
  $('.db2').click(() => {
    $('.db2').toggleClass('big')
    $('.dropdown-text2').toggle('.dropdown-text2')
  })
})

$(() => {
  $('.db3').click(() => {
    $('.db3').toggleClass('big3')
    $('.dropdown-text3').toggle('.dropdown-text3')
  })
})

$(() => {
  $('.db4').click(() => {
    $('.db4').toggleClass('big4')
    $('.dropdown-text4').toggle('.dropdown-text4')
  })
})

$(() => {
  $('.db5').click(() => {
    $('.db5').toggleClass('big5')
    $('.dropdown-text5').toggle('.dropdown-text5')
  })
})

$(() => {
  $('.db6').click(() => {
    $('.db6').toggleClass('big')
    $('.dropdown-text6').toggle('.dropdown-text6')
  })
})

$(() => {
  $('.db7').click(() => {
    $('.db7').toggleClass('big7')
    $('.dropdown-text7').toggle('.dropdown-text7')
  })
})

$(() => {
  $('.db8').click(() => {
    $('.db8').toggleClass('big')
    $('.dropdown-text8').toggle('.dropdown-text8')
  })
})

$(() => {
  $('.db9').click(() => {
    $('.db9').toggleClass('big')
    $('.dropdown-text9').toggle('.dropdown-text9')
  })
})

$(() => {
  $('.db10').click(() => {
    $('.db10').toggleClass('big')
    $('.dropdown-text10').toggle('.dropdown-text10')
  })
})

$(() => {
  $('.db11').click(() => {
    $('.db11').toggleClass('big')
    $('.dropdown-text11').toggle('.dropdown-text11')
  })
})

$(() => {
  $('.db12').click(() => {
    $('.db12').toggleClass('big12')
    $('.dropdown-text12').toggle('.dropdown-text12')
  })
})