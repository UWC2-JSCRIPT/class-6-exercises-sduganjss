$( document).ready( function()  {
    

    // Create a new <a> element containing the text "Buy Now!"
    // with an id of "cta" after the last <p>
    const $newLink = $('<a>');
    $newLink.attr('id', 'cta');
    $newLink.text('Buy Now!');
    $('main').append($newLink);

    // Access (read) the data-color attribute of the <img>,
    // log to the console
    const $image = $('img')
    const imgDataColor = $image.data('color')

    console.log(imgDataColor);

    // Remove (delete) the last paragraph
    // (starts with "Available for purchase now…")
    $('p').remove();

    // Update the third <li> item ("Turbocharged"),
    // set the class name to "highlight"

    $('li').eq(2).addClass('highlight');
   

// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"
$newLink.on('click', function (e) {
        $newLink.remove();
        const $addedToCart = $('<p>');
        $addedToCart.text('Added to Cart');
        $('main').append($addedToCart);
})
});




