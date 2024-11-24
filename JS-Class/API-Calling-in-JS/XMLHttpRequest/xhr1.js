// console.clear();
// console.log(window.XMLHttpRequest);


const makeRequst = (method, url) => {
    // console.log("get data");
    const xhr = new XMLHttpRequest;
    // console.log(xhr);
    xhr.open(method, url);
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

const getData = () => {
    makeRequst('GET', 'https://jsonplaceholder.typicode.com/posts/1');

}
getData();