const chartElement = document.querySelector("#chart");
const ctx = chartElement.getContext("2d");

run();

async function run(){
/*
*   Chart:          chart.js module
*   canvasConfig:   ./src/canvasConfig.js
*/
const canvasConfig = await getCanvasConfig();
const myChart = new Chart(ctx, canvasConfig);

const canvasWrapper = document.querySelector("#canvas-wrapper");

const records = [];
for(let i = 0; i<canvasConfig.data.labels.length; i++) {
    const record = new RecordBuilder()
                    .setContent(`This is info of index ${i}`)
                    .setBackgroundColor('white')
                    .build();

    canvasWrapper.appendChild(record);
    records.push(record);
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

    if (points.length) {
        const firstPoint = points[0];
        const label = myChart.data.labels[firstPoint.index];
        const value = myChart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];

        records[firstPoint.index].style.top = `${evt.pageY + 20}px`
        records[firstPoint.index].style.left = `${evt.pageX - records[firstPoint.index].offsetWidth / 2}px`

        if(records[firstPoint.index].style.opacity == 0) {
            records[firstPoint.index].style.opacity = 1;
        } else {
            records[firstPoint.index].style.opacity = 0;
        }
    }
}
}