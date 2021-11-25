const url = 'http://www.coline.tk:8080';

/*
*   Send request to dedicated server
*/
function request(method,url){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload = ()=>{ resolve( xhr );};
        xhr.onerror = () => { reject( new Error(`network error`) ); };
        xhr.send();
    });
}

/*
*   Fetch Records from database
*/
async function fetchRecords() {

    const connection =  await request('GET', `${url}/api/record/records`);

    const datas = JSON.parse(connection.response);
    
    const records = await Promise.all(datas.map(async data => {

        const connection = await request('GET', `${url}/api/comment/${data.id}`);
        const comments = JSON.parse(connection.response);
        return new Record(data, comments);

    }));


    records.sort((a, b) => {
        timeA = a.endDate.split('-');
        timeB = b.endDate.split('-');

        for(let i = 0; i<3; i++) {
            if(parseInt(timeA[i]) === parseInt(timeB[i])) {
                continue;
            }

            return parseInt(timeA[i]) - parseInt(timeB[i]);
        }

        return 0;
    })


    return records;
}