var source = $("#entry-template").html()
var template = Handlebars.compile(source)

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

$(document).on("click",".fa-chevron-down", dropdown)

$(document).on("click",".dropdown, header, footer, aside", hideDropdown)

$(document).on("click",".dropdown-element-cancel", cancel)

$(".notification").click(notification)

$("input").keydown(

    function (prevent) {

        if ($(this).val().length == 0 && prevent.which ==32) {

            prevent.preventDefault();

        }
    }
)

function sendMessage() {

    if (textMessage != "") {

        var textMessage = $("footer > input").val().trim()

        var date = new Date()

        var hour = date.getHours()

        var minutes = ("0" + date .getMinutes()).slice(-2)

        var clock = hour + ":" + minutes

        var context = {
            "message" : textMessage,
            "clock" : clock,
            "class" : "green",
            "row-class": "row-green"
        }

        var html = template(context)

        $(".section-active").append(html)

        $(".chat-list-element.active").prependTo(".chat-list")

        $("footer > input").val("")

        $("footer > .fas").toggleClass("active");

        $(".section-active").animate({
                scrollTop: $('.row:last-child').offset().top
            }, 0);

        setTimeout(read, 2000)

        setTimeout(statusWrite, 2000)

        setTimeout(reply, 4000);

        setTimeout(statusOnline, 4000)

    };
};

function reply() {

    var date = new Date()

    var hour = date.getHours()

    var minutes = ("0" + date .getMinutes()).slice(-2)

    var clock = hour + ":" + minutes

    var context = {
        "message" : "Ok",
        "clock" : clock,
        "class" : "white",
        "row-class": "row-white"
    }

    var html = template(context)

    $(".section-active").append(html)

    $(".chat-list-element.active").prependTo(".chat-list")

    $("div.active").find(".element-message > span").text("Ok")

    $(".section-active").animate({
            scrollTop: $('.row:last-child').offset().top
        }, 0);
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

    $(".chat-list-element").removeClass("active")

    $(this).addClass("active")

    $(".section-active").removeClass("section-active")

    $(conversation).addClass("section-active")

    $(".contact-name span").text(name)

    $(".contact img").attr("src" , imageSrc)

}

function dropdown() {

    var dropdown = $(this).next()

    dropdown.toggleClass("dropdown-show")
}

function hideDropdown() {

    var dropdown = $(".dropdown-show")

    dropdown.removeClass("dropdown-show")

}

function cancel() {

    var element = $(this).closest(".row")

    element.hide()

}

function read() {

    $("section .verify").addClass("read")

}

function notification() {

    alert("Cliccando su ok attiverai le notifiche desktop")

    $(".notification").slideUp()

    $(".chat-list").addClass("chat-list-notification")

}

function statusWrite() {

    $(".contact-access > span").text("Sta scrivendo...")

    $(".chat-list-element.active").find(".element-message > span").text("Sta scrivendo...")

    $(".chat-list-element.active").find(".element-message").addClass("status-write")

}

function statusOnline() {

    $(".contact-access > span").text("Online")

    $(".chat-list-element.active").find(".element-message").removeClass("status-write")

}
