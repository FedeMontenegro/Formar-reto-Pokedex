import axios from "axios"

const instance = axios.create({
    headers: {
        Accept: "application/json",
        "Content-Type": "applicaciont/json",
    }
})

export const get = async url => {
    try {
        const response = await instance.get(url)
        return {ok: true, data: response?.data ? response?.data : [], status: response?.status}
    } catch (error) {
        return {ok: false, error: error, status: 500}
    }
}