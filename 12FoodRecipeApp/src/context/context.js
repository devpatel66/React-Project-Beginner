import { createContext,useContext,useState } from "react";

export const RecpContext = createContext({
    search:"",
    setSearch:()=>{},
    recp_id:"",
    setId:()=>{},
    handleClick:()=>{}
})

export const RecpProvider = RecpContext.Provider;

export function useSearch(){
    return useContext(RecpContext);
}