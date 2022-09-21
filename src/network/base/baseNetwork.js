import { axiosInstance } from "../axiosInstance/axiosInstance"



export const baseNetwork = {



    getAll: async (url) => {
        let responseData = [];
        await axiosInstance.get(url)
            .then(res => {
                if (res.status == 200) {
                    responseData = res.data;
                }
                else {
                    throw "custom error"
                }
            })
            .catch(err => {
                throw err
            })


        return responseData;
    },
    add: async (url, payload) => {
        console.log(payload)
        let response = null;
        await axiosInstance.post(url,  payload )
            .then(res => {
                if (res.status == 201) {
                    response = res.data;
                }
                else {
                    throw "custom error"
                }
            })
            .catch(err => {
                throw err
            })
        return response;
    },
    delete: async (url, id) => {
        let response = null;
        await axiosInstance.delete(url, id)
            .then(res => {
                if (res.status == 200) {
                    response = res.data;
                }
                else {
                    throw "custom error"
                }
            })
            .catch(err => {
                throw err
            })
        return response;
    }

}