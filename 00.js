num++;
console.log(num);

function data1() {
    const myheaders = new Headers();
    myheaders.append('Authorization', 'Bearer ETnS0SprqU6-h4vaPmVUxO0SJ4bOZGyqO7QU');
    fetch('https://gorest.co.in/public-api/photos?page=/' + num, {
            method: 'GET',
            headers: myheaders,
        })
        .then(Response =>
            Response.json())
        .then(result => {
            arr = result.result,
                addData()
        });

    const html = arr.map((item, index) => {
        return '<img class="img1" src="' + item.thumbnail + '" data-id="' + index + '" onClick="togglePhoto(event)">';
    });
    document.getElementById('add1').innerHTML += html.join('');



    num++;
    console.log(num);
}