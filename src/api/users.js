import { setUserData } from "../util.js";
import { post } from "./api.js";

export async function register(email, password) {
    const result = await post('/users/register', {email, password});
    console.log(JSON.stringify(result));
    alert("Worker successfully added!");
    alert("name " + result.email + ", salary " + result.password);

    const userData = {
        id: result._id,
        email: result.email,
        accessToken: result.accessToken
    };

    setUserData(userData);

    return result;

}