var imgs = Array.from( document.querySelectorAll(".item img"));
var lightBoxContainer = document.getElementById("lightBoxContainer")
var lightBoxItem = document.getElementById("lightBoxItem")
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close")
var currintIndex = 0 ;

for(var i = 0 ; i<imgs.length ; i++ )
{
    imgs[i].addEventListener("click", function(eventInfo){

        var currintIndex = imgs.indexOf(eventInfo.target);


     //   console.log(currintIndex)




        var imgSrc = eventInfo.target.getAttribute("src")

        lightBoxItem.style.backgroundImage = "url("+imgSrc+")";

        lightBoxContainer.classList.replace("d-none","d-flex") ;     
    })

}


function nextSlid()
{
   
    currintIndex++;
    console.log(currintIndex)

    if(currintIndex ==imgs.length )
    {
        currintIndex = 0;
    }
    var imgSrc = imgs[currintIndex].getAttribute("src")

    lightBoxItem.style.backgroundImage = "url("+imgSrc+")";
}


function prevSlid()
{
    currintIndex--;

    if(currintIndex < 0 )
    {
        currintIndex = imgs.length -1
    }

  
console.log(currintIndex)

    var imgSrc= imgs[currintIndex].getAttribute("src");
    

    lightBoxItem.style.backgroundImage = "url("+imgSrc+")";
}

function closeSlid()
{
  //  lightBoxContainer.classList.replace("d-flex","d-none") ;
  lightBoxContainer.classList.replace('d-flex','d-none')
    
}



nextBtn.addEventListener("click",nextSlid);

prevBtn.addEventListener("click" ,prevSlid);

closeBtn.addEventListener("click",closeSlid); 

function test(eventInfo)
{
    if(eventInfo.target == lightBoxContainer )
    {
        lightBoxContainer.classList.replace("d-flex", "d-none")
    }


}

lightBoxContainer.addEventListener("click",test)



document.addEventListener("keydown",function(eventInfo){

    if(eventInfo.code =="ArrowRight")
    {
        nextSlid()
    }

    else if(eventInfo.code=="ArrowLeft")
    {
        prevSlid()
    }
    else if(eventInfo.code == "Escape")
    {
        closeSlid()
    }


   
})
