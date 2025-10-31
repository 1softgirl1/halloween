$(document).ready(function() {
    $('#start_btn').click(function() {
        $('#formModal1')
            .removeClass('hidden')
            .css('display', 'flex')
            .hide()
            .fadeIn(300);
    });

    $('#next_btn1').click(function() {
        const player1Name = $('#player1Input').val().trim();
        if (!player1Name) {
            alert('Введите имя первого игрока!');
            return;
        }

        $('#formModal2')
            .removeClass('hidden')
            .css('display', 'flex')
            .hide()
            .fadeIn(300);
        $('#formModal1').fadeOut(300);
    });

    $('#next_btn2').click(function() {
        const player1Name = $('#player1Input').val().trim();
        const player2Name = $('#player2Input').val().trim();

        if (!player2Name) {
            alert('Введите имя второго игрока!');
            return;
        }

        const playerLabels = $('#mainPage .text-2xl');
        playerLabels.eq(0).text(player1Name);
        playerLabels.eq(1).text(player2Name);

        $('#formModal2').fadeOut(300);
        $('#startPage').addClass('hidden');
        $('#mainPage').removeClass('hidden');
    });

    $(document).keydown(function(e) {
        if (e.key === "Escape") {
            $('.modal').fadeOut(300);
        }
    });
});

