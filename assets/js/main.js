$(document).ready(function () {

    // active class on Menu
    $(function() {
        $( ".menu_itens li" ).click(function() {
            $( ".menu_itens li" ).not($( this )).removeClass( "active" );
            $( this ).toggleClass( "active" );

            $(".menu_itens li:not(.active)").each(function(){
                //console.log('id: ' + this.id);
                $("i.bxs-" + this.id).addClass("bx-" + this.id).removeClass("bxs-" + this.id);
            });
        });

        
        // Info - under construction page ---- btn_close_modal
        $( ".modal #btn_close_modal" ).click(function() {
            console.log(" clicou no user/folio");
            $(".menu_itens li" ).removeClass( "active");
            $(".menu_itens li:not(.active)").each(function(){
                $("i.bxs-" + this.id).addClass("bx-" + this.id).removeClass("bxs-" + this.id);
            });

            $("#home" ).addClass( "active");
            $("i.bx-home").addClass("bxs-home").removeClass("bx-home");

        }); 
  
    });
    

    // animation hover effect - add/remove
    $( ".menu_itens li" ).on({
        mouseenter: function() {      
            if ($(this).hasClass("active") != true) {
                $("i.bx-" + this.id).addClass("bxs-" + this.id).removeClass("bx-" + this.id);
                //$("i.bx-" + this.id).removeClass("bx-" + this.id);
            }

        }, mouseleave: function() {
            if ($(this).hasClass("active") != true) {
                $("i.bxs-" + this.id).addClass("bx-" + this.id).removeClass("bxs-" + this.id);
                //$("i.bx-" + this.id).removeClass("bxs-" + this.id);
            }
        }
    });



    


 

});