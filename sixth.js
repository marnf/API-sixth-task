



const clickBtn = () => {

    const value = document.getElementById('inputField').value
    wordBooks(value)

}






const wordBooks = (mainValue) => {

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${mainValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => valueOfWord(data))
}



const valueOfWord = (fol) => {

    const container = document.getElementById('container');

    container.innerText = "";
    const viewOfContainer = document.createElement('div');

    console.log(fol[0].meanings[0].definitions[0].example)
    viewOfContainer.innerHTML = `

    <h3>definition:${fol[0].meanings[0].definitions[0].example}</h3>
    
    <h4>synonyms:${fol[0].meanings[0].synonyms}</h4>

    `

    container.appendChild(viewOfContainer)
}





