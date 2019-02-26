/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = [];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
$("#add").click(function() {
    console.log("hi")

    var name=$("#song").val();
    var artist=$("#artist").val();
    var songLength=$("#length").val();
    var imageUrl=$("#image").val();
    var linkAddress=$("#link").val();

    songs.push({"name": name,
            "artist": artist,
            "length": songLength,
            "image": imageUrl,
            "address": linkAddress
    })
    console.log(songs);
})

songs.forEach(function(song)
    {
    $("#songs").append("<li>" + song.name + "</li>")
        console.log()




function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
