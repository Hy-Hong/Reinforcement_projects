const WHITE_KEY = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEY = ['s', 'd', 'g', 'h', 'j'];

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

keys.forEach(key =>{
    key.addEventListener('click', () => onPlaySound(key));
});

document.addEventListener('keydown', event => {
    const keyboard = event.key;
    const whiteKeysIndex = WHITE_KEY.indexOf(keyboard);
    const blackKeysIndex = BLACK_KEY.indexOf(keyboard);
    // console.log(whiteKeys[whiteKeysIndex])
    if(!event.repeat){
        if(whiteKeysIndex > -1 ){
            onPlaySound(whiteKeys[whiteKeysIndex]);
        }
        // console.log(blackKeys[blackKeysIndex])
        if(blackKeysIndex > -1 ){
            onPlaySound(blackKeys[blackKeysIndex]);
        }
    }
});

function onPlaySound(key){
    const audioKey = document.getElementById(key.dataset.note);
    audioKey.currentTime = 0;
    audioKey.play();
    key.classList.add('active');
    audioKey.addEventListener('ended', () => {
        key.classList.remove('active');
    })
}