// Application
var app = {
  init: function() {
    console.log('App : init');

$('.title').hover(function (){
    $( this ).fadeOut( 2000 );
  $( this ).fadeIn( 2000 );

});


},

};
// quand le DOM est prêt, on lance app.init
$(app.init);
