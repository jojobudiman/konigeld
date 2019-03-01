/* eslint-disable object-shorthand */

/* global Chart, CustomTooltips, getStyle, hexToRgba */

/**
 * --------------------------------------------------------------------------
 * CoreUI Free Boostrap Admin Template (v2.1.11): main.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

/* eslint-disable no-magic-numbers */
// Disable the on-canvas tooltip

/*(function($) {
  $(function() {
    $('.navbar-toggler.sidebar-toggler.d-md-down-none').click(function() {
      $('konilay').toggleClass('konilay-active');
    });
  });
})(jQuery);*/

/************************
BUTTON HYPERLINK
************************/

/*$('#add_product').click(function() {
  window.location='<?php echo base_url(); ?>semester8/konigeld/products_library_add';
});*/

/************************
END BUTTON HYPERLINK
************************/

$(function() {
  $('.navbar-toggler').on('click', function() {
    $('.koni-body-index').toggleClass('active');
  });
});
/************************
TABLE ROW HYPERLINK
************************/

$('*[data-href]').on("click",function() {
  window.location = $(this).data('href');
});

/************************
END TABLE ROW HYPERLINK
************************/

/************************
CUSTOM SELECT
************************/
$(".select-down").each(function() {
  var classes = $(this).attr("class"),
    id = $(this).attr("id"),
    name = $(this).attr("name");
  var template = '<div class="' + classes + '">';
  template +=
    '<span class="form-select-input">' +
    $(this).attr("placeholder") +
    "</span>";
  template += '<div class="form-select-options">';
  $(this)
    .find("option")
    .each(function() {
      template +=
        '<span class="form-select-custom-options ' +
        $(this).attr("class") +
        '" data-value="' +
        $(this).attr("value") +
        '">' +
        $(this).html() +
        "</span>";
    });
  template += "</div></div>";

  $(this).wrap('<div class="form-field-content"></div>');
  $(this).hide();
  $(this).after(template);
});
/*$(".custom-option:first-of-type").hover(
  function() {
    $(this)
      .parents(".custom-options")
      .addClass("option-hover");
  },
  function() {
    $(this)
      .parents(".custom-options")
      .removeClass("option-hover");
  }
);*/
$(".form-select-input").on("click", function() {
  $("html").one("click", function() {
    $(".select-down").removeClass("opened");
  });
  $(this)
    .parents(".select-down")
    .toggleClass("opened");
  event.stopPropagation();
});
$(".form-select-custom-options").on("click", function() {
  $(this)
    .parents(".form-select-input")
    .find("select")
    .val($(this).data("value"));
  $(this)
    .parents(".form-select-options")
    .find(".form-select-custom-options")
    .removeClass("selection");
  $(this).addClass("selection");
  $(this)
    .parents(".select-down")
    .removeClass("opened");
  $(this)
    .parents(".select-down")
    .find(".form-select-input")
    .text($(this).text());
});

/************************
END CUSTOM SELECT
************************/

/************************
TEXTBOX NUMBERS ONLY
************************/

function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      }
    });
  });
}

setInputFilter(document.getElementById("price"), function(value) {
  return /^\d*\.?\d*$/.test(value);
});

setInputFilter(document.getElementById("sku"), function(value) {
  return /^\d*\.?\d*$/.test(value);
});

setInputFilter(document.getElementById("stock"), function(value) {
  return /^\d*\.?\d*$/.test(value);
});

/************************
END TEXTBOX NUMBERS ONLY
************************/

jQuery(function($) {
  $("#menuContainer, .hamburger-menu").click(function(e) {
    e.stopPropagation();
    $(".hamburger-menu").toggleClass("is-active");
  });
});


/************************
CHART.JS
************************/

Chart.defaults.global.defaultFontColor = '#42838D';
Chart.defaults.global.defaultFontFamily = 'Dosis';
Chart.defaults.global.maintainAspectRatio = false;
Chart.defaults.global.pointHitDetectionRadius = 1;
Chart.defaults.global.tooltips.enabled = false;
Chart.defaults.global.tooltips.mode = 'index';
Chart.defaults.global.tooltips.position = 'nearest';
Chart.defaults.global.tooltips.custom = CustomTooltips; // eslint-disable-next-line no-unused-vars

/*let updateChartTicks = function(scale) {
  let incrementAmount = 0;
  let previousAmount = 0;
  let newTicks = [];
  newTicks = scale.ticks;
  for (x = 0; x < newTicks.length; x++) {
    incrementAmount = (previousAmount - newTicks[x]);
    previousAmount = newTicks[x];
  }
  if (newTicks.length > 1) {
    if (newTicks[0] - newTicks[1] != incrementAmount) {
      newTicks[0] = newTicks[1] + incrementAmount;
    }
  }
  return newTicks;
};*/

let salesSummaryChart = document.getElementById('sales-summary-chart').getContext('2d');

let dataArray1 = [0.00, 0.00, 50000.00, 10000.00, 165000.00, 0.00, 200000.00, 250000.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 500000.00, 350000.00, 0.00, 400000.00, 0.00, 0.00, 0.00, 100000.00, 0.00, 0.00];
let dataArray2 = [0.00, 0.00, 50000.00, 10000.00, 165000.00, 0.00, 200000.00, 250000.00, 100000.00, 0.00, 0.00, 0.00, 0.00, 0.00, 300000.00, 350000.00, 0.00, 200000.00, 0.00, 0.00, 0.00, 50000.00, 0.00, 0.00];

let maxArray1 = Math.max.apply(null, dataArray1);
let maxArray2 = Math.max.apply(null, dataArray2);

let lineChart = new Chart(salesSummaryChart, {
  type: 'line', //Could be bar, horizontal bar, pie, line, doughnut, radar, polar area, etx
  data: {
    labels: ["12 am", "1 am", "2 am", "3 am", "4 am", "5 am", "6 am", "7 am", "8 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm", "8 pm", "9 pm", "10 pm", "11 pm"],
    datasets: [{
      label: '24 Feb 2019',
      lineTension: 0,
      backgroundColor: 'transparent',
      borderColor: 'rgb(59 ,131, 140)',
      borderWidth: 2,
      pointBackgroundColor: 'rgb(255, 255, 255)',
      data: dataArray1,
    },
    {
      label: "25 Feb 2018",
      lineTension: 0,
      backgroundColor: 'transparent',
      borderColor: 'rgb(113, 118, 123)',
      borderWidth: 2,
      pointBackgroundColor: 'rgb(255, 255, 255)',
      data: dataArray2,
    }]
  },
  options: {

    responsive: true,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [{
        stacked: true,
        gridLines: {
          display: true,
          color: 'rgb(60, 60, 60)'
        },
        ticks: {
          precision: 0,
          fontColor: 'rgb(0, 0, 0)'
        }
      }],
      yAxes: [{
        type: 'linear',
        /*afterBuildTicks: function(scale) {
        scale.ticks = updateChartTicks(scale);
          return;
        },
        beforeUpdate: function(oScale) {
          return;
        },*/
        stacked: true,
        gridLines: {
          display: true,
          color: 'rgb(60, 60, 60)'
        },
        ticks: {
          beginAtZero: true,
          callback: function(value, index, values) {
                      return 'Rp ' + value;
                    },
          scaleLabel: {
            display: true,
            scaleOverride : true
          },
          /*max: Math.max.apply(dataArray1, dataArray2) + 100000,*/
          maxTicksLimit: 4,
          precision: 0,
          fontColor: 'rgb(0, 0, 0)'
        }
      }]
    },
    tooltips: {
      callbacks: {
          label: function(tooltipItem, data) {
                  return tooltipItem.yLabel.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                  }
          }
    },
    plugins: {
      filler: {
        propagate: true
      }
    }
  }
});

/* var cardChart1 = new Chart($('#card-chart1'), {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First dataset',
      backgroundColor: getStyle('--primary'),
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40]
    }]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent'
        }
      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 35,
          max: 89
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  }
}); // eslint-disable-next-line no-unused-vars

var cardChart2 = new Chart($('#card-chart2'), {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First dataset',
      backgroundColor: getStyle('--info'),
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11]
    }]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent'
        }
      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: -4,
          max: 39
        }
      }]
    },
    elements: {
      line: {
        tension: 0.00001,
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  }
}); // eslint-disable-next-line no-unused-vars

var cardChart3 = new Chart($('#card-chart3'), {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40]
    }]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  }
}); // eslint-disable-next-line no-unused-vars

var cardChart4 = new Chart($('#card-chart4'), {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April'],
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82]
    }]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 0.6
      }],
      yAxes: [{
        display: false
      }]
    }
  }
}); // eslint-disable-next-line no-unused-vars

var mainChart = new Chart($('#main-chart'), {
  type: 'line',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
      label: 'My First dataset',
      backgroundColor: hexToRgba(getStyle('--info'), 10),
      borderColor: getStyle('--info'),
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: [165, 180, 70, 69, 77, 57, 125, 165, 172, 91, 173, 138, 155, 89, 50, 161, 65, 163, 160, 103, 114, 185, 125, 196, 183, 64, 137, 95, 112, 175]
    }, {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: getStyle('--success'),
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: [92, 97, 80, 100, 86, 97, 83, 98, 87, 98, 93, 83, 87, 98, 96, 84, 91, 97, 88, 86, 94, 86, 95, 91, 98, 91, 92, 80, 83, 82]
    }, {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: getStyle('--danger'),
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65]
    }]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250
        }
      }]
    },
    elements: {
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3
      }
    }
  }
});
var brandBoxChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
var brandBoxChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false
    }]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  } // eslint-disable-next-line no-unused-vars

};
var brandBoxChart1 = new Chart($('#social-box-chart-1'), {
  type: 'line',
  data: {
    labels: brandBoxChartLabels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: [65, 59, 84, 84, 51, 55, 40]
    }]
  },
  options: brandBoxChartOptions
}); // eslint-disable-next-line no-unused-vars

var brandBoxChart2 = new Chart($('#social-box-chart-2'), {
  type: 'line',
  data: {
    labels: brandBoxChartLabels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: [1, 13, 9, 17, 34, 41, 38]
    }]
  },
  options: brandBoxChartOptions
}); // eslint-disable-next-line no-unused-vars

var brandBoxChart3 = new Chart($('#social-box-chart-3'), {
  type: 'line',
  data: {
    labels: brandBoxChartLabels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: [78, 81, 80, 45, 34, 12, 40]
    }]
  },
  options: brandBoxChartOptions
}); // eslint-disable-next-line no-unused-vars

var brandBoxChart4 = new Chart($('#social-box-chart-4'), {
  type: 'line',
  data: {
    labels: brandBoxChartLabels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: [35, 23, 56, 22, 97, 23, 64]
    }]
  },
  options: brandBoxChartOptions
}); */
//# sourceMappingURL=main.js.map
