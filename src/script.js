const uploads = [{
        picture: "img/picture_1.png",
        pictureName: "Sad Clown",
        pictureSize: "3 MB"
    },
    {
        picture: "img/picture_2.png",
        pictureName: "Waiting for the train",
        pictureSize: "1.5 MB"
    },
    {
        picture: "img/picture_3.png",
        pictureName: "Little friends",
        pictureSize: "1.5 MB"
    },
    {
        picture: "img/picture_4.png",
        pictureName: "What A Wonderful",
        pictureSize: "4.5 MB"
    },
    {
        picture: "img/picture_5.png",
        pictureName: "Gymnast",
        pictureSize: "2 MB"
    },
    {
        picture: "img/picture_6.png",
        pictureName: "Blue Dandelion Drops",
        pictureSize: "3 MB"
    },
    {
        picture: "img/picture_7.png",
        pictureName: "Poppy for Mom",
        pictureSize: "1.5 MB"
    },
    {
        picture: "img/picture_8.png",
        pictureName: "Drop some droplets",
        pictureSize: "1.5 MB"
    },
    {
        picture: "img/picture_9.png",
        pictureName: "Daisy",
        pictureSize: "4.5 MB"
    },
    {
        picture: "img/picture_10.png",
        pictureName: "Smiling child",
        pictureSize: "2 MB"
    },
];


let text = "";
for (let i = 0; i < uploads.length; i++) {
    text += '<div class="float-left"><div><img src=' + uploads[i]["picture"] + '><h1>' + uploads[i]["pictureName"] + '</h1><p>' + uploads[i]["pictureSize"] + '</p></div></div>';
}
document.getElementById("uploads").innerHTML = text;