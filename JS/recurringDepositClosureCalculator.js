
$(document).ready(function () {
  
    $("#btn1").click(function () {
      $("#chartContainer").toggle(300);
      $("#showtable").hide(300);
    });
    $("#btn2").click(function () {
      $("#showtable").toggle(300);
      $("#chartContainer").hide(300);
    });
  
  
})







// window.onload = function () {

//   var chart = new CanvasJS.Chart("chartContainer", {
//     animationEnabled: true,
//     theme: "light2", // "light1", "light2", "dark1", "dark2"


//     data: [{
//       type: "column",


//       dataPoints: [
//         { y: 10, label: "0" },
//         { y: 20, label: "1" },
//         { y: 30, label: "2" },
//         { y: 40, label: "3" },
//         { y: 50, label: "4" },
//         { y: 60, label: "5" },

//       ]
//     }]
//   });
//   chart.render();

// }


