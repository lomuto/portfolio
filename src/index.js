const chartElement = document.querySelector("#chart");
const ctx = chartElement.getContext("2d");

/*
*   Chart:          chart.js module
*   canvasConfig:   ./src/canvasConfig.js
*/
const myChart = new Chart(ctx, canvasConfig);

const canvasWrapper = document.querySelector("#canvas-wrapper");

// Modulize info as Class: Record
const infos = [];
for(let i = 0; i<canvasConfig.data.labels.length; i++) {
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
