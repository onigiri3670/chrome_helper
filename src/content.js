$(function(){
  var keysCorresponce = {
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53:	"5",
    54:	"6",
    55:	"7",
    56:	"8",
    57:	"9",
  }
  $("#search h3").each(function(index){
    var idHtml = "id = \"shortcutLink" + index + "\""
    var titleIndexHtml = (text) => "<span " + idHtml + ">" + text + "<span>"
    $(this).parent().prepend(titleIndexHtml("[" + index + "]&nbsp;"));
  });

  $(document).keydown(function (e) {
      if (event.metaKey){
        var keyName = keysCorresponce[e.which]
        console.log("#shortcutLink" + keyName);
        if (keyName){
          $("#shortcutLink" + keyName).click();
        }
      }
  });

});
