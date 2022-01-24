// example of search button

function show(param_div_id) {
    document.getElementById('main_place').innerHTML = document.getElementById(param_div_id).innerHTML;

}

// when you click to the button make false the check

//var buttonKontrol = false;

// function myFunction() {
//     document.getElementById("demo").style.color = "red";
//   }

// document.getElementById('yuklebuton').onclick = function(e) {

// if (document.getElementById('').clicked) {
//     document.getElementById("#arabut").checked = false;
//     alert("button was clicked");
//     console.log("İt was clicked");
// }

document.getElementById('button1').onclick = function() {
    document.getElementById("arabut").checked = false;

    // to check th upload

    // const takenFile = document.getElementById("formFileLg");
    // takenFile.addEventListener("change", function() {
    //     console.log(takenFile.files);
    // });



    // new fetch api

    // const myForm = document.getElementById("myForm");
    // const takenFile = document.getElementById("formFileLg");

    // myForm.addEventListener("submit", e => {
    //     e.preventDefault();

    //     const endpoint = "upload.php";
    //     const formData = new FormData();

    //     formData.append("formFileLg", takenFile.files[0]);

    //     fetch(endpoint, {
    //         method: "post",
    //         body: formData
    //     }).catch(console.error);

    // });


    const myForm = document.getElementById("myForm");
    const takenFile = document.getElementById("formFileLg");

    myForm.addEventListener("submit", (e) => {
        e.preventDefault();


        //let file;
        // const endpoint = "upload.php";
        const formData = new FormData();
        formData.append("formFileLg", takenFile.files[0]);
        let file = takenFile.files[0];
        console.log(file);
        console.log("look here:" +
            formData.append("formFileLg", takenFile.files[0]))



        //file = e.dataTransfer.files[0];

        console.log(formData);
        //console.log(file);

        //dragarea.classList.add('active');
        //displayFile();
        let fileType = file.type;
        console.log(fileType);
        let filename = file.name;
        console.log("dosya ismi :" +
            filename)



        let validRextensions = ['application/vnd.android.package-archive', 'image/jpeg', 'image/jpg'];
        if (validRextensions.includes(fileType)) {
            let fileReader = new FileReader();
            fileReader.onload = () => {
                let fileURL = fileReader.result;
                //let apkurl = "https://34.227.102.253/api/v1/files/sdcard/download/dosya.apk";
                //console.log(apkurl);

                // var url = "https://34.227.102.253/api/v1/files/sdcard/download";
                // let h = new Headers();
                // h.append("Access-Control-Allow-Origin", "*");
                //credentials = btoa("Abdoul:School1927");
                //var uolamayanurl = "http//dshbfndsnddasjdj/"
                //https://cors-anywhere.herokuapp.com/

                // fetch(`${url}/dosya.apk`, {
                //         method: 'PUT',
                //         //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                //         //data: `username=${Abdoul}&password=${School1927}`,
                //         headers: h,
                //         mode: "cors",
                //         body: file
                //     }).then(response => response.json()).then(result => {
                //         console.log('success:', result);
                //     })
                //     .catch(error => {
                //         console.error('Error Here:', error);
                //     });

                doFetch();


                console.log(fileURL);
            };
            fileReader.readAsDataURL(file);

        } else {
            alert('Bu dosya bir Apk dosyası değildir.');
            // dragarea.classList.remove('active');
        }
    });



    // // Select your input type file and store it in a variable
    // const input = document.getElementById('formFileLg');

    // // This will upload the file after having read it
    // const upload = (file) => {
    //     fetch('https://34.227.102.253/api/v1/files/', { // Your POST endpoint
    //         method: 'POST',
    //         headers: {
    //             // Content-Type may need to be completely **omitted**
    //             // or you may need something
    //             //   "Content-Type": "You will perhaps need to define a content-type here"
    //         },
    //         body: file // This is your file object
    //     }).then(
    //         response => response.json() // if the response is a JSON object
    //     ).then(
    //         success => console.log(success) // Handle the success response object
    //     ).catch(
    //         error => console.log(error) // Handle the error response object
    //     );
    // };

    // // Event handler executed when a file is selected
    // const onSelectFile = () => upload(input.files[0]);

    // // Add a listener on your input
    // // It will be triggered when a file will be selected
    // input.addEventListener('change', onSelectFile, false);




}

document.getElementById('button2').onclick = function() {
    document.getElementById("yuklebut").checked = false;


    const charactersList = document.getElementById('charactersList');
    const searchBar = document.getElementById('searchBar');
    let hpCharacters = [];

    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();

        const filteredCharacters = hpCharacters.filter((character) => {
            return (
                character.name.toLowerCase().includes(searchString) ||
                character.house.toLowerCase().includes(searchString)
            );
        });
        displayCharacters(filteredCharacters);
        document.getElementById('charactersList').style.display = "block";
    });

    const loadCharacters = async() => {
        try {
            const res = await fetch('https://hp-api.herokuapp.com/api/characters');
            hpCharacters = await res.json();
            displayCharacters(hpCharacters);
        } catch (err) {
            console.error(err);
        }
    };

    const displayCharacters = (characters) => {
        const htmlString = characters
            .map((character) => {
                return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>House: ${character.house}</p>
                <img src="${character.image}"></img>
            </li>
        `;
            })
            .join('');
        charactersList.innerHTML = htmlString;
    };

    loadCharacters();


}

// search part

const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.house.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
    document.getElementById('charactersList').style.display = "block";
});

const loadCharacters = async() => {
    try {
        const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>House: ${character.house}</p>
                <img src="${character.image}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();


// reload the event

//const reloadtButton = document.querySelector("#arabut");
// Event listeners for reload
//reloadButton.addEventListener("click", reload, false);


// Upload files




// to check th upload

// const takenFile = document.getElementById("formFileLg");
// takenFile.addEventListener("change", function() {
//     console.log(takenFile.files);
// });

// new fetch api

const myForm = document.getElementById("myForm");
const takenFile = document.getElementById("formFileLg");

myForm.addEventListener("submit", e => {
    e.preventDefault();


    const endpoint = "https://34.227.102.253/api/v1/";
    const formData = new FormData();

    formData.append("formFileLg", takenFile.files[0]);

    fetch(endpoint, {
        method: "post",
        body: formData
    }).catch(console.error);

})


function doFetch(ev) {
    let uri = "https://ec2-34-227-102-253.compute-1.amazonaws.com/api/v1/files/sdcard/download";
    //let uri = "https://localhost/apache/no-browse/sample.json";

    let h = new Headers();
    h.append('Accept', 'application/json');

    let req = new Request(`${uri}/dosya.apk`, {
        method: 'PUT',
        headers: h,
        mode: 'cors'
    });

    fetch(req).catch((err) => {
        console.log('ERROR:', err.message);
    });
}