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
        let itemImgUrl = $('#item-img-url').val();
        if (itemName && itemImgUrl) {
            $('#custom-showcase').append(`
                <div class="item">
                    <img src="${itemImgUrl}" alt="${itemName}">
                    <p>${itemName}</p>
                </div>
            `);
            itemImgUrl = '';
        }
        else if(itemName) {
            $('#custom-showcase').append(`<div class="item"><p>${itemName}</p></div>`);
        }
        else{
            alert("Enter product name");
        }
        $('#item-name').val('');
        $('#item-img-url').val(`${itemImgUrl}`);
    });
});

