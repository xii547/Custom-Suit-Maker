var action = false,
  clicked = false
var Owl = {
  init: function () {
    Owl.carousel()
  },

  carousel: function () {
    var owl
    var el = document.getElementsByClassName('owl-item')
    var elBtn = document.getElementsByClassName('owlPrev')
    $(document).ready(function () {
      owl = $('.owlCarousel').owlCarousel({
        items: 1,
        center: true,
        nav: false,
        dots: true,
        margin: 10,
        mouseDrag: false,
        touchDrag: false,
        dotsContainer: '.test',
        navText: ['prev', 'next'],
      })

      $('.owlNext').on('click', function () {
        owl.trigger('next.owl.carousel', 500)
      })

      $('.owlPrev').on('click', function () {
        owl.trigger('prev.owl.carousel', 500)
      })

      $('.progress-reports-bar').on('click', 'li', function (e) {
        owl.trigger('to.owl.carousel', [$(this).index(), 300])
      })

      function hasClass(elem, className) {
        return new RegExp(' ' + className + ' ').test(
          ' ' + elem.className + ' '
        )
      }

      $('.owlNext , .progress-reports-bar , .owlPrev').click(function () {
        app.modalFunction()
        if (hasClass(el[0], 'active')) {
          // $('.backCarousel').hide().removeClass('activeC')
          // $('.frontCarousel').show().addClass('activeC')
          $('.bar1').addClass('active')
          $('.bar2 , .bar3 , .bar4 , .bar5 , .bar6, .bar7, .bar8').removeClass(
            'active'
          )
        } else if (hasClass(el[1], 'active')) {
          $('.bar1 , .bar2').addClass('active')
          $('.bar3 , .bar4 , .bar5 , .bar6, .bar7, .bar8').removeClass('active')
        } else if (hasClass(el[2], 'active')) {
          $('.bar1 , .bar2 , .bar3 ').addClass('active')
          $('.bar4 , .bar5 , .bar6, .bar7, .bar8').removeClass('active')
        } else if (hasClass(el[3], 'active')) {
          $('.bar1 , .bar2 , .bar3 , .bar4').addClass('active')
          $('.bar5 , .bar6, .bar7, .bar8').removeClass('active')
        } else if (hasClass(el[4], 'active')) {
          $('.bar1 , .bar2 , .bar3 , .bar4 , .bar5').addClass('active')
          $('.bar6, .bar7, .bar8').removeClass('active')
        } else if (hasClass(el[5], 'active')) {
          $('.bar1 , .bar2 , .bar3 , .bar4, .bar5, .bar6').addClass('active')
          $('.bar7, .bar8').removeClass('active')
        } else if (hasClass(el[6], 'active')) {
          $('.bar1 , .bar2 , .bar3 , .bar4 ,.bar5, .bar6, .bar7').addClass(
            'active'
          )
          $('.bar8').removeClass('active')
          if (document.getElementById('sv2').checked) {
            $(
              '.bar1 , .bar2 , .bar3 , .bar4 , .bar5 , .bar6, .bar7, .bar8'
            ).addClass('active')
            $('.owlNext').hide()
            $('#owlSubmit').show()
            $(function () {
              $('.updateF').click(function () {
                if ($(this).is(':checked')) {
                  $('#owlSubmit').hide()
                  $('#owlUpdate').show()
                }
              })
            })
          }
        } else if (hasClass(el[7], 'active')) {
          $(
            '.bar1 , .bar2 , .bar3 , .bar4 , .bar5 , .bar6, .bar7, .bar8'
          ).addClass('active')
          $('.owlNext').hide()
          $('#owlSubmit').show()
          $(function () {
            $('.updateF').click(function () {
              if ($(this).is(':checked')) {
                $('#owlSubmit').hide()
                $('#owlUpdate').show()
              }
            })
          })
        }
      })

      $('#sv2').click(function () {
        $('.owl-item:nth-child(7)').hide()
        $('.progressType7 > a').hide()
        $('.finalSelection:nth-child(8)').hide()
        $('.finalSelection:nth-child(9)').hide()
        $('.cuffstyle').hide()
      })
      $('#sv1').click(function () {
        $('.owl-item:nth-child(7)').show()
        $('.progressType7 > a').show()
        $('.finalSelection:nth-child(8)').show()
        $('.finalSelection:nth-child(9)').show()
        $('.cuffstyle').show()
      })

      // $('.owlNext').click(function () {
      //   if (hasClass(el[4], 'active')) {
      //     if (document.getElementById('sv2').checked) {
      //       $('.bar1 , .bar2 , .bar3 , .bar4 ,.bar5, .bar6, .bar7').addClass(
      //         'active'
      //       )
      //       $('.bar8, .bar9, .bar10').removeClass('active')
      //       $('.bar5').addClass('activeC')
      //     }
      //   }
      // })
      // $('.owlPrev').click(function () {
      //   if (hasClass(el[6], 'active')) {
      //     if (document.getElementById('sv2').checked) {
      //       $('.bar1 , .bar2 , .bar3 , .bar4 ,.bar5, .bar6, .bar7').addClass(
      //         'active'
      //       )
      //       $('.bar5').removeClass('noClick')
      //       $('.bar8, .bar9, .bar10').removeClass('active')
      //     }
      //   }
      // })

      $('.owlSubmit').click(function () {
        app.modalFunction()
        $('#Mymodal').modal('show')
      })

      $('.updateC').click(function () {
        $('.backCarousel').hide().removeClass('activeC')
        $('.frontCarousel').show().addClass('activeC')
        $('.owlPrev').show()
        $('.owlNext').hide()

        $('.owlSubmit').show()
        $('.updateC').hide()
        app.modalFunction()
        $('.updateF').prop('checked', false)
        if (document.getElementById('sv2').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 6)
        } else {
          $('#myCarousel').trigger('to.owl.carousel', 7)
        }
        $('#owlUpdate').hide()
      })

      $('#owlUpdate').click(function () {
        $('#owlPrev').hide()
        $('#owlUpdate').hide()
        $('.owlNext').hide()
        $('#updateC').show()
        if (document.getElementById('collarF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 1)
        }
        if (document.getElementById('fitF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 0)
        }
        if (document.getElementById('customcollarF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 1)
        }

        if (document.getElementById('sleeveF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 5)
        }

        if (document.getElementById('cuffF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 6)
        }
        if (document.getElementById('customcuffF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 6)
        }

        if (document.getElementById('tuckF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 4)
        }

        if (document.getElementById('chestpocketF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 2)
        }
        if (document.getElementById('placketF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 3)
        }
      })

      $('input[type="radio"]').click(function () {
        $('.owlUpdate').hide()
      })

      $('.owlPrev, .progress-reports-bar').click(function () {
        $('#owlNext').show()
        $('#owlSubmit').hide()
        $('#owlUpdate').hide()
      })

      $('.onC').click(function () {
        $('.frontCarousel').hide().removeClass('activeC')
        $('.backCarousel').show().addClass('activeC')
      })

      $('.offC').click(function () {
        $('.backCarousel').hide().removeClass('activeC')
        $('.frontCarousel').show().addClass('activeC')
      })
    })
  },
}

//

//owl

$(document).ready(function () {
  Owl.init()
})

//default check

function check() {
  document.getElementById('jfit').firstChild.checked = true
  document.getElementById('jcollar').firstChild.checked = true
  document.getElementById('jcustomcollar').firstChild.checked = true
  document.getElementById('jsleeve').firstChild.checked = true
  document.getElementById('jcuff').firstChild.checked = true
  document.getElementById('jcustomcuff').firstChild.checked = true
  document.getElementById('jplacket').firstChild.checked = true
  document.getElementById('jtuck').firstChild.checked = true
  document.getElementById('jpocket').firstChild.checked = true
}
