var data;
var xhr = new XMLHttpRequest();
xhr.open('get', 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97', true);
// xhr.setRequestHeader('Content-type', 'application/json');
xhr.send(null);
xhr.onload = function () {    
    data = JSON.parse(xhr.responseText).result.records;

    var changeTown = document.querySelector("#changeTown");
    var list = document.querySelector(".list");
    var SelectTitle = document.querySelector('.SelectTitle');
    var hotpart = document.querySelector('.hotpart');
    //監聽select
    changeTown.addEventListener('change', townVal, false);
    hotpart.addEventListener('click', selecthot, false);


    function townVal(e) {
        var town = e.target.value;
        updatelist(town);
    }
    function selecthot(e) {
        var x = e.target.nodeName;
        var town = e.target.textContent;
        if (x != "A") {
            return
        };
        e.preventDefault();
        updatelist(town);
        ;
    }
    function updatelist(value) {
        var len = data.length;
        var str = '';
        for (var i = 0; i < len; i++) {
            if (value === data[i].Zone) {
                str += '<li><div><div class="townwrap"><div class="areapic" style ="background-image: url(' + data[i].Picture1 + ')"></div>' + '<p><span class="location">' + data[i].Name + '</p></div>' + '<div class="information clearfix"><div class="data clearfix"><img src="img/icons_clock.png"><p>' + data[i].Opentime + '</p></div>' + '<div class="data clearfix"><img src="img/icons_pin.png"><p>' + data[i].Add + '</p></div>' + '<div class="data clearfix"><img src="img/icons_phone.png"><p>' + data[i].Tel + '</p></div>' + '<div class="ticket clearfix"><img src="img/icons_tag.png"><p>' + data[i].Ticketinfo + '</p></div>' + '</div></div></li>';
            }
        }
        list.innerHTML = str;
        SelectTitle.textContent = value;
    }

};
