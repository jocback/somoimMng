var fullCalendar;
var calparam = [
    {
        "title": "All Day Event1Event1Event1Event1",
        "start": "2024-01-01"
    },
    {
        "title": "All Day Even2",
        "start": "2024-01-01"
    },
    {
        "title": "All Day Even2",
        "start": "2024-01-01"
    },
    {
        "title": "All Day Even2",
        "start": "2024-01-01 10:30",
        "end": "2024-01-01 12:30",
    },
    {
        "title": "All Day Even2",
        "start": "2024-01-01"
    },
    {
        "title": "All Day Event3",
        "start": "2024-01-01"
    },
    {
        "title": "tuesday",
        "start": "2024-01-02 10:30",
        "end": "2024-01-02 12:30"
    },
    {
        "title": "tuesday",
        "start": "2024-01-02 10:30",
        "end": "2024-01-02 12:30"
    },
    {
        "title": "tuesday",
        "start": "2024-01-02 10:30",
        "end": "2024-01-02 12:30"
    },
    {
        "title": "tuesday",
        "start": "2024-01-02 10:30",
        "end": "2024-01-02 12:30"
    },
    {
        "title": "tuesday",
        "start": "2024-01-02 10:30",
        "end": "2024-01-02 12:30"
    },
    {
        "title": "tuesday",
        "start": "2024-01-02 10:30",
        "end": "2024-01-02 12:30"
    },
    {
        "title": "tuesday",
        "start": "2024-01-02 10:30",
        "end": "2024-01-02 12:30"
    },
    {
        "title": "tuesday",
        "start": "2024-01-02 10:30",
        "end": "2024-01-02 12:30"
    },
    {
        "title": "wednesday",
        "start": "2024-01-03 12:30",
        "end": "2024-01-03 14:30"
    },
    {
        "title": "All Day Event6",
        "start": "2024-01-01"
    },
    {
        "title": "Conference",
        "start": "2024-01-20",
        "end": "2024-01-22"
    },
    {
        "title": "Meetin111g",
        "start": "2024-01-22 10:30",
        "end": "2024-01-22 12:30"
    },
]
var schCalendar = {
    // 최조실행
    init: function() {
        fullCalendar = $('#calendar').fullCalendar({
            themeSystem: 'bootstrap4',
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,listMonth'
            },
            weekNumbers: true,
            selecttable: true,
            eventLimit: true, // allow "more" link when too many events
            events: calparam,
            select: function(e, t, n) {
                console.log('select');
                console.log(e);
                console.log(t);
                console.log(n);
            },
            eventClick: function(e, t, n) {
                console.log('eventClick');
                console.log(e);
                console.log(t);
                console.log(n);
            },
            dateClick: function(info) {
                alert('clicked ' + info.dateStr);
            },
        });
    },
    bind: function() {
    },
}


$(function() {
    schCalendar.init();
});