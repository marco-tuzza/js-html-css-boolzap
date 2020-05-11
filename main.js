$( "footer > input" ).focusin(function() {

  $("footer > .fa-paper-plane").addClass("active");

  $("footer > .fa-microphone").removeClass("active");

}

);


$(".fa-paper-plane").click(

    function () {

        var textMessage = $("footer > input").val()

        console.log(textMessage);

        var messaggio = $("#new-message")

        messaggio.text(textMessage)

        var newMessage = $(".template .row-green").clone()

        $("section").append(newMessage)

        $("footer > input").val("")

        $("footer > .fas").toggleClass("active");
}

);
