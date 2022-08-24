import axios from "axios";

async function getData(user_id){
    const {data : user} = await axios("https://jsonplaceholder.typicode.com/users/"+user_id);
    const {data : post} = await axios("https://jsonplaceholder.typicode.com/posts/"+user_id);

    console.log(user);
    console.log(post);
}

export default getData;