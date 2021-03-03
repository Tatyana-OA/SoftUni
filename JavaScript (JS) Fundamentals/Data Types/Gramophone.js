function solve(band, album, song) {
let bandNameLength = band.length 
let albumNameLength = album.length
let songNameLength = song.length

let songDuration = (bandNameLength*albumNameLength)*songNameLength/2;
let rotations = songDuration/2.5
let finalResult = Math.ceil(rotations)
console.log (`The plate was rotated ${finalResult} times.`)
}

solve ('Black Sabbath', 'Paranoid', 'War Pigs')
