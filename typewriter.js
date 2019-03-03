class Typewriter {
    constructor(repeatEvery) {
        this.repeatEvery = repeatEvery;
        this.write = function(text, targettedElement) {
            targettedElement.innerHTML = ""; // Make innerHTML blank so we can do our stuff
            var length = text.length;
            var currentlyOn = 0;
            var currentText = "";
            var main = window.setInterval(function(targettedElement, length) {
                if (currentlyOn == length - 1) clearInterval(main);
                currentText += text[currentlyOn];
                console.log(currentText);
                targettedElement.innerHTML = currentText;
                currentlyOn++;
            }, this.repeatEvery, targettedElement, length)
        }
    }
}
