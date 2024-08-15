console.log("works");

let element = "";
let imgNumber = "";

function toggleFaq(element, imgNumber) {
    paragraph = document.getElementById(element);
    image = document.getElementById(imgNumber);
    console.log(image);
    console.log(paragraph);
    let hidden = paragraph.classList.contains('hidden');
    console.log(hidden);
    
    if (hidden === true) {
        paragraph.classList.remove("hidden");
        image.src="./assets/images/icon-minus.svg";
        hidden = false;

        
    } else {
        paragraph.classList.add('hidden');
        image.src="./assets/images/icon-plus.svg";
        hidden = true;    
    }
}