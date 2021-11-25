const chartElement = document.querySelector("#chart");
const ctx = chartElement.getContext("2d");
const canvasWrapper = document.querySelector("#canvas-wrapper");

loadPage();

async function loadPage(){

    const records = await fetchRecords();
    const canvasConfig = await getCanvasConfig(records);
    const myChart = new Chart(ctx, canvasConfig);

    const popUps = await Promise.all(
        records.map(record => {
            const popUpElement =  new PopUpBuilder()
                        .appendTitle(record.title)
                        .appendComments(record.comments)
                        .setBackgroundColor('white')
                        .build();
            canvasWrapper.appendChild(popUpElement);

            return popUpElement;
        })
    );


    document.querySelector("#chart").onclick = evt => {
        const points = myChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);

        if (points.length) {
            const index = points[0].index;

            popUps[index].style.top = `${evt.pageY + 20}px`
            popUps[index].style.left = `${evt.pageX - popUps[index].offsetWidth / 2}px`

            if(popUps[index].style.display == 'block') {
                popUps[index].style.opacity = 0.0;
                popUps[index].style.display = 'none';
            } else {
                popUps[index].style.opacity = 1.0;
                popUps[index].style.display = 'block';
            }
        }
    }
}