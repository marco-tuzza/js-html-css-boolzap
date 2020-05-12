$( "footer > input" ).focusin(

    function() {

        $("footer > .fa-paper-plane").addClass("active");

        $("footer > .fa-microphone").removeClass("active");

    }

);

$( "footer > input" ).focusout(

    function() {

        var textMessage = $("footer > input").val();

        if (textMessage == false) {

            $("footer > .fa-paper-plane").removeClass("active");

            $("footer > .fa-microphone").addClass("active");
        }

    }

);

$( "footer > input" ).keypress(

    function(event) {

        if (event.which == 13) {

            sendMessage();

        };

    }
);

$(".fa-paper-plane").click(sendMessage);

$(".search i").click(findContact)

function sendMessage() {

    var textMessage = $("footer > input").val().trim()

    if (textMessage != "") {

        var color = $(".template .color")

        var message = $(".template .message")

        message.text(textMessage)

        $(color).removeClass("white").addClass("green")

        var newMessage = $(".template > div").clone()

        $(newMessage).addClass("row-green")

        $("section").append(newMessage)

        $("footer > input").val("")

        $("footer > .fas").toggleClass("active");

        setTimeout(reply, 1000);

    };

};

function reply() {

    var textMessage = "Ok"

    var message = $(".template .message")

    message.text(textMessage)

    var color = $(".template .color")

    $(color).removeClass("green").addClass("white")

    var newMessage = $(".template > div").clone()

    $(newMessage).addClass("row-white")

    $("section").append(newMessage)

};

// Ricerca utenti: ​scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo icontatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo“mar” rimangono solo Marco e Martina)

function findContact() {

    var search = $("aside input").val()

    $(".username").each(

        function() {

            var user = $(this).text()

            if (user == search) {

                var userNumber = $(this).index()

                var userDisplay = $(".chat-list-element").eq(userNumber)

                $(".chat-list-element").hide()

                userDisplay.show()

            } else {

                $(".chat-list-element").show()

            }

        }
    )

}
