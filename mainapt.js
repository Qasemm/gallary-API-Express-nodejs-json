document.getElementById('aa').addEventListener('click', addData);
let page = 1;
var photoArray = [];

function data() {
    // const myheaders = new Headers();
    // myheaders.append('Authorization', 'Bearer ETnS0SprqU6-h4vaPmVUxO0SJ4bOZGyqO7QU');
    fetch('http://localhost:3000/photos/' + page, {
            method: 'GET'
                // headers: myheaders,
        })
        .then(Response => Response.json())
        .then(result => {
            photoArray = photoArray.concat(result);
            console.log(photoArray);
            page++;
            addData();
        });
}


function addData() {
    const html = photoArray.map((item, index) => {
        return '<img class="img1" src="' + item.url + '" data-id="' + index + '" onClick="togglePhoto(event)">';
    });
    document.getElementById('add1').innerHTML = html.join('');
}

function togglePhoto(event) {
    console.log(num);
    console.log(arr);
    document.getElementById("aa").style.visibility = "visible"
    const index = event.target.getAttribute('data-id');
    console.log(index)
    document.getElementById("add").innerHTML = '<div class= "imgDiv"><img   src="' + arr[index].url + '" class="img3"><div class="text-block">' + arr[index].title + ' </div></div>';
}
document.getElementById("close").addEventListener('click', close);

function close() {
    document.getElementById("aa").style.visibility = "hidden";
}

// function addData (){
//   console.log(arr);
//   renderGallery(arr) 
// }