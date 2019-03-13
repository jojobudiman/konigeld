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

/*$('button.navbar-toggler.sidebar-toggler.d-md-down-none').on('click', function() {

})*/

/************************
CALENDAR
************************/
/*$(function() {
  var start = moment().subtract(29, 'days');
  var end = moment();

  function cb(start, end) {
    $('#konicalendar span').html(start.format('DD/MM/YYYY') + ' - ' + end.format('DD/MM/YYYY'));
  }

  $('#konicalendar').daterangepicker({
    startDate: start,
    endDate: end,
    ranges: {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'This Week': [moment().startOf('week'), moment().endOf('week')],
      'Last Week': [moment().subtract(6, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
      'This Year': [moment().startOf('year'), moment.endOf('year')],
      'Last Year': [moment().subtract(1, 'month').startOf('year'), moment().subtract(1, 'year').endOf('year')]
      }
    }, cb);

    cb(start, end);

  });*/

  $('#konicalendar').bootstrapMaterialDatePicker({
    weekStart : 0,
    time: false,
    format : 'DD MMMM YYYY'
  });

/************************
END CALENDAR
************************/

$('button.konibutton.dropdown-trigger').on('click', function(){
    var $popover = $('.popover');
    if (!$popover.hasClass('popover-active')) {
        $popover.addClass('popover-active');
    } else {
        $popover.removeClass('popover-active');
    }
});

$('button#dailytrigger.dropdown-trigger-text.arrow-down.dropdown-trigger').on('click', function(){
    var $popover = $('#daily.popover');
    if (!$popover.hasClass('popover-active')) {
        $popover.addClass('popover-active');
    }
    else if (!$popover.is(e.target) && $popover.has(e.target).length === 0) {
     $popover.removeClass('popover-active');
    }
    else {
        $popover.removeClass('popover-active');
    }

});


$('button#weeklytrigger.dropdown-trigger-text.arrow-down.dropdown-trigger').on('click', function(){
    var $popover = $('#weekly.popover');
    if (!$popover.hasClass('popover-active')) {
        $popover.addClass('popover-active');
    } else {
        $popover.removeClass('popover-active');
    }

});

$('#samedayweek').click(function(){
  $('#daily.popover').removeClass('popover-active');
  $('#dailytrigger').html("Same Day Previous Week");
  $('#daily.sales-chart-subtitle').html("");
});

$('#samedayyear').click(function(){
  $('#daily.popover').removeClass('popover-active');
  $('#dailytrigger').html("Same Day Previous Year");
  $('#daily.sales-chart-subtitle').html("");
});

/* Hover overlay specific date berdasarkan calendar
$('#specdate').click(function(){
  $('#daily.popover').removeClass('popover-active');
  $('#dailytrigger').html("Same Day Previous Year");
  $('#daily.sales-chart-subtitle').html("");
});*/

/*Ambil dari PHP contoh
cell2.innerHTML =
<?php
    echo '\'<select name="mainUsers" class="manageSelect">';
    $families = getAllFamiliesByUserId($userid);
    echo '<div id="famSelect"><option value="choose">Select a family...</option></div>';
    while($family = mysql_fetch_array($families)) {
        echo '<div id="famSelect"><option value="'.$family['name'].'">'.$family['name'].'</option></div>';
    }
    echo '</select>\';';
?>;*/



$(function(){
  var openMe = $('.dashboard-header-sidebar-parent-children'),
      animateTime = 200,
      dashMe = $('.dashboard-header-layout-sidebar .dashboard-header-sidebar-parent-item');
  dashMe.click(function(){
    if(openMe.height() === 0){
      dashMe.addClass('dashboard-header-sidebar-parent-item--open');
      autoHeightAnimate(openMe, animateTime);
    } else {
      openMe.stop().animate({ height: '0' }, animateTime);
      dashMe.removeClass('dashboard-header-sidebar-parent-item--open');
    }
  });
})

/* Function to animate height: auto */
function autoHeightAnimate(element, time) {
  	var curHeight = element.height(), // Get Default Height
        autoHeight = element.css('height', 'auto').height(); // Get Auto Height
    	  element.height(curHeight); // Reset to Default Height
    	  element.stop().animate({ height: autoHeight }, time); // Animate to Auto Height
}

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

setInputFilter(document.getElementById("bname"), function(value) {
  return /^[a-zA-Z]*$/.test(value);
});

setInputFilter(document.getElementById("city"), function(value) {
  return /^[a-zA-Z]*$/.test(value);
});

setInputFilter(document.getElementById("phone"), function(value) {
  return /^\d*\.?\d*$/.test(value);
})

setInputFilter(document.getElementById("spendpt"), function(value) {
  return /^\d*\.?\d*$/.test(value);
})

setInputFilter(document.getElementById("gainpt"), function(value) {
  return /^\d*\.?\d*$/.test(value);
})

setInputFilter(document.getElementById("redeempt"), function(value) {
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
