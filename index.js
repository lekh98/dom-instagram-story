var arr = [{
    dp:"https://wallpapercave.com/wp/wp2265480.jpg",
    story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjEh7b6oz_nJiqLvwR0a-VzqbovzT6AzZs3Q&usqp=CAU"
},{
    dp:"https://e0.pxfuel.com/wallpapers/906/1006/desktop-wallpaper-katherine-langford-heroine-katherine-langford-hollywood-heroine-thumbnail.jpg",
    story:"https://r1.ilikewallpaper.net/iphone-11-wallpapers/download/83183/katherine-langford-the-wrap-photoshoot-4k-iphone-11-wallpaper-ilikewallpaper_com_200.jpg"

},{
    dp:"https://w0.peakpx.com/wallpaper/727/778/HD-wallpaper-katherine-langford-actress-beautiful-beauty-blue-eyes-celebrity-hollywood-red-red-lips.jpg",
    story:"https://pbs.twimg.com/media/EHAUUwCWoAEwvsv.jpg"
},{dp:"https://c.wallhere.com/photos/bc/f8/Katherine_Langford_women_actress_brunette_long_hair_blue_eyes_looking_at_viewer-1731515.jpg!s1",
story:"https://i.pinimg.com/474x/88/9a/5b/889a5b5aaca3bcc9dbb70f691d203959.jpg"},]

var clutter = "";
var stories=document.querySelector("#stories");
arr.forEach(function(element,index){
    clutter+=`<div class="story">
    <img id="${index}" src="${element.dp}" alt="">

</div>`
})
stories.innerHTML = clutter;
stories.addEventListener("click",function(details){
  document.querySelector("#full-screen").style.display = "block" 
  document.querySelector("#full-screen").style.backgroundImage =`url(${arr[details.target.id].story})` 

  setTimeout(function(){
    document.querySelector("#full-screen").style.display = "none" 

  },3000)

});






/*---------------------------------------------
printing hello 5 times
--------------------------------------------------
var arr=[1,2,3,4,5]

arr.forEach(function(){
    console.log("hello")
})
-------------------------------------------------
printing element
--------------------------------------------------
var arr=[1,2,3,4,5]

arr.forEach(function(element){
    console.log(element)
})
------------------------------------
printing hello 5 times
--------------------------------------
var arr=[1,2,3,4,5]
var clutter=""

arr.forEach(function(){
    clutter+="hello"
})
console.log(clutter)
----------------------------------------------
element ko print kardega concat karke
----------------------------------------
var arr=[1,2,3,4,5]
clutter =""

arr.forEach(function(element){
    clutter+=element
})
console.log(clutter);*/