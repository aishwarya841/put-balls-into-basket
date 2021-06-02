
var colors = ['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick','crimson']
$('button').click(function(){
    var count = Math.floor(Math.random() * (16 - 0)) + 0;
    var ball = $('.ball')[0];
    $('#basket').prepend('<div class="ball" style="background-color:'+colors[count]+';"></div>');
    

});