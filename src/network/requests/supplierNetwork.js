import { baseNetwork } from "../base/baseNetwork"


export const supplierNetwork = {
    getAllSuppliers : () => {
        return baseNetwork.getAll("suppliers")
    },
    deleteSupplier : (id) => {
        return baseNetwork.delete(`suppliers/${id}`)
    },
    addSupplier : (payload) => {
        return baseNetwork.add("suppliers", payload)
    }
}