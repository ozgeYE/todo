$( document ).ready(function() {
    var span = $('<span />').addClass('close').html('\u00D7');
    $('li').append(span);

    $('.addBtn').click(function () {
        var text= $('#myInput').val();
        if(text) {
            var li = jQuery('<li/>', {
                text: text
            }).appendTo('#myUL');

            var span = $('<span />').addClass('close').html('\u00D7');
            li.append(span);
            $('#myInput').val('');
        } else {
            alert('Lütfen bir görev ekleyiniz!');
        }

    });

    $(document).on('click','.close',function(){
        $(this).parent().css( "display", "none" );
    });

    $(document).on('click','li',function(){
        $(this).toggleClass('checked');
    });
});