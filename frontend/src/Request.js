function request(method,url){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload = ()=>{ resolve( xhr ); };
        xhr.onerror = () => { reject( new Error(`network error`) ); };
    });
}