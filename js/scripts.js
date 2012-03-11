$(function(){
    /* LIMPA INPUT HOME */
    var news = "Insira seu e-mail aqui...";
    $("#nossaNewsletter input").focus(function(){
        if( $(this).val() == "Insira seu e-mail aqui..."){
            $(this).val("");
        }else{
            
        }
    });
    $("#nossaNewsletter input").blur(function(){
        if(news == " " || $(this).val().length == 0){
            $(this).val(news);
        }
    });
    /* / LIMPA INPUT HOME */
    
    /* ABAS CONTATO */
    $("#guardaAbas a").click(function(){
        var ind = $("#guardaAbas a").index(this);
        $("#guardaAbas a").removeClass('marcado');
        $(this).addClass('marcado');
        $(".conteudoAba").slideUp(500);
        $(".conteudoAba").eq(ind).slideDown(500);
    });
    $("#guardaAbas a").eq(0).trigger('click');
    /* / ABAS CONTATO */
});