// option 1 : Direct det on html element
//<button onclick="console.log(90)">A button</button>

// Option 2 : add function call in html element
//<button onclick="makeRed()">A button</button>

function makeRed() {
    document.body.style.backgroundColor = "red";
}

// option : 3
const blueColorButton = document.getElementById('makeBlue');
blueColorButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = "blue";
}
// option : 3 (another)
const blueColorButton = document.getElementById('makeBlue');

blueColorButton.onclick = function makeBlue() {
    document.body.style.backgroundColor = "blue";
}


// option 4 : 
const pinkButton = document.getElementById('makePink');
pinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = "pink";
}


// option 4 : another
const pinkButton1 = document.getElementById('makePink');
pinkButton.addEventListener('click', function makePink() {
    document.body.style.backgroundColor = "pink";
});

// option 4 : Final;
const pinkButton2 = document.getElementById('makePink').addEventListener('click', function makePink() {
    document.body.style.backgroundColor = "pink";
});
