const axios = require ("axios"). default;
const qs = require("querystring");

const config = {

    headers:{

            "Content-Type": "application/x-ww-form-urlencoded"
    }


}



const getToken = async() => {
    let token;
    const promise = await axios
        .post(
            "https://accounts.spotify.com/api/token",
            qs.stringify({
                grant_type: "client_credentials",
                client_id: "2e0cc7b0c3774cb891df6b1351621607",
                client_secret: "8774b36bb62f43508f1ac91bd356ea84",
            }),
            config
        )
    token = promise.data;
    return token.access_token;
 }

 module.exports = getToken;