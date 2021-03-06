import axios from 'axios';

const RootPath = 'http://localhost:3004';
const onlineRoot = 'https://jsonplaceholder.typicode.com';

const Get = (path, root) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${root ? onlineRoot : RootPath}/${path}`)
        .then((result)=> {
        resolve(result.data);
    }, (err) => {
        reject(err);
    })
    })
    return promise;
}


//GET
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false);
const getComment = () => Get('comments', true);

const API = {
    getNewsBlog,
    getComment
}

export default API;
