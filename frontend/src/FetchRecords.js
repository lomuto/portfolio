const url = 'http://www.coline.tk:8080';

function request(method,url){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload = ()=>{ resolve( xhr );};
        xhr.onerror = () => { reject( new Error(`network error`) ); };
        xhr.send();
    });
}

async function fetchRecords() {
    const records = new Array();
    
    const connection =  await request('GET', `${url}/api/record/records`);

    const datas = JSON.parse(connection.response);
    datas.forEach(async data => {

        const connection = await ('GET', `${url}/api/comment/${data.id}`);
        const comments = JSON.parse(connection.response);
        const record = new Record(data, comments);
        records.push(record);

    });

    return records;
}