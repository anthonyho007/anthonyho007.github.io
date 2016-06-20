/* jQuery for the section slide */

//initialize scroll magic
var ctrl = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 'onLeave'
  }
});

// Create scene
$("section").each(function() {

  var name = $(this).attr('id');
  
  new ScrollMagic.Scene({
    triggerElement: this
  })
  .setPin(this)
  .addIndicators({
    colorStart: "rgba(255,255,255,0.5)",
    colorEnd: "rgba(255,255,255,0.5)", 
    colorTrigger : "rgba(255,255,255,1)",
    name:name
    })
  .loglevel(7)
  .addTo(ctrl);
 
});

// Get window height
var wh = window.innerHeight;
 
new ScrollMagic.Scene({
  offset: wh*7
})
.setClassToggle("section#seven", "is-active")
.addTo(ctrl);

