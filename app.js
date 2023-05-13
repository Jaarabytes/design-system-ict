$(document).ready(function() {
    // Get all buttons in the body
    var buttons = $("body button");
  
    // When any button is hovered over, change the background color to black and the text color to white
    buttons.click(function() {
      $(this).css({
        "background-color": "black",
        "color": "white"
      });
    });
  });
  