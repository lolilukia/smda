var ctx = document.getElementById("myPieChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [
      "洗护沐浴/个人清洁",
      "纸品/湿巾",
      "衣物清洁剂/护理剂",
      "卫生巾/护垫/成人尿裤",
      "家庭环境清洁剂",
      "室内除臭/芳香用品",
      "家私/皮具护理品",
      "香熏用品",
      "驱虫用品"
    ],

    datasets: [
      {
        data: [1048133865, 823322155,347486495,251350870,192573590,147918395,102281750,78294110,0],
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
