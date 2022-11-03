import {clearUserData, getUserData} from "../util.js";

const host = 'http://localhost:3030';

async function request(url, method, data) {
    const options = {
        method,
        headers: {}
    };

    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }
    const userData = getUserData();
    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    try {
        const res = await fetch(host + url, options);

        if (res.ok === false) {
            if (res.status === 403) {
                clearUserData();
            }
            throw new Error();
        }

        if (res.status === 204) {
            return res;
        } else {
            return await res.json();
        }
    } catch (err) {
        alert("This worker already exists!");
        throw err;
    }
}

export async function post(url, data) {
    return request (url, 'post', data);
}


