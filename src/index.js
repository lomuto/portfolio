const ctx = document.querySelector("#chart").getContext("2d");

const config = {
    type: 'line',
    data: {
        labels: ['Jan. 2020', 'Mar. 2020', 'Jun. 2020', 'Nov. 2020', 'Jan. 2021', 'Jan. 2022'],
        datasets: [
            {
                label: 'Skill',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'yellow',
                borderColor: 'black',
                borderWidth: 1
            }
        ]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'History of me'
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: '색상'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Skill'
                }
            }
        },
    }
}

const myChart = new Chart(ctx, config);

// setInterval(() => {
//     const datasets = config.data.datasets;
//     for (let iDataset = 0; iDataset < datasets.length; iDataset++) {
//         const data = datasets[iDataset].data;
//             data[data.length-1] += 20;
        
//     }
//     myChart.update();
// }, 100);

// const datasets = config.data.datasets;
// console.table(datasets);
// console.table(datasets[0]);

document.querySelector("#chart").onclick = function clickHandler(evt) {
    const points = myChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);

    console.log(points);

    if (points.length) {
        const firstPoint = points[0];
        const label = myChart.data.labels[firstPoint.index];
        const value = myChart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];
        console.table(firstPoint)
        console.log(label)
        console.log(value)
        myChart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index] = (myChart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index] > 100 ? 10 : 101);
        myChart.update();
    }
}
