$(document).ready(function () {

    // active class on Menu
    $(function() {
        $( ".menu_itens li" ).click(function() {
            $( ".menu_itens li" ).not($( this )).removeClass( "active" );
            $( this ).toggleClass( "active" );
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