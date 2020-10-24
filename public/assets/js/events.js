// counter function
(function ($){
    $.fn.counter = function() {
      const $this = $(this),
      numberFrom = parseInt($this.attr('data-from')),
      numberTo = parseInt($this.attr('data-to')),
      delta = numberTo - numberFrom,
      deltaPositive = delta > 0 ? 1 : 0,
      time = parseInt($this.attr('data-time')),
      changeTime = 10;
      
      let currentNumber = numberFrom,
      value = delta*changeTime/time;
      var interval1;
      const changeNumber = () => {
        currentNumber += value;
        //checks if currentNumber reached numberTo
        (deltaPositive && currentNumber >= numberTo) || (!deltaPositive &&currentNumber<= numberTo) ? currentNumber=numberTo : currentNumber;
        this.text(parseInt(currentNumber));
        currentNumber == numberTo ? clearInterval(interval1) : currentNumber;  
      }
  
      interval1 = setInterval(changeNumber,changeTime);
    }
  }(jQuery));
  
  $(document).ready(function(){
  
    $('.count-up').counter();
    $('.count1').counter();
    $('.count2').counter();
    $('.count3').counter();
    
    new WOW().init();
    
    setTimeout(function () {
      $('.count5').counter();
    }, 3000);
  });

// calendar
$('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'addEventButton',
      right: 'month,agendaWeek,agendaDay,listWeek'
    },
    defaultDate: '2018-11-16',
    navLinks: true,
    editable: true,
    eventLimit: true,
    events: [{
        title: 'Simple static event',
        start: '2018-11-16',
        description: 'Super cool event'
      },
  
    ],
    customButtons: {
      addEventButton: {
        text: 'Add new event',
        click: function () {
          var dateStr = prompt('Enter date in YYYY-MM-DD format');
          var date = moment(dateStr);
  
          if (date.isValid()) {
            $('#calendar').fullCalendar('renderEvent', {
              title: 'Dynamic event',
              start: date,
              allDay: true
            });
          } else {
            alert('Invalid Date');
          }
  
        }
      }
    },
    dayClick: function (date, jsEvent, view) {
      var date = moment(date);
  
      if (date.isValid()) {
        $('#calendar').fullCalendar('renderEvent', {
          title: 'Dynamic event from date click',
          start: date,
          allDay: true
        });
      } else {
        alert('Invalid');
      }
    },
  });