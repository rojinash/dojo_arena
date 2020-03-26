$(document).ready(function () {

    // clone our select player <select> so we don't have to copy paste it
    var playersSelect = $(".available-players").clone().attr("id", "select-player2");
    playersSelect.appendTo("#select-player menu");
  
  
    // LISTENERS
    $("#select-arena .select-btn").click(function () {
      selectArena($(this).text());
    });
  
    $(".available-players").change(function () {
      selectPlayer(this);
    });
  
    function selectArena(arenaType) {
      // add background image
      $("body").css("background-image", `url(img/arena/${arenaType}.jpg)`);
  
      // hide select arena menu
      $("#select-arena").hide();
      // show select player menu
      $("#select-player").show();
    }
  
    function selectPlayer(self) {
      var selectedPlayer = self.value;
      var playerNum = 1;
  
      if (self.id === "select-player2") {
        playerNum = 2;
      }
  
      $(`#player${playerNum}`).remove();
      
      var playerImgElem = `<img class="d-ib player" id="player${playerNum}" src="img/player/${selectedPlayer}.png">`;
      $("body").append(playerImgElem);
    }
  });