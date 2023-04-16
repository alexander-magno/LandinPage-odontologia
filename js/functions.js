$(function(){
    maskTelefone();

    $('.menu-mobile').click(function(){
        $(this).find('ul').slideToggle()
    })

    function maskTelefone(){
        $('input[type=tel]').mask('(99) 9999-9999')
    }
})