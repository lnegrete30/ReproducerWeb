$( document ).ready(function() {
    console.log( "document ready!" );
});

function testFunction(data)
{
    if(data.status === 'begin')
    {
        console.log("ajax request started");
    }
    if(data.status === 'begin')
    {
        console.log("ajax request complete");
    }
}