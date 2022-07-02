console.log('***** Music Collection *****')

// collection (empty) array
let collection = [];

// function to add a new object (with param title, artist, yearPublished) to collection
function addToCollection(title, artist, yearPublished){
    let newSong = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(newSong)
    return newSong
}
// console.log(addToCollection('made up', 'alex', 2022))
// collection.push(addToCollection('made up', 'alex', 2022))

// add to collection
addToCollection('never', 'gonna', 1987)
addToCollection('give', 'you', 1987)
addToCollection('up', 'never', 1987)
addToCollection('gonna', 'let', 1987)
addToCollection('you', 'down', 1987)
addToCollection('never', 'gonna', 1987)
addToCollection('run', 'around and', 1987)
addToCollection('desert', 'you', 1987)

// show collection
console.table(collection)

// function to show collection
function showCollection(array){
    console.log('The collection is', array.length, 'long');
    for (let i = 0; i<array.length; i++){
        console.log(array[i].title, 'by', array[i].artist + ', published in', array[i].yearPublished)
    }
}
console.table(showCollection(collection))