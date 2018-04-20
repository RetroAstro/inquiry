
$(document).ready(() => {
    var texts = $('header .text');
    texts.each((i, ele) => {
        var el = $(ele);
        el.click(() => {
            texts.css('color', '#A4DFFF');
            el.css('color', '#fff');
            texts.removeClass('active');
            el.addClass('active');
            $('main').css('margin-left', `-${i}00%`);
        })
    })
})

$.ajax({
    url: '/loadData',
    method: 'POST',
    success: function (data) { 
        destruct(data);
    }
})

function destruct(data) {

    for ( let k of Object.keys(data) ) {

        switch (k) {
            case 'grade':
            loadGrade(data[k]);
            break;
            case 'restart':
            console.log('no data');
            break;
            case 'arrange':
            loadArrange(data[k]);
            break;
        }

    }

}

function loadGrade(values) { 
    for ( let val of values ) {
        let { score, name, type } = val;
        let html = 
        `
        <li>
        <div class="lesson two">${name}</div>
        <div class="grade-info one">
            <span>${score}</span>
            <button>${type}</button>
        </div>
        </li>
        `
        $('.grade ul').append(html);
    }
}

function loadArrange(values) { 
    for ( let val of values ) {
        let { date, seat, name, place, time } = val;
        let html = 
        `
        <li>
            <div class="lesson two">
                <p class="les_name">${name}</p>
                <div class="les_time">
                    <span class="les_time_clock"></span>
                    <span class="les_time_date">${date}</span>
                    <span class="les_time_when">${time}</span>
                </div>
            </div>
            <div class="grade-info one">
                <div class="grade-row">
                    <div class="flex">
                        <i class="location"></i>
                        <span>${place}</span>
                    </div>
                </div>
                <div class="grade-row">
                    <div class="flex">
                        <i class="seat"></i>
                        <span>${seat}</span>
                    </div>
                </div>
            </div>
        </li>
        `
        $('.exam ul').append(html);
    }
}

