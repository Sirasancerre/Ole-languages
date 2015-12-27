/*
var frH3 = 'Intensive Spanish Course',
    frDescription = 'This intensive Spanish course is conceived for adults of any age who wish to improve their Spanish language skills rapidly.The intensive course runs four lessons per day from Monday to Friday in the morning or the afternoon.</p><p>Based on an immersive,communication-based approach to language acquisition students learn the Spanish grammar step by step according to the Common European Framework of Reference(CEFR)accompanied by writing,listening and conversational exercises as,for example,reading newspaper articles,practicing telephone conversations and watching Spanish films followed by analysis and debate.</p><p>Those who would like to practice their Spanish further and improve their oral skills can combine the intensive course with 5 lessons of conversation classes per week(1 hr/day). ',
    a = [20, 135, 4];
*/
$(document).ready(function() {
    $('.navbar-toggle').on("click", function() {
        $('.navbar-toggle').toggleClass('navbar-toggle-visible');
        $('.mobile-menu-wrapper').toggleClass('mobile-menu-wrapper--visible');
    });
    $( ".input-disabled" ).on("click", function() {
        var tag = $(this).get(0).tagName,
            id = $(this).index(".input-disabled") + 1;
        if(tag == "SELECT") {
            if($(this).val()) {
                $(".input-disabled:eq(" + id + ")").removeAttr("disabled");
            };
        }
        else if(tag == "INPUT") {
            $(this).keyup(function () {
                $(".input-disabled:eq(" + id + ")").removeAttr("disabled");
            });
        }
    });
});
$(function() {
         $(".desc-course-btn").click(function() {
             var name = $(this).prop("name");
             /*
             var i = 0;
             console.log(name);
             var q = "";
             if (i == 0) {
                q += '<div class="content text-center"> <div class="blackout"></div> <div class="inline-h"> <h3>Intensive Spanish Course</h3> </div> <h4>20 lessons/ week</h4> <div class="cost"> <div>from</div> <div class="price">135€</div> </div> </div> <div class="row cal"> <div class="col-sm-6"> <div class="media"> <div class="media-left media-top"> <img class="media-object i1" src="img/calendar_clock.png" alt="Our Students say"> </div> <div class="media-body"> <span class="media-heading">20 lessons a Week</span> <span>4 lessons a Day</span> </div> </div> <div class="media"> <div class="media-left media-top"> <img class="media-object i2" src="img/icon-calendar.png" alt="Our Students say"> </div> <div class="media-body"> <span class="media-heading">Monday to Friday</span> </div> </div> <div class="media"> <div class="media-left media-top"> <img class="media-object i3" src="img/icon-calendar-lenght.png" alt="Our Students say"> </div> <div class="media-body"> <span class="media-heading light">Lenght of the course</span> <span>From 1 to 52 weeks</span> </div> </div> </div> <div class="col-sm-6"> <div class="media"> <div class="media-left media-top"> <img class="media-object i4" src="img/icon-clock-lenght.png" alt="Our Students say"> </div> <div class="media-body"> <span class="media-heading light">Lenght of the lessons</span> <span>45 minutes</span> </div> </div> <div class="media"> <div class="media-left media-top"> <img class="media-object i2" src="img/icon-clock.png" alt="Our Students say"> </div> <div class="media-body"> <span class="media-heading">9h30 to 13h30 or 14h40 to 18h30</span> </div> </div> <div class="media"> <div class="media-left media-top"> <img class="media-object i2" src="img/icon-check.png" alt="Our Students say"> </div> <div class="media-body"> <span class="media-heading">Available all year</span> </div> </div> </div> </div> <div class="pish"> <h5>Cours Description</h5> <p>This intensive Spanish course is conceived for adults of any age who wish to improve their Spanish language skills rapidly. The intensive course runs four lessons per day from Monday to Friday in the morning or the afternoon.</p> <p>Based on an immersive, communication-based approach to language acquisition students learn the Spanish grammar step by step according to the Common European Framework of Reference (CEFR) accompanied by writing, listening and conversational exercises as, for example, reading newspaper articles, practicing telephone conversations and watching Spanish films followed by analysis and debate. </p> <p>Those who would like to practice their Spanish further and improve their oral skills can combine the intensive course with 5 lessons of conversation classes per week (1 hr/day). <a class="" data-toggle="collapse" data-target="#hide-me">Check Starting dates ></a></p> <div id="hide-me" class="collapse"> <h5>Starting dates</h5> <p>If you already have a basic understanding of Spanish it is possible to start any course any given Monday throughout the year (in case Monday is a public holiday classes start on Tuesday). Please note that it is essential to do the level test before the course start. For absolute beginner we offer intensive and semi-intensive courses every other week. The start dates for beginners are marked in green.</p> <div class="day0"><div></div>Starting dates for absolute beginners</div> <div class="day1"><div></div>Starting dates for all levels except absolute beginners</div> <div class="weekend"><div></div>Dates on which the school is closed</div> <div class="cal"> <table class="calendar" id="calendar"></table> </div> </div> <div class="gghnh"> <h5>Intensive Course’s prices</h5> <div class="btn-group"> <button type="button" class="btn btn-default">1 week</button> <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span class="caret"></span> </button> <ul class="dropdown-menu"> <li><a href="#">1 week</a></li> <li><a href="#">2 week</a></li> <li><a href="#">3 week</a></li> <li><a href="#">4 week</a></li> </ul> </div> <div class="cost"> <div class="price">135€</div> </div> </div> <button type="submit" class="btn btn-default btn-block button red">Book Intensive Course</button> <button type="submit" class="btn btn-default btn-block button white"><img src="img/download.png" alt="download">Download Course</button> <a name="fr" class="desc-course-btn"><svg width="496px" height="65px" viewBox="0 0 496 65" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"> <g id="Courses" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Desktop-HD" transform="translate(-116.000000, -2255.000000)"> <g id="Intensive" transform="translate(85.000000, 126.000000)"> <g id="+" transform="translate(32.000000, 2125.500000)"> <path d="M0.5,39 L175.5,39" id="Line" class="plus-stroke" stroke-width="2" stroke-linecap="square"></path> <circle id="Oval-97" class="plus-stroke" stroke-width="2" sketch:type="MSShapeGroup" cx="242" cy="36" r="31"></circle> <text transform="translate(242.500000, 35.000000) rotate(-46.000000) translate(-242.500000, -35.000000) " font-family="Open Sans" font-size="50" font-weight="bold" class="plus-fill"> <tspan x="228" y="54">+</tspan> </text> <path d="M307.5,39 L493.5,39" id="Line-Copy-7" class="plus-stroke" stroke-width="2" stroke-linecap="square"></path> </g> </g> </g> </g> </svg></a> </div>';
                 i = 1;
                 $("#" + name + " .full-desc-block").prepend(q);
             }
             */
             $("#" + name).toggleClass("active");
         })
    });
window.addEventListener("scroll", reload);
function reload()
{
    pos = bl.getBoundingClientRect().top + pageYOffset;
clay();
}
document.addEventListener("scroll", clay);
var bl = document.getElementById("clayBlock");

var pos = bl.getBoundingClientRect().top + pageYOffset;
clay();
function clay() {
    if(scrollY >= pos)
    {
        bl.classList.add("clay");
    }
    else
    {
        bl.classList.remove("clay");
    }
}