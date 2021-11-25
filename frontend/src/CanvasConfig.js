/*
db: label and data

*/

const canvasConfig = {
    type: 'line',
    data: {
        labels: ['Jan. 2020', 'Mar. 2020', 'Jun. 2020', 'Nov. 2020', 'Jan. 2021', 'Jan. 2022'],
        datasets: [
            {
                label: 'Skill',
                data: [12, 19, 3, 5, 2, 3], // modulize datas
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