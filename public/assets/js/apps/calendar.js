"use strict";

!function (NioApp, $) {
  "use strict";

  var $win = $(window),
      $body = $('body'),
      breaks = NioApp.Break; // Inbox Variable

  var $cal_aside = $('.nk-calendar-aside'),
      $cal_body = $('.nk-calendar-body');

  NioApp.Calendar = function () {
    function fc_init() {
      var calendarEl = document.getElementById('calendar');
      var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['interaction', 'dayGrid', 'timeGrid', 'bootstrap'],
        themeSystem: 'bootstrap',
        bootstrapFontAwesome: false,
        defaultView: 'dayGridMonth',
        defaultDate: '2020-02-07',
        selectable: true,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [{
          title: 'All Day Event',
          start: '2020-02-01'
        }, {
          title: 'Long Event',
          start: '2020-02-07',
          end: '2020-02-10'
        }, {
          groupId: '999',
          title: 'Repeating Event',
          start: '2020-02-09T16:00:00'
        }, {
          groupId: '999',
          title: 'Repeating Event',
          start: '2020-02-16T16:00:00'
        }, {
          title: 'Conference',
          start: '2020-02-11',
          end: '2020-02-13'
        }, {
          title: 'Meeting',
          start: '2020-02-12T10:30:00',
          end: '2020-02-12T12:30:00'
        }, {
          title: 'Lunch',
          start: '2020-02-12T12:00:00'
        }, {
          title: 'Meeting',
          start: '2020-02-12T14:30:00'
        }, {
          title: 'Birthday Party',
          start: '2020-02-13T07:00:00'
        }, {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2020-02-28'
        }]
      });
      calendar.render();
    }

    fc_init();
  };

  NioApp.coms.docReady.push(NioApp.Calendar);
}(NioApp, jQuery);