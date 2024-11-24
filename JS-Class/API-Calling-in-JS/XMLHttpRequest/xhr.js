// console.clear();
// console.log(window.XMLHttpRequest);


const getData1 = () => {
    // console.log("get data");

    const xhr = new XMLHttpRequest;
    // console.log(xhr);

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/');
    // 

    xhr.onload = () => {
        let data = xhr.response;
        console.log(data);

    }

    xhr.onerror = () => {
        console.log('erroe is here')
    }

    xhr.send();

}
getData1();

