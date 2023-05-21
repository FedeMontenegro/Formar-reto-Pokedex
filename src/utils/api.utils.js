import axios from "axios"

const instance = axios.create({
    headers: {
        Accept: "application/json",
        "Content-Type": "applicaciont/json",
    }
})

export const get = async url => {
    try {
        const { data, status } = await instance.get(url)
        return {ok: true, data, status}
    } catch (error) {
        return {ok: false, error: error, status: 500, data}
    }
}