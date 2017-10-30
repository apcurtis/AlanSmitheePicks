                               //  FUNCTION FOR DRUMKIT  //

function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if(!audio) return; //stop the function from running 
	audio.currentTime = 0; //RETURN TO START
	audio.play();
	key.classList.add('playing');	
}
function removeTransition(e) {
	if (e.propertyName !== 'transform') return;
	this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

//  FOR ROULETTE GENERATOR  //
var request = new XMLHttpRequest();
var btn = document.getElementById('btn');

btn.addEventListener('click', function() {
  movieRequest();
})

function movieRequest() {
  var ranNum = Math.round(Math.random() * 996);
  //console.log(ranNum);
  request.open('GET', `https://api.themoviedb.org/3/movie/${ranNum}?api_key=a580255e2eed3582a9180cf58d1787ad`);

  request.onload = function() {
    var requestData = JSON.parse(request.responseText);
    var h2 = document.getElementById('title');
    var p = document.getElementById('descrip');
    var p2 = document.getElementById('budget');
    var p3 = document.getElementById('year');
    
    var img = document.getElementById('img');
    //console.log(img);
    img.style.display = "none";
    img.src = "http://image.tmdb.org/t/p/w185/" + requestData.poster_path ;
    img.style.display = "inline-block";
    
    
    if(requestData.status_code == 34) {
      movieRequest();
    } else {
   
      if(img.src == "http://image.tmdb.org/t/p/w185/" + requestData.poster_path) {
         //console.log(requestData);
      h2.innerHTML = requestData.original_title;
      p.innerHTML = requestData.overview;
      p3.innerHTML = requestData.release_date;
      }
     
    
      
    }
   
    
  }
  
  request.send();
}


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    //
    // document.addEventListener("touchstart", touchStartHandler, false).classList.toggle("show");
    //
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//
// window.addEventListener("touchstart", false) = function(event) {
//   if (!event.target.matches('.dropbtn')) {

//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
//