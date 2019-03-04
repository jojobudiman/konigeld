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

$('button.konibutton.dropdown-trigger').on('click', function(){
    var $popover = $('.popover');
    if (!$popover.hasClass('popover-active')) {
        $popover.addClass('popover-active');
    } else {
        $popover.removeClass('popover-active');
    }
});


function selectDate(e, cell, calendar){
  if (e){
    e.stopPropagation();
    console.log(`Select Date toggled by: ${e.target.tagName}.${e.target.className}`)
  } else {
    console.log(`Select Date toggled by: ${cell.tagName}.${cell.className}`)
  }

  const cellRipple = cell.querySelector(".date-ripple");
  const selDate = cell.querySelector(".date-text").textContent;
  const dateField = calendar.closest(".calendar-widget").querySelector(".date-input");

  // Change the Displayed Date on the date field.
  dateField.readonly=false;
  dateField.value = `${selDate} ${getMonthName(currentMonth)} ${currentYear}`;
  dateField.readonly=true;

  // Change the Displayed Selected Date on the Calendar Table
  const activeCell = calendar.querySelector(".date.selected");
  if (activeCell){
    const activeCellRipple = activeCell.querySelector(".date-ripple");
    activeCell.classList.remove("selected");
    activeCellRipple.classList.remove("selected");
  }

  cell.classList.add("selected");
  cellRipple.classList.add("selected");
}

// +++++++++++++++++++++++++++++++++++++++++++++++


// Month
// Function to get Month Name
function getMonthName(index){
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  index = index > 11 ? 0 : index;
  index = index < 0 ? 11 : index;
  return monthNames[index];
}

function getMonthIndex(month){
  const monthTable = {
  'January': 0,
  'February': 1,
  'March': 2,
  'April': 3,
  'May': 4,
  'June': 5,
  'July': 6,
  'August': 7,
  'September': 8,
  'October': 9,
  'November': 10,
  'December': 11
  };
  return monthTable[month];
}

function getMonthDays(index){
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (!(currentYear % 4)) {
    monthDays[1] = 29;
  }


  index = index > 11 ? 0 : index;
  index = index < 0  ? 11 : index;
  return monthDays[index];
}

// Change the displayed Month Name
function changeMonthDisplay(calendar){
  const month = calendar.querySelector(".calendar-title > h3");
  month.innerHTML = `${getMonthName(currentMonth)} ${currentYear}`;
}

// Show Next Month
function nextMonth(e, calendar, selected){

  console.log("next");
  let initHeight, targetHeight;
  e.stopPropagation();

  currentMonth++;
  if (currentMonth > 11){
    currentMonth = 0;
    currentYear++;
  }


  let currentDay;
  if (selected) {
    currentDay = selected;
  } else {
    currentDay = getCurrentDay(calendar);
  }

  const startDay = (new Date(currentYear, currentMonth, 1).getDay() + 6) % 7;

  changeMonthDisplay(calendar);

  initHeight = calendar.scrollHeight;
  clearDateTable(calendar);
  drawDateTable(calendar, startDay, currentDay, currentMonth);
  targetHeight = calendar.scrollHeight;
  calendar.style.height = `${initHeight}px`
  adjustHeight(e, calendar, targetHeight);

}

  // Show Previous Month
  function previousMonth(e, calendar, selected){
    console.log("previous");
    let initHeight, targetHeight;
    e.stopPropagation();
    currentMonth--;
    if (currentMonth < 0){
      currentMonth = 11;
      currentYear--;
    }

  let currentDay;
  if (selected) {
    currentDay = selected;
  } else {
    currentDay = getCurrentDay(calendar);
  }

  // Capture the calendar height before the content changes
  initHeight = calendar.scrollHeight;

  const startDay = (new Date(currentYear, currentMonth, 1).getDay() + 6) % 7;
  changeMonthDisplay(calendar);
  clearDateTable(calendar);
  drawDateTable(calendar, startDay, currentDay, currentMonth);

  //Capture the calendar height AFTER the content changes.
  targetHeight = calendar.scrollHeight;

  //Set the calendar height its height before the content changes.
  calendar.style.height = `${initHeight}px`

  //Change the calendar height to after the content changes.
  adjustHeight(e, calendar, targetHeight);
}

function drawDateTable(calendar, startDay, currentDay, currentMonth){
  console.log("draw");
  const monthDays = getMonthDays(currentMonth);
  const prevMonthDays = getMonthDays(currentMonth-1);
  const nextMonthDays = getMonthDays(currentMonth+1);
  const table = calendar.querySelector(".calendar-month");
  let start = startDay;
  let count = 1 - start;

  while (count <= monthDays){
    let row = document.createElement("div");
    row.setAttribute("class", "calendar-week");
    for(i = 0; i < 7; i++){
      let cell = document.createElement("div");
      let cellRipple = document.createElement("div");
      let cellText = document.createElement("p");

      cell.setAttribute("class", "date");
      cellRipple.setAttribute("class", "date-ripple");
      cellText.setAttribute("class", "date-text");

      // Logical Operation when Creating the First Row
      if (count < 1){
        cellText.textContent = prevMonthDays + count;
        cell.classList.add("preceding");
      } else if (count > monthDays){
        cellText.textContent = count - monthDays;
        cell.classList.add("following");
      } else {
        cellText.textContent = count;
      }

      cell.addEventListener("click", function(e){
        selectDate(e, cell, calendar);
        hideCalendar(e, calendar.closest(".popover"));
      });

      // Placing new element into the DOM Tree
      cell.appendChild(cellText);
      cell.appendChild(cellRipple);
      row.appendChild(cell);


      if (count === currentDay){
        cellRipple.classList.add("selected");
        cell.classList.add("selected");
        selectDate(null, cell, calendar); // Should be calling the select date, not clicking on it.
      }

      //Event Listeners
      cell.addEventListener("mouseenter", function(){
        const ripple = this.querySelector(".date-ripple");
        ripple.classList.add("hover");
      });
      cell.addEventListener("mouseleave", function(){
        const ripple = this.querySelector(".date-ripple");
        ripple.classList.remove("hover");
      })

      // Increment the count for next date.
      count++;
    }
    table.appendChild(row);
  }
}

function clearDateTable(calendar){
  const dateRows = calendar.querySelectorAll(".calendar-week");
  if (dateRows.length){
    dateRows.forEach(row => {
      row.remove();
    })
  }
}

function showDateTable(calendar){
  const table = calendar.querySelector(".calendar")
}

// =================================================
// Calendar UI Animation Functions
// =================================================

function toggleCalendar(e, widget){
  console.log(`Toggle Calendar toggled by: ${e.target.tagName}.${e.target.className}`);
  const isActive = widget.getAttribute("data-active") === "true";
  const dateInput = widget.querySelector(".date-input");
  const toggleBtn = widget.querySelector(".dropdown-trigger");
  const calendarWrapper = widget.querySelector(".popover");
  const calendar = calendarWrapper.querySelector(".calendar");
  const calendarPadding = Number(window.getComputedStyle(calendar).getPropertyValue("padding-bottom").replace(/px/, ''));
  const calendarMargin = Number(window.getComputedStyle(calendar).getPropertyValue("margin-top").replace(/px/, ''));

  let wrapperHeight, calendarHeight;

  if (isActive){
    console.log("toggle-off");
    // Change components state to inactive
    widget.classList.remove("active");
    toggleBtn.classList.remove("active");

    widget.setAttribute("data-active", "false");

    // Collapse the Calendar View
    calendarWrapper.style.height = null;
  } else {
    console.log("toggle-on");
    // Change components state to active
    widget.classList.remove("hover");
    widget.classList.add("active");
    toggleBtn.classList.add("active");
    widget.setAttribute("data-active", "true");

    // If the widget doesn't have a calendar yet, create one.
    const dateTable = calendarWrapper.querySelectorAll(".calendar-week");

    if (!(dateTable.length)){
      const currentDay = getCurrentDay(calendar);
      changeMonthDisplay(calendar);
      drawDateTable(calendar, startDay, currentDay, currentMonth);
    } else {
      const date = dateInput.value.split(' ');
      const month = date[1];
      const year = Number(date[2]);
      const currentDay = Number(date[0]);
      const monthIndex = getMonthIndex(month);
      currentYear = year;
      currentMonth = monthIndex;
      startDay = (new Date(currentYear, currentMonth, 1).getDay() + 6) % 7;
      changeMonthDisplay(calendar);
      clearDateTable(calendar);
      drawDateTable(calendar, startDay, currentDay, currentMonth);
    }

    // Get the height AFTER the creation of the calendar row.
    const targetHeight = calendar.scrollHeight;

    // Expand the Calendar View
    adjustHeight(e, calendar, targetHeight);
  }

}

//Hide the calendar
function hideCalendar(e, widget){
  console.log(`Hide Calendar toggled by: ${e.target.tagName}.${e.target.className}`);
  const isActive = widget.getAttribute("data-active") === "true";
  console.log(`Hide? ${isActive}`)
  if (isActive){
    console.log("Hiding Calendar");
    toggleCalendar(e, widget);
  }
  console.log(`Current data-active: ${widget.getAttribute("data-active")}`)
}

// Adjust the height of the calendar to its content.
function adjustHeight(e, calendar, targetHeight){
  console.log(`Adjust Height toggled by: ${e.target.tagName}.${e.target.className}`);
  const wrapper = calendar.closest(".popover");
  const wrapperPadding = Number(window.getComputedStyle(wrapper).getPropertyValue("padding-top").replace(/px/,''));
  const calendarPadding = Number(window.getComputedStyle(calendar).getPropertyValue("padding-bottom").replace(/px/, ''));
  const calendarMargin = Number(window.getComputedStyle(calendar).getPropertyValue("margin-top").replace(/px/, ''));
  const totalHeight = targetHeight + calendarPadding + calendarMargin + wrapperPadding + 8;
  const currHeight = Number(wrapper.style.height.replace(/px/,''));

  if(currHeight !== totalHeight){
    calendar.style.height = `${targetHeight}px`;
    calendar.addEventListener("transitionend", function setNull(){
      calendar.removeEventListener("transitionend", setNull);
      calendar.style.height = null;
    })
    wrapper.style.height = `${totalHeight}px`;
  }
}

//=======================================
// ADD LISTENERS
//=======================================
const calendarWidgets = document.querySelectorAll(".filter-calendar-well");

calendarWidgets.forEach(widget => {
  // Widget Event Listener
  widget.addEventListener("mouseenter", function(){
    widget.classList.add("hover");
  });
  widget.addEventListener("mouseleave", function(){
    widget.classList.remove("hover");
  });

  //Toggle on CLICK
  widget.addEventListener("click", function(e){
    toggleCalendar(e, widget);
  });


  //Hide on focus out
  let focusOutFunction;
  widget.addEventListener("focusout", function(e){
    focusOutFunction = setTimeout(function(){
      console.log("focusout");
      hideCalendar(e, widget);
    }, 0);
  });

  widget.addEventListener("focusin", function(e){
    clearTimeout(focusOutFunction);
  });

  //Hide when esc button is pressed
  widget.addEventListener("keydown", function(e){
    if (e.which === 27){
      hideCalendar(e, widget);
    }
  })

  const dateField = widget.querySelector(".popover");

  // Set the value of dateField to today if specified to do so
  if (widget.classList.contains("default-today")){
    dateField.readonly = false;
    dateField.value = `${today.getDate()} ${getMonthName(currentMonth)} ${currentYear}`
    dateField.readonly = true;
  }

  // Hide when the text field is changed.
  // dateField.addEventListener("change", function(e){
  //   console.log("changed");
  //   hideCalendar(e, widget);
  // })

  // Previous and Next Month Button Listener
  const calendar = widget.querySelector(".calendar");
  const previousMonthBtn = widget.querySelector(".calendar-back");
  const nextMonthBtn = widget.querySelector(".calendar-forward");

  previousMonthBtn.addEventListener("mouseenter", function(){
    this.classList.add("hover");
  })

  previousMonthBtn.addEventListener("mouseleave", function(){
    this.classList.remove("hover");
  })

  nextMonthBtn.addEventListener("mouseenter", function(){
    this.classList.add("hover");
  })

  nextMonthBtn.addEventListener("mouseleave", function(){
    this.classList.remove("hover");
  })

  previousMonthBtn.addEventListener("click", function(e){
    previousMonth(e, calendar);
  });
  nextMonthBtn.addEventListener("click", function(e){
    nextMonth(e, calendar);
  });
});

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


$('.table-row-selectable').click(function(){
    window.location = $(this).data('href');
    return false;
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
ADD DELETE ROW
************************/

/*$("#add-modif").click(function () {
     $(".modifier-list").each(function () {
         var tr = '<tr>';
         jQuery.each($('tr:last td', this), function () {
             tr += '<td class="table-cell">' + $(this).html() + '</td>';
         });
         tr += '</tr>';
         if ($('tbody', this).length > 0) {
             $('tbody', this).append(tr);
         } else {
             $(this).append(tr);
         }
     });
});

$(".modifier-remove-icon").click(function () {
  var i = row.parentNode.parentNode.rowIndex;
  document.getElementsByClassName('table-selectable').deleteRow(i);
}*/

const dynamic_JS = ({
}) => `<tr class="">
  <td class="table-cell">
    <div class="modifier-option-table-cell">
      <input class="modifier-option modifier-input fill" placeholder="New Option" type="text">
    </div>
  </td>
  <td class="table-cell">
    <div class="modifier-option-table-cell">
      <input class="modifier-option modifier-input fill" placeholder="Rp0.00" type="text">
    </div>
  </td>
  <td class="table-cell">
    <div class="modfiier-option-table-cell">
      <button class="modifier-remove-icon" id="remove-modif" type="button">
        <i></i>
      </button>
    </div>
  </td>
</tr>`;

var modif_add = $('#modifier-row').text();
var dynamic_add = modif_add.split(/\$\{(.+?)\}/g);

$('.table-selectable').on('input propertychange',' > tbody > tr > td:nth-child(2) > input', function() {
  $.each($('input[type=text]'), function() {
    this.value = this.value.replace(/[^0-9]/g, '');
  });
});

$('#add-modif').on('click', function() {
  $(".table-selectable").each(function() {
    var tr_last = $('tbody > tr:last', this).clone();
    var td_no = tr_last.find('td:first');

    $('tbody', this).append([{
    }].map(dynamic_JS).join(''));

    var tr_first_input = $('tbody > tr:first > td:nth-child(2) > input');
    tr_first_input.val(0);


    return;
  });
});

$('.modifier-list').on('click', '#remove-modif', function() {
  $(this).closest('tr').remove();
});

/************************
END ADD DELETE ROW
************************/

/*('.form-field-with-segmented-controls button').click(function(){
  var sum = document.getElementsByClassName("segmented-control-segment");
  for (var i = 0; i < sum.length; i++) {

    if ( $(this).hasClass('segmented-control-segment') ){
  		$(indicator).addClass('segmented-control-segment-selected');
    } else {
      $(indicator).removeClass('segmented-control-segment-selected');
    }
  }

});*/

var sum = document.getElementsByClassName("segmented-control-segment");
var money = document.getElementsByClassName("money-text");
var percent = document.getElementsByClassName("percent-text");

for (var i = 0; i < sum.length; i++) {
  sum[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("segmented-control-segment-selected");
  if (current.length > 0) {
    current[0].className = current[0].className.replace(" segmented-control-segment-selected", "");
  }
  this.className += " segmented-control-segment-selected";
  });
}

function switchText(show) {
  document.getElementById("text-"+show).style.display = "block";
  document.getElementById("text-"+((show==1)?2:1)).style.display = "none";
}

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

setInputFilter(document.getElementById("fname"), function(value) {
  return /^[a-zA-Z]*$/.test(value);
});

setInputFilter(document.getElementById("lname"), function(value) {
  return /^[a-zA-Z]*$/.test(value);
});

setInputFilter(document.getElementById("phone"), function(value) {
  return /^\d*\.?\d*$/.test(value);
})


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
