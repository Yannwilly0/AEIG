

let labels2 = ['PATRICK', 'AKA', 'SALOMON', 'MOI'];
let data2 = [25, 10, 5, 60,100];
let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF','#fff'];

let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
    type: 'bar',
    data: {
        labels: labels2,
        datasets: [ {
            data: data2,
            backgroundColor: colors2
        }]
    },
    options: {
        title: {
            text: "pourcentage par candidat (%) ",
            display: true
        },
        legend: {
          display: false
        }
    }
});


let labels4 = ['ont voté', 'n\'ont pas voté']; 
let data4 = [30, 17];
let colors4 = ['#49A9EA', '#36CAAB'];

let myChart4 = document.getElementById("myChart4").getContext('2d');

let chart4 = new Chart(myChart4, {
    type: 'pie',
    data: {
        labels: labels4,
        datasets: [ {
            data: data4,
            backgroundColor: colors4
        }]
    },
    options: {
        title: {
            text: "Pourcentage de vote",
            display: true
        }
    }
});