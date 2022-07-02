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
    return collection
}
// console.log(addToCollection('made up', 'alex', 2022))
// collection.push(addToCollection('made up', 'alex', 2022))
addToCollection('made up', 'mario', 2022)
console.log(collection)