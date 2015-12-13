var weekends = [
    [5, 12, 2015],
    [6, 12, 2015],
    [12, 12, 2015],
    [13, 12, 2015],
    [19, 12, 2015],
    [20, 12, 2015],
    [26, 12, 2015],
    [27, 12, 2015],
    [1, 1, 2016],
    [2, 1, 2016],
    [3, 1, 2016]
];

var spDay0 = [
    [30, 11, 2015],
    [14, 12, 2015],
    [28, 12, 2015]
];

var spDay1 = [
    [7, 12, 2015],
    [21, 12, 2015],
    [4, 1, 2016]
];

function Calendar()
{
    this.curDay = new Date();
    this.curDisplayMonth = this.curDay.getMonth();
    this.curDisplayYear = this.curDay.getFullYear();
    this.first = new Date(this.curDay.getFullYear(), this.curDisplayMonth, 1);
    this.first = this.getFirstDay();
}

Calendar.prototype.getFirstDay = function(){
    var temp = this.first;
    temp.setFullYear(this.curDisplayYear);
    temp.setMonth(this.curDisplayMonth);
    temp.setDate(1);
    temp.setDate(1 - ((temp.getDay()+6) % 7));
    return temp;
};
Calendar.prototype.getMonthString = function(){
    switch (this.curDisplayMonth)
    {
        case 0:
            return "Jan";
        case 1:
            return "Feb";
        case 2:
            return "Mar";
        case 3:
            return "Apr";
        case 4:
            return "May";
        case 5:
            return "Jun";
        case 6:
            return "Jul";
        case 7:
            return "Aug";
        case 8:
            return "Sep";
        case 9:
            return "Oct";
        case 10:
            return "Nov";
        case 11:
            return "Dec";
    }
};
Calendar.prototype.print = function() {
    var table = document.getElementById("calendar");
    var cal = "";
    var t = this.first;
    // first row
    cal += "<tr><td class='first-row'><button class='prevMonth' onClick='calendar.getPrevMonth()'><</button></td><td colspan='5' class='curMonth first-row'>";
    cal += this.getMonthString() + " " + this.curDisplayYear;
    cal += "</td><td class='first-row'><button class='nextMonth' onclick='calendar.getNextMonth()'>></button></td></tr>";
    cal += "<tr><td class='first-row'>Mon</td><td class='first-row'>Tue</td><td class='first-row'>Wed</td><td class='first-row'>Thu</td><td class='first-row'>Fri</td><td class='first-row weekend-day'>Sat</td><td class='first-row weekend-day'>Sun</td></tr>";
    for(var i = 0; i < 5; i++)
    {
        cal += "<tr>";
        for(var j = 0; j < 7; j++)
        {
            var f = 0; //flag
            var classes = "";
            var circle = 0;
            weekends.forEach(function(item) {
                if (t.getDate() == item[0] && t.getMonth() + 1 == item[1] && t.getFullYear() == item[2])
                {
                    f = 1;
                    classes += "weekend";
                }
            });
            if(!f)
            {
                spDay0.forEach(function(item) {
                    if (t.getDate() == item[0] && t.getMonth() + 1 == item[1] && t.getFullYear() == item[2])
                    {
                        f = 1;
                        classes += " spDay0";
                    }
                });
            }
            if(!f)
            {
                spDay1.forEach(function(item) {
                    if (t.getDate() == item[0] && t.getMonth() + 1 == item[1] && t.getFullYear() == item[2])
                    {
                        f = 1;
                        circle = 1;
                        classes += " spDay1";
                    }
                });
            }
            if(t.getMonth() != this.curDisplayMonth)
                classes += " non-cur-month"
            cal += "<td class='" + classes + "'>";
            if(circle)
            {
                cal += "<span class='red-circle'>";
            }
            if(t.getDate() < 10)
                cal += "0";
            cal += t.getDate().toString();
            if(circle)
            {
                cal += "</span>";
            }
            cal += "</td>";

            t.setDate(t.getDate() + 1);
        }
        cal += "</tr>";
    }
    table.innerHTML = cal;
};
Calendar.prototype.getPrevMonth = function(){
    this.curDisplayMonth--;
    this.curDisplayMonth %= 12;
    if(this.curDisplayMonth < 0)
        this.curDisplayMonth += 12;
    if(this.curDisplayMonth % 12 == 11)
    {
        this.curDisplayYear--;
    }
    this.first = new Date(this.curDisplayYear, this.curDisplayMonth, 1);
    this.first = this.getFirstDay();
    this.print();
};
Calendar.prototype.getNextMonth = function(){
    this.curDisplayMonth++;
    this.curDisplayMonth %= 12;
    if(this.curDisplayMonth < 0)
        this.curDisplayMonth += 12;
    if(this.curDisplayMonth % 12 == 0)
    {
        this.curDisplayYear++;
    }
    this.first = new Date(this.curDisplayYear, this.curDisplayMonth, 1);
    this.first = this.getFirstDay();
    this.print();
};
