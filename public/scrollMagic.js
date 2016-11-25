
$(function() {

var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: '100%'}});

// build scenes
 new ScrollMagic.Scene({triggerElement: "#sec1"})
        .setClassToggle("#menu1", "active") // add class toggle
        .addIndicators()
        .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#sec2"})
        .setClassToggle("#menu2", "active") // add class toggle
        .addIndicators()
        .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#sec3"})
        .setClassToggle("#menu3", "active") // add class toggle
        .addIndicators()
        .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#sec4"})
        .setClassToggle("#menu4", "active") // add class toggle
        .addIndicators()
        .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#sec5"})
        .setClassToggle("#menu5", "active") // add class toggle
        .addIndicators()
        .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#sec6"})
        .setClassToggle("#menu6", "active") // add class toggle
        .addIndicators()
        .addTo(controller);
)}

$(function() {
  var controller2 = new ScrollMagic.Controller();

  var scene1 = new ScrollMagic.Scene({
    triggerElement: ''
  })


})
