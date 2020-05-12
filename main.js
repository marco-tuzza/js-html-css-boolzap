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

$("aside input").keyup(findContact)

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

function findContact() {

    var search = $("aside input").val().toLowerCase().trim();

    $(".chat-list-element").each(

        function() {

            var user = $(this).find(".username").text().toLowerCase()

            if (user.includes(search)) {

                $(this).show();

            } else {

                $(this).hide();

            }
        }
    )
}
