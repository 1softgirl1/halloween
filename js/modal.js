$(document).ready(function() {
    $('#start_btn').click(function() {
        $('#formModal1')
            .removeClass('hidden')
            .css('display', 'flex')
            .hide()
            .fadeIn(300);
    });

    $('#next_btn1').click(function() {
        $('#formModal2')
            .removeClass('hidden')
            .css('display', 'flex')
            .hide()
            .fadeIn(300);
        $('#formModal1').fadeOut(300);
    });

    $('#next_btn2').click(function() {
        $('#formModal2').fadeOut(300);
        $('#startPage').addClass('hidden')
        $('#mainPage').removeClass('hidden')

    });

    $(document).keydown(function(e) {
        if (e.key === "Escape") {
            $('.modal').fadeOut(300);
        }
    });
});

document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});
