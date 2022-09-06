const init = () => {
  
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', (event) =>{
        event.preventDefault();
        console.log(event);
    const input = event.target.searchByID.value;
        console.log(input);


        fetch(`http://localhost:3000/movies/${input}`)
        .then(res => res.json())
        .then(data => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');

            title.innetText = data.title;
            summary.innerText = data.summary;
        });
    });   
}   

document.addEventListener('DOMContentLoaded', init);