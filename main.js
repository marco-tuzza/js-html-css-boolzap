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

$(".chat-list-element").click(conversation)

$("input").keydown(

    function (prevent) {

        if ($(this).val().length == 0 && prevent.which ==32) {

            prevent.preventDefault();

        }
    }
)

function sendMessage() {

    var textMessage = $("footer > input").val().trim()

    if (textMessage != "") {

        var color = $(".template .color")

        var message = $(".template .message")

        message.text(textMessage)

        $(color).removeClass("white").addClass("green")

        var newMessage = $(".template > div").clone()

        $(newMessage).addClass("row-green")

        $(".section-active").append(newMessage)

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

    $(".section-active").append(newMessage)

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

function conversation() {

    var listIndex = $(this).index()

    var conversation = $("section").eq(listIndex)

    var name = $(this).find(".username").text()

    var image = $(this).find(".element-image img")

    var imageSrc = $(image).attr("src")

    console.log(image);

    $(".chat-list-element").removeClass("active")

    $(this).addClass("active")

    $(".section-active").removeClass("section-active")

    $(conversation).addClass("section-active")

    $(".contact-name span").text(name)

    $(".contact img").attr("src" , imageSrc)

}
