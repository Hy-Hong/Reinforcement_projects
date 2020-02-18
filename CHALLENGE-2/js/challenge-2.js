const KEYS = new Map(
    [
        //white keys
        ['a', 'C'], ['s', 'Gb'], ['d', 'G'], ['f', 'Eb'], ['j', 'E'], ['k', 'F'], ['l', 'Bb'],
        //Black keys
        ['z', 'B'], ['c', 'Db'], ['v', 'D'], ['n', 'Ab'], ['m', 'A']
    ]
);

// const KEYS = new Map();
// KEYS.set('a', 'C');
// KEYS.set('s', 'Gb');
// KEYS.set('d', 'G');
// KEYS.set('f', 'Eb');
// KEYS.set('j', 'E');
// KEYS.set('k', 'F');
// KEYS.set('l', 'Bb');
// KEYS.set('z', 'B');
// KEYS.set('c', 'Db');
// KEYS.set('v', 'D');
// KEYS.set('n', 'Ab');
// KEYS.set('m', 'A');

// console.log(KEYS.get('d'))

const NOTES = new Map([
    ['C', 'notes/C.mp3'], ['Gb', 'notes/Gb.mp3'], ['G', 'notes/G.mp3'], ['Eb', 'notes/Eb.mp3'], ['E', 'notes/E.mp3'],
    ['F', 'notes/F.mp3'], ['Bb', 'notes/Bb.mp3'], ['B', 'notes/B.mp3'], ['Db', 'notes/Db.mp3'], ['D', 'notes/D.mp3'],
    ['Ab', 'notes/Ab.mp3'], ['A', 'notes/A.mp3']
]);


// const NOTES = new Map();
// NOTES.set('C', 'notes/C.mp3');
// NOTES.set('Gb', 'notes/Gb.mp3');
// NOTES.set('G', 'notes/G.mp3');
// NOTES.set('Eb', 'notes/Eb.mp3');
// NOTES.set('E', 'notes/E.mp3');
// NOTES.set('F', 'notes/F.mp3');
// NOTES.set('Bb', 'notes/Bb.mp3');
// NOTES.set('B', 'notes/B.mp3');
// NOTES.set('Db', 'notes/Db.mp3');
// NOTES.set('D', 'notes/D.mp3');
// NOTES.set('Ab', 'notes/Ab.mp3');
// NOTES.set('A', 'notes/A.mp3');

// console.log(NOTES.size)
// console.log(NOTES.get('C'))

const keyElements = document.querySelectorAll('.key');
// console.log(audioKey)
keyElements.forEach( key => {
    key.addEventListener('click', () => {
        // console.log(key);
        const divElement = key.dataset.NOTES;
        onPlaySound(divElement);
    });
});

document.addEventListener('keydown', el => {
    if(!el.repeat){
        const notesId = KEYS.get(el.key);
        if(notesId != null){
            onPlaySound(notesId);
        }
    }
})

// Play Sound
function onPlaySound(key){
    const audioKey = NOTES.get(key);
    var Sound = new Audio(audioKey);
    Sound.play();
}
