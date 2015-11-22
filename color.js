var replace = {"&a": "ChatColor.GREEN", "&b": "ChatColor.AQUA", "&c": "ChatColor.RED", "&d": "ChatColor.LIGHT_PURPLE", "&e": "ChatColor.YELLOW", "&f": "ChatColor.WHITE", "&m": "ChatColor.STRIKETHROUGH", "&n": "ChatColor.UNDERLINE", "&l": "ChatColor.BOLD", "&k": "ChatColor.MAGIC", "&r": "ChatColor.RESET", "&o": "ChatColor.ITALIC", "&0": "ChatColor.BLACK", "&1": "ChatColor.DARK_BLUE", "&2": "ChatColor.DARK_GREEN", "&3": "ChatColor.DARK_AQUA", "&4": "ChatColor.DARK_RED", "&5": "ChatColor.DARK_PURPLE", "&6": "ChatColor.GOLD", "&7": "ChatColor.GRAY", "&8": "ChatColor.DARK_GRAY", "&9": "ChatColor.BLUE"};
$(document).ready(function() {
  $('#input').bind("propertychange change click keyup input paste", function(event) {
    var newVal = $('#input').text();
    var changedFront = false;
    for(var a in replace) {
      newVal = newVal.replace(new RegExp(a, "gi"), "\" + " + replace[a] + " + \"");
    }
    if(stringStartsWith(newVal, "\" + ")) {
      newVal = newVal.slice(3);
      changedFront = true;
    }
    newVal = newVal.split(" + \"\" + ").join(".toString() + ");
    if($('#input').text() != newVal) {
      newVal = (changedFront ? newVal + "\"" : "\"" + newVal + "\"");
    }
    $('#result').text(newVal);
  });
});

function stringStartsWith(string, prefix) {
    return string.slice(0, prefix.length) == prefix;
}
