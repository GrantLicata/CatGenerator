let imgFile;
$.get("https://aws.random.cat/meow", function(data){
    imgFile = data.file;
    console.log(imgFile);
})

$('button').click(function(){
    $('img').attr('src', imgFile);
    $.get("https://aws.random.cat/meow", function(data){
        imgFile = data.file;
    })
})