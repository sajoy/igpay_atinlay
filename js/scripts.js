var pigLatin = function(word) {
  var vowels = "aeiou"


  var first_letter = word[0]
  var second_letter = word[1]
  var third_letter = word[2]

  if (vowels.indexOf(first_letter)!==-1) {
    var pigword = word.concat("ay");
    return pigword
  } else if (first_letter === "q") {
    var pigword = word.slice(2).concat(word[0]).concat(word[1]).concat("ay");
    return pigword
  } else if (second_letter === "q") {
    var pigword = word.slice(3).concat(word[0]).concat(word[1]).concat(word[2]).concat("ay");
    return pigword
  } else {

    if (vowels.indexOf(second_letter) !==-1) {
      var pigword= word.slice(1).concat(word[0]).concat("ay");
      return pigword
    } else {
      if (vowels.indexOf(third_letter) !==-1) {
        var pigword = word.slice(2).concat(word[0]).concat(word[1]).concat("ay");
        return pigword
      } else {
        var pigword = word.slice(3).concat(word[0]).concat(word[1]).concat(word[2]).concat("ay");
        return pigword
      };
    };
  };
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
