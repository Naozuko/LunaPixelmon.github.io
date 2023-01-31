//observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


//Header IP
const ipAddy = document.querySelector('.ip-addy');

ipAddy.onclick = function() {
  document.execCommand("copy");
}

ipAddy.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", "Play.LunaPixelmon.net");
  }
});

//Discord

function discordOpen(){
    const url = 'https://discord.gg/DMbnN594v6';
    window.open(url);
}

//jQuery Social Side Bar
$('.open-intro').click(function() {
  $('.intro-wrap').animate({
  //opacity: 1,
  left: '0',
}, 500, function() {
  // Animation complete.
});
  $('.open-intro').hide();
  $('.close-intro').show();
});


$('.close-intro').click(function() {
  $('.intro-wrap').animate({
  //opacity: 0.25,
  left: '-80',
}, 400, function() {
  // Animation complete.
});
  $('.open-intro').show();
  $('.close-intro').hide();
});



//  gym change image
function pictureChange(clicked_id)
{
  document.getElementById("current-gym").src= "images/gym/" + clicked_id.slice(0, -7) + ".jpg";
}



$('.owl-carousel').owlCarousel({
  loop:true,
  margin:20,
  nav: false,
  dots: true,
  dotsEach: true,
  stagePadding: 100,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:2
      }
  }
})