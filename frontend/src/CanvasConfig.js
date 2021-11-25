/*
*   returns canvas configuration through fetched datas
*/
async function getCanvasConfig(){
    records = await fetchRecords();

    const dataLabels = records.map(record => {
        return record.startDate;
    })

    const skills =  records.map(record => {
        return record.skillEarned;
    })

    skills.forEach((v, i) => {
        if(i === skills.length) {
            return;
        }

        skills[i+1] += v;
    })

    return {
        type: 'line',
        data: {
            labels: dataLabels,
            datasets: [
                {
                    label: 'Skill',
                    data: skills,
                    borderColor: "rgb(240, 240, 240)",
                    fill: false,
                    cubicInterpolationMode: 'monotone',
                    tension: 10
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: false
                },
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            },
            elements: {
                point: {
                    radius: 3,
                    hoverRadius: 7,
                    borderWidth: 2,
                    hoverBorderWidth: 2
                }
            },
            scales: {
                x: {
                    grid:{
                        display : false
                    },
                    title: {
                        display: false,
                        text: 'color'
                    }
                },
                y: {
                    grid:{
                        display : false
                    },
                    title: {
                        display: false,
                        text: 'Skill'
                    }
                }
            }
        }
    }
}