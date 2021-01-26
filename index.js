const sound = document.getElementById('sokpagnavath-sound');
const clickedsound = document.getElementById('sokpagnavath-click-sound');
clickedsound.onclick = function(){
    sound.play();
};
// document.addEventListener('contextmenu', function(hacked){
//     hacked.preventDefault();
// });
const darkClicked = document.getElementById('dark');
const lightClicked = document.getElementById('light');
darkClicked.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('change-body-background');
    document.querySelector('body').classList.toggle('change-body-color');
    lightClicked.style.display="block";
    darkClicked.style.display="none";
    document.getElementById('sokpagnavath-image').style.border="none";
});
lightClicked.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('change-body-background');
    document.querySelector('body').classList.toggle('change-body-color');
    lightClicked.style.display="none";
    darkClicked.style.display="block";
    document.getElementById('sokpagnavath-image').style.border="1px solid #eee";
})




