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
            popUps[index].style.left = `${evt.pageX}px`

            if(popUps[index].style.display == 'block') {
                popUps[index].style.opacity = 0.0;
                popUps[index].style.display = 'none';
            } else {
                popUps[index].style.opacity = 1.0;
                popUps[index].style.display = 'block';
            }
        }
    }

    const lastPopUp = popUps[popUps.length - 1];

    lastPopUp.onclick = evt => {
        const datasets = canvasConfig.data.datasets[0].data;
        const index = datasets.length - 2;
        popUps[popUps.length - 1].style.display = 'none'

        let tick = 0;
        const interval = setInterval(() => {
            datasets[index] += 80;
            tick++;
            myChart.update();

            if(tick === 60) {
                clearInterval(interval);

                lastPopUp.onclick = ( ev => {});
                lastPopUp.style.top = `${window.innerHeight / 2 - 100}px`
                lastPopUp.style.left = `${window.innerWidth / 2 - 250}px`
                lastPopUp.style.width = `500px`
                lastPopUp.childNodes[0].innerText = "I am a fast growing developer,\n"
                + "There are no limit in my passion and skills\n"
                + "If you are interested in me, please don't hesitate to contact\n\n"
                + "010 - 2755 - 2171\n"
                + "kangys1245@gmail.com"
                lastPopUp.style.display = 'block';
            }
        }, 50);
    }
}