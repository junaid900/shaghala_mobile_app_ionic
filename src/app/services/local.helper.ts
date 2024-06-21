import { Storage } from "@capacitor/storage"
export const setValue = (key: any,val: any) => {
    return Storage.set({
        key:key,
        value:val 
    });
}
export const getValue = (key: any) => {
    return Storage.get({
        key:key
    })
}
export const deleteItem = (key: any) => {
    return Storage.remove({
        key:key
    });
}
export const setLanguage = (par) => {
    localStorage.setItem('lang',par);
}
export const getLang = () =>{
    if(localStorage.getItem('lang') == "ar"){
        return 'ar'
    }else{
        return 'en';
    }
}