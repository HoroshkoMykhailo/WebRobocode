$(document).ready(function() {
    // Interactive showcase
    $('.interactive .item').hover(function() {
        let info = $(this).data('info');
        $('#info-box').text(info).fadeIn();
    }, function() {
        $('#info-box').fadeOut();
    });

    // Add custom items
    $('#add-item-form').submit(function(event) {
        event.preventDefault();
        let itemName = $('#item-name').val();
        if (itemName) {
            $('#custom-showcase').append(`<div class="item">${itemName}</div>`);
            $('#item-name').val('');
        }
    });
});

