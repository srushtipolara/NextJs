'use server'
const { cookies } = require("next/headers");

async function createCookies(key, value) {
    console.log("key, value",key, value);
    return cookies().set(key, value, { secure: true })
}

async function getCookies(key) {
    console.log("key ", key );
    return cookies().get(key)
}

async function deleteCookies(key){
    return cookies.delete(key)
}

export { createCookies, getCookies , deleteCookies};