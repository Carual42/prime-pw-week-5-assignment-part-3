console.log('***** Music Collection *****')

// collection (empty) array
let collection = [];

// function to add a new object (with param title, artist, yearPublished) to collection
function addToCollection(title, artist, yearPublished){
    let newSong = {
        'title': title,
        'artist': artist,
        'year published': yearPublished
    }
    collection.push(newSong)
    return newSong
}
// console.log(addToCollection('made up', 'alex', 2022))
// collection.push(addToCollection('made up', 'alex', 2022))
addToCollection('never', 'gonna', 1987)
addToCollection('give', 'you', 1987)
addToCollection('up', 'never,', 1987)
addToCollection('gonna', 'let', 1987)
addToCollection('you', 'down', 1987)
addToCollection('never', 'gonna', 1987)
addToCollection('run', 'around and', 1987)
addToCollection('desert', 'you', 1987)
console.log(collection)