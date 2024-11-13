var toggleBut = document.getElementById("toggle-skills");
var SKI = document.getElementById('skills');
toggleBut.addEventListener('click', function () {
    if (SKI.style.display === 'none') {
        SKI.style.display = 'block';
    }
    else {
        SKI.style.display = 'none';
    }
});
