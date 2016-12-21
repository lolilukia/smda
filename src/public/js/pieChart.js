function drawPieChart() {
  var ctx = document.getElementById("myPieChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: multiLabels,

      datasets: [
        {
          data: totalamount,
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#19CAAD",
            "#8CC7B5",
            "#A0EEE1",
            "#BEEDC7",
            "#bc80bd",
            "#E6CEAC"
          ],

          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#19CAAD",
            "#8CC7B5",
            "#A0EEE1",
            "#BEEDC7",
            "#bc80bd",
            "#E6CEAC"
          ]
        }]
    },

  });
};
