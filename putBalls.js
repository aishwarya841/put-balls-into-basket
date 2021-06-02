
var colors = ['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick','crimson','black']
$('button').click(function(){
    var count = Math.floor(Math.random() * (17 - 0)) + 0;
    var ball = $('.ball')[0];
    $('#basket').prepend('<div class="ball" style="background-color:'+colors[count]+';"></div>');
    

});