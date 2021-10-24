
// DOM elements
let thoughtButton = document.getElementById('thought-Button');
let contentP = document.querySelector('.main__content__p');
let contentImg = document.querySelector('.main__content__img');

// imgUrlKeyword array


// EventListener modifies DOM when thought-button is clicked
thoughtButton.addEventListener("click", e => {
    
    //append to DOM 
    //TODO once added to BE add dynamic image
    const appendToDOM = (thought, imgUrlKeyword) => {
        contentP.innerHTML = '"' + thought + '"';
        // let imgUrl = './assets/img/' + imgUrlKeyword + '.png';
        // contentImg.setAttribute('src', imgUrl)
    };
    
    //random number for thought's Id
    const randomId = (maxId) => {
        return Math.floor(Math.random() * maxId);
    }

    let randomIdResult = randomId(10);
    console.log(randomIdResult);

    // API request GET passing Id 
    const fetchThought = () => {
        axios.get('http://127.0.0.1:8000/api/thoughts/' + randomIdResult)
            .then(response => {
                const thought = response.data.text;
                appendToDOM(thought, 'hungry');

            })
            .catch(error => {
                console.error(error);
                const thought = 'no thought found in you brain\'s cat';
                appendToDOM(thought, 'hungry');
            });
    };

    fetchThought();
});




