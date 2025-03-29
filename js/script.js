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
         currintIndex = imgs.indexOf(eventInfo.target);
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

    console.log(eventInfo);
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



// let towsum = function(number , target){

//     let left = 0;
//     let right = number.length-1;
//     while(left < right)
//     {
//         const sum = number[left] + number[right]
//         if(sum == target)
//             return [left+1 , right+1]
//         if(sum > target)
//         {
//             right--
//            // console.log(right);
//         }
//         else
//         {
//             left++
//           //  console.log(left);
//         }
//     }
// }
// let numbers = [2, 7, 11, 15 , 4 ,3,5,8,9,2,4];
// let target = 4;

// let result = towsum(numbers ,target)

// console.log(result);


function test02(){
    
for(let i = 1; i<=20; i++){
    if( i%15 == 0) console.log("fizzbuzz")
    else if(i%3 == 0) console.log("buzz")
    else if (i%5==0) console.log("fizz")
    else console.log(i)
    }
}






// function findTwoSum(numbers, target) {
//     const seen = new Map();

//     for (const num of numbers) {
//         const complement = target - num;
//         if (seen.has(complement)) {
//             return [complement, num];
//         }
//         seen.set(num, true);
//     }

//     return null; // Return null if no solution is found
// }


// let numbers = [2, 7, 11, 15 , 4,9,5,3,8 ];
// let target = 11;

// let result = findTwoSum(numbers , target);

// console.log("Results",result);


// const nums = new Set([10, 1, 3, 7, 13, 11, 2, 4 , 5 ]);
// let maxSequence = new Set();

// nums.forEach((num) => {
//   if (!nums.has(num - 1)) { 
//     // console.log(nums.has(num - 1));
//     // console.log(num);
    
//     const sequence = new Set();
//     let currentNum = num;

//     while (nums.has(currentNum)) {
//       sequence.add(currentNum);
//       console.log(sequence , "sequence");
      
//       currentNum++;
//     }

//     if (sequence.size > maxSequence.size) {
//       maxSequence = sequence;
//     }
//   }
// });

 //console.log(maxSequence.size);


const nums = new Set([10, 1, 3, 7, 13, 11, 2, 4 , 5]);
let maxSequence = new Set();
nums.forEach((num)=>{
    if(!nums.has(num - 1))
    {
        const sequence = new Set();
        let currentNum = num
        while(nums.has(currentNum))
        {
            sequence.add(currentNum);
            console.log(sequence);
            currentNum++
        }
        if(sequence.size > maxSequence.size){
            maxSequence = sequence
        }
    }
});
 console.log(maxSequence.size);
