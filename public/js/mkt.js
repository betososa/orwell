$(document).ready(function() {
    var count = 160;

    $('.textarea_message').after('<div class="count">Caractéres: 160</div>');

    $('.textarea_message').keydown(function(){
        count = 160 - $(this).val().length;
        $(this).next().html('Caracteres ' + count);
        if($(this).val().length >= 158){
            $(this).val($(this).val().substring(0, 160));
            return false
        }
    });
    
    $( '#program' ).click(function() {
        $.ajax({
         url: '/pauta',
         type: 'POST',
         data: {
             yy: $( '#date' ).val().split("-")[0],
             mm: parseInt($( '#date' ).val().split("-")[1]) - 1,
             dd: $( '#date' ).val().split("-")[2],
             hh: $( '#time' ).val().split(":")[0],
             min: $( '#time' ).val().split(":")[1],
             ss: 00,
             mms: 00,
             twit: $( '#twit' ).val()
         },
         success: function ( data, status, req ) {
            console.log('Success');
            console.log('yy: ' + $( '#date' ).val().split("-")[0]);
            console.log('mm: ' + $( '#date' ).val().split("-")[1]);
            console.log('dd: ' + $( '#date' ).val().split("-")[2]);
            console.log('hh: ' + $( '#time' ).val().split(":")[0]);
            console.log('min: ' + $( '#time' ).val().split(":")[1]);
         },
         error: function( data, status, req ) {
            console.log('Error');
        }
    });

    })
    


});

