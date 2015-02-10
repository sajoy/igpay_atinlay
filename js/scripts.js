var pigLatin = function(sentence) {
  var pigword_array = []
  sentence.split(" ").forEach(function(word){
    var word = word.toLowerCase();
    var me = /^([squ]+|[y]|[^aieouy]+)(\w*)/ ;
    var pigword = (word.replace(me, "$2$1")).concat("ay");
    pigword_array.push(pigword) ;
  });
  return pigword_array.join(" ")
};

$(function() {
  $("form#pig-latin").submit(function(event) {
    var english = $("input#english").val();
    var pigword = pigLatin(english);
    $("#translation").show();
    $("#piglatin").text(pigword);
    event.preventDefault();
  });
});
