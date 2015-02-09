describe("pigLatin", function() {
  it("will add -ay to the end of words starting with a vowel", function() {
    expect(pigLatin("amy")).to.equal("amyay")
  });

  it("will move the first consonant to the end of the word and add -ay for words beginning with one consonant only", function() {
    expect(pigLatin("father")).to.equal("atherfay");
  });

  it("will move the first and second consonant to the end of the word and add -ay for words beginning with two consonants only", function() {
    expect(pigLatin("friend")).to.equal("iendfray");
  });

  it("will move the first, second, and third consonants to the end of the word and add -ay for words that begin with three consonats", function() {
    expect(pigLatin("three")).to.equal("eethray");
  });

  it("will move the first and second consonant to the end of hte word and add -ay for words beginning with qu", function() {
    expect(pigLatin("question")).to.equal("estionquay");
  });

  it("will move the first, second, and third letters of a word that begins with a consonant + q + u", function() {
    expect(pigLatin("squeal")).to.equal("ealsquay");
  });

  it("return a sentence of pig latin words from an inputed sentence", function() {
    expect(pigLatin("hello dear friend")).to.equal("ellohay earday iendfray")
  });
});
