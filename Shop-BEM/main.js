$('#back-to-top').on('click', function() {
  $('html, body').animate({
    scrollTop: 0
  }, 1000);
});
var template = $('#js-plpTemplate').html(),
  mainRow = $('#mainRow'),
  colections = $('.colections');

colections.on('click', function(e) {
  e.preventDefault();
  colections.parent().removeClass('active');
  $(this).parent().addClass('active');
  var cat = $(this).data('kolekcija');
  display(cat, template);
});

display(null, template);

function display(categoria, template) {
  $.ajax({
    url: "https://raw.githubusercontent.com/Danilovesovic/shop/master/shop.json",
    type: 'get',
    dataType: 'json'
  }).then(function(response) {

    var dataToRender;
    if (!categoria) {
      dataToRender = response;
    } else if (categoria == 'female') {
      dataToRender = response.filter(function(elem) {
        return elem.colection == "female";
      });
    } else if (categoria == 'male') {
      dataToRender = response.filter(function(elem) {
        return elem.colection == "male";
      })
    } else if (categoria == 'novaKolekcija') {
      dataToRender = response.filter(function(elem) {
        return elem.newCol == true;
      })
    } else if (categoria == 'popular') {
      dataToRender = response.filter(function(elem) {
        return elem.popular == true;
      })
    } else if (categoria == 'action') {
      dataToRender = response.filter(function(elem) {
        return elem.action == true;
      })

    }



    var output = Mustache.render(template, {
      products: dataToRender
    });
    mainRow.html(output);
    // var femaleCollection = response.filter(function(el) {
    //   return el.colection == 'female';
    // });





  })
};
