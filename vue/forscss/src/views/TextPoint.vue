<template>
  <body>
    <!-- NOTE: By the moment this experiment only goes smooth on Chrome, I need to make some changes.. -->


<!--
==================
==================
Main Content
==================
==================
-->
<!-- Gooey Container -->
<div class="goo-container">
  <!-- Content Section -->
  <section>  
  </section>
  <!-- Background Gradient -->
  <div class="goo-box">
    <!-- Gooey Cursor -->
    <div class="cursor goo-cursor"></div>
  </div>
</div>

<!-- Content Section -->
<section>
  <h1>Gooey effect layout!</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur enim <a href="#">possimus id soluta</a>, error aspernatur omnis optio ratione minima eveniet. Facere sint unde illo velit distinctio <a href="#">officia accusantium</a>, vel nisi eaque placeat. Quod et obcaecati possimus eos architecto optio sint corrupti dolorum aut nulla commodi ipsam voluptate, asperiores enim, omnis. Beatae itaque soluta tempore nemo!</p>
  <p>Dolore sit, iusto labore, saepe eveniet fuga. Eveniet soluta eligendi, similique, atque <a href="#">numquam accusamus</a>, possimus assumenda ipsam! Voluptate deserunt, et, totam repellat maiores consectetur, enim nam architecto voluptatem laudantium minima beatae.</p>
  <button>Button</button>
</section>

<!-- Gooey Container -->
<section class="goo-container">
  <!-- Content Section -->
  <section>  
    <p>Minus quos, in ipsam ratione fugiat velit qui, ut natus inventore <a href="#">possimus nobis</a> vel dolores maxime sed quia temporibus voluptatum sunt repellat corrupti?</p>
  </section>
  <!-- Background Gradient -->
  <div class="goo-box">
    <!-- Gooey Cursor -->
    <div class="cursor goo-cursor"></div>
  </div>
</section>

<!-- Content Section -->
<section>
  <p>Praesentium obcaecati dolores amet facilis dignissimos voluptate, dolorum, et tempora beatae, veniam vitae <a href="#">laborum illo</a>, voluptatum nesciunt quasi rem. Dignissimos quidem reiciendis facilis iste nostrum dolor obcaecati facere ea voluptas ut qui omnis dolorem, eveniet perferendis, aliquam maxime dolores expedita sed at illum. Enim atque adipisci culpa porro, <a href="#">veritatis</a> natus iusto tenetur doloribus facere dignissimos assumenda voluptas quisquam, in officiis. Voluptatum sapiente consectetur <a href="#">perspiciatis blanditiis</a> porro minima, optio omnis ratione dignissimos natus provident a, accusantium doloremque in quo laudantium, ea deleniti?</p>
</section>

<!-- Gooey Container -->
<section class="goo-container">
  <!-- Content Section -->
  <section>  
    <p>Perferendis dolore amet vel labore voluptas quam expedita, illo tempore, consequuntur <a href="#">pariatur quis obcaecati</a>?</p>
  </section>
  <!-- Background Gradient -->
  <div class="goo-box">
    <!-- Gooey Cursor -->
    <div class="cursor goo-cursor"></div>
  </div>
</section>

<!-- Content Section -->
<section>
  <p>Cumque temporibus adipisci, dignissimos iste quos quod necessitatibus dicta placeat deleniti, molestias! Voluptatibus ea pariatur, 
    vitae eaque nihil cum <a href="#">cupiditate</a> 
    rem nulla asperiores esse! Atque rem iste placeat rerum sed cupiditate. 
    Deleniti a facere asperiores atque alias laborum, cumque, maiores debitis quod nam, est aliquid nostrum, sint accusantium.</p>
  <p>Est illo quia porro, alias reiciendis veritatis incidunt nemo perferendis! Quoms dolorum quisquam qui 
    <a href="#">vero commodi</a> 
    molestias cumque est distinctio provident, deleniti magnam, quidem, numquam aperiam possimus blanditiis debitis quibusdam et. 
    Dolores soluta ea quis impedit quidem consequuntur, debitis architecto tempore <a href="#">magni molestiae</a>, 
    quisquam ullam dolorum quod explicabo assumenda est, eveniet cupiditate iure harum nulla pariatur ad! Fugit sint quibusdam molestias ipsum sed, 
    doloremque debitis deleniti facere eius autem quia officiis, id pariatur nostrum non exercitationem odio!</p>
  <p>Recusandae, delectus, in! Quidem accusantium nemo impedit cumque. Voluptatem et dolore quibusdam labore nesciunt praesentium, 
    laboriosam optio magnam, iste animi quidem. Officiis dolor adipisci error quod repudiandae obcaecati, 
    facilis enim laboriosam ullam unde veniam ex sed eum maiores id illo repellendus voluptatum fugiat eveniet voluptas, 
    perspiciatis aperiam aliquam tempore fuga? Cum similique, voluptatem id assumenda ab eum quia <a href="#">aliquam fugiat</a>, 
    fugit praesentium. Voluptates quae, sapiente eos et optio perferendis cum vel corporis sed, nam nisi sit, aliquam fugiat. Alias, 
    ipsum nemo recusandae atque praesentium.</p>
  <button>Button</button>
</section>

<!-- Gooey Container -->
<div class="goo-container">
  <!-- Content Section -->
  <section>  
    <p><a href="http://tobiasbogliolo.com" target="_blank">by Tobias Bogliolo</a></p>
  </section>
  <!-- Background Gradient -->
  <div class="goo-box">
    <!-- Gooey Cursor -->
    <div class="cursor goo-cursor"></div>
  </div>
</div>


<!--
==================
==================
SVG Filters
==================
==================
-->
<svg 
  xmlns="http://www.w3.org/2000/svg" 
  version="1.1">
  <defs>
    <filter id="goo">
      <feGaussianBlur 
        in="SourceGraphic" 
        stdDeviation="13" 
        result="goo-blur" 
      />
      <feColorMatrix 
        in="goo-blur" 
        mode="matrix" 
        values="
          1 0 0 0 0  
          0 1 0 0 0  
          0 0 1 0 0  
          0 0 0 20 -11" 
      />
    </filter>
  </defs>
</svg>


<!--
==================
==================
True Cursor
==================
==================
-->
<div class="cursor true-cursor"></div>


<!--
==================
==================
Google Fonts
==================
==================
-->
<link href="https://fonts.googleapis.com/css?family=Montserrat:200,400,600" rel="stylesheet">
  </body>
</template>

<script>
import $ from 'jquery';
var throttleOn = false;
var actionLock = false;
var throttleTimer = 10; 

function throttle(e){
  if(throttleOn){ 
    actionLock = true;
  }
  if(!actionLock){
    throttleOn = true;
    setTimeout(function(e){ 
      throttleOn = false; 
      console.log(e)
    }, throttleTimer);
    cursorTrack(e);
  }
  actionLock = false
}

//Funtions:
function cursorTrack(e){

  //True Cursor:
  const bodyOffset = $('body').offset();
  $(".true-cursor").css({
    "left": e.pageX - bodyOffset.left,
    "top": e.pageY - bodyOffset.top
  });

  //Gooey Cursor (only one box):
  // boxOffset = $('.goo-box').offset();
  // $(".goo-cursor").css({
  //   "left": e.pageX - boxOffset.left,
  //   "top": e.pageY - boxOffset.top
  // });

  //Gooey Cursor (multiple boxes):
  $(".goo-box").each(function(){
    const boxOffset = $(this).offset();
    $(this).find(".goo-cursor").css({
      "left": e.pageX - boxOffset.left,
      "top": e.pageY - boxOffset.top
    });
  });

}

//Handler:
$(window).mousemove(function(e){
  throttle(e);
});


//=======================
//Interactive elements
//=======================
$('.interactive, a, button, input').on({
  mouseenter: function(){
    $(".true-cursor").css({
      "animation": "truepointeron ease .4s forwards"
    });
  },
  mouseleave: function(){
    $(".true-cursor").css({
      "animation": "truepointeroff ease .4s forwards"
    });
  }
});

$('.interactive, a, button, input').on({
  mouseenter: function(){
    $(".goo-cursor").css({
      "animation": "goopointeron ease .4s forwards"
    });
  },
  mouseleave: function(){
    $(".goo-cursor").css({
      "animation": "goopointeroff ease .4s forwards"
    });
  }
});


//=======================
//Detect when the mouse leaves the window
//=======================
$(window).on({
  mouseleave: function(){
    $(".cursor").css({
      "opacity": "0"
    });
  },
  mouseenter: function(){
    $(".cursor").css({
      "opacity": "1"
    });
  }
});

export default {
  name:'TextPoint'
}
</script>

<style scoped>
  * {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  /* Remove Cursor */
  cursor: none;
}

html, body {
  position: relative;
  margin: 0;
  /* Font */
  font-family: 'Montserrat', sans-serif;
  color: #333333;
  line-height: 1.7em;
  font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  text-size-adjust: 100%;
  /* Prevent horizontal scrollbar */
  overflow-x: hidden;
}

/* Layout */
section {
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
  padding: 2em 0;
}

/* Headings */
h1 {
  margin: 1.8em 0 1.2em 0;
  font-size: 2.8em;
  line-height: .94em;
  font-weight: 200;
}

/* Links */
a {
  color: #FAB599;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 1px solid #FAB599;
}

.goo-container a {
  color: #FFFFFF;
  border-bottom: 1px solid #FFFFFF;
}

/* Buttons */
button {
  padding: 1.4em 2.6em;
  letter-spacing: .12em;
  background: #EEEEEE;
  border: none;
  outline: none;
  transition: ease 2s;
}

button:hover {
  background: #D1D1D1;
}


/* 
==================
==================
Gooey Effect
==================
==================
*/
.goo-container {
  position: relative;
}

.goo-box {
  position: absolute;
  height: 100%;
  width: 140%;
  top: 0;
  left: 0;
  margin: auto;
  margin-left: -20%;
  background: linear-gradient(90deg, #FAEFCC, #FAB599);
  -webkit-filter: url("#goo");
  filter: url("#goo");
  transform: translateZ(0);
  z-index: -1;
}

/* Remove undesired SVG space */
svg {
  width: 0;
  height: 0;
  /*display: none;*/ /* Don`t use "display none" or Firefox will omit the effect. */
}


/* 
==================
==================
Cursor
==================
==================
*/
.cursor {
  pointer-events: none;
  position: absolute;
  width: 50px;
  height: 50px;
  margin-top: -25px;
  margin-left: -25px;
  border-radius: 50%;
  background: #FAB599;
  will-change: left, top, transform, background; 
  transition: linear 20ms;
  transform: translateZ(0);
  z-index: 99999;
  /* Hide Element */
  left: -500%;
}

.true-cursor {
  background: rgba(250,181,153,.35);
}

/* Cursor animations: True Cursor */
@keyframes truepointeron {
  0% {
    transform: scale(1);
    background: rgba(250,181,153,.35);
  }
  100% {
    transform: scale(.3);
    background: #EF8B8B;
  }
}

@keyframes truepointeroff {
  0% {
    transform: scale(.3);
    background: #EF8B8B;
  }
  100% {
    transform: scale(1);
    background: rgba(250,181,153,.35);
  }
}

/* Cursor animations: Gooey Cursor */
@keyframes goopointeron {
  0% {
    transform: scale(1);
    background: #FAB599;
  }
  100% {
    transform: scale(0);
    background: #EF8B8B;
  }
}

@keyframes goopointeroff {
  0% {
    transform: scale(0);
    background: #EF8B8B;
  }
  100% {
    transform: scale(1);
    background: #FAB599;
  }
}
</style>