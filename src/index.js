const ctx = document.querySelector("#chart").getContext("2d");

const config = {
    type: 'line',
    data: {
        labels: ['Jan. 2020', 'Mar. 2020', 'Jun. 2020', 'Nov. 2020', 'Jan. 2021', 'Jan. 2022'],
        datasets: [
            {
                label: 'Skill',
                data: [12, 19, 3, 5, 2, 3], // modulize datas
                borderColor: "rgb(206, 206, 206)",
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

const myChart = new Chart(ctx, config);

const canvasWrapper = document.querySelector("#canvas-wrapper");
const infos = [];
for(let i = 0; i<config.data.labels.length; i++) {
    const info = document.createElement("div");
    info.className = "info";
    info.innerText = `This is info of index ${i}`;
    infos.push(info);
    info.style.background = "white";
    canvasWrapper.appendChild(info);
}

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

// console.table(evt);

    if (points.length) {
        const firstPoint = points[0];
        const label = myChart.data.labels[firstPoint.index];
        const value = myChart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];
        
        infos[firstPoint.index].style.top = `${evt.clientY + 20}px`
        infos[firstPoint.index].style.left = `${evt.clientX - infos[firstPoint.index].offsetWidth / 2}px`

        if(infos[firstPoint.index].style.opacity == 0) {
            infos[firstPoint.index].style.opacity = 1;
        } else {
            infos[firstPoint.index].style.opacity = 0;
        }
    }
}
