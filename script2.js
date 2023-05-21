let arryPoster =   [{'name' : '미션임파서블', 'item': 'action'},
                    {'name' : '블랙팬서', 'item': 'action'},
                    {'name' : '킹스맨', 'item': 'action'},
                    {'name' : '겨울왕국', 'item': 'animation'},
                    {'name' : '업', 'item': 'animation'},
                    {'name' : '주토피아', 'item': 'animation'},
                    {'name' : '토이스토리4', 'item': 'animation'},
                    {'name' : '극한직업', 'item': 'comedy'},
                    {'name' : '미스터빈', 'item': 'comedy'},
                    {'name' : '공조', 'item': 'action'},
                    {'name' : '라이브오브파이', 'item': 'drama'},
                    {'name' : '쇼생크탈출', 'item': 'drama'},
                    {'name' : '타이타닉', 'item': 'drama'},
                    {'name' : '겟아웃', 'item': 'thriller'},
                    {'name' : '암수살인', 'item': 'thriller'},
                    {'name' : '어스', 'item': 'thriller'},
                    {'name' : '올빼미', 'item': 'thriller'},
                    {'name' : '숨바꼭질', 'item': 'horror'},
                    {'name' : '컨저링', 'item': 'horror'},
                    {'name' : '클로젯', 'item': 'horror'},
                    {'name' : '어바웃타임', 'item': 'romance'},
                    {'name' : '미비포유', 'item': 'romance'},
                    {'name' : '이프온리', 'item': 'romance'},
                    {'name' : '장난스런키스', 'item': 'romance'},
                    {'name' : '국제시장', 'item': 'drama'},
                    {'name' : '세얼간이', 'item': 'comedy'},
                    {'name' : '인턴', 'item': 'comedy'},
                    {'name' : '어벤져스', 'item': 'action'}]

let showingArry = [];                

const shuffleArray = array => {
    for (var i = 0; i < array.length; i++) {
        var j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];     
        array[i] = array[j];       
        array[j] = temp;           
    }
    return array;
};

for(let i =0; i<arryPoster.length; i++){
    let posters = `<div class="itemBox" data-item="${arryPoster[i].item}"><img src="./images/${arryPoster[i].name}.jpg" alt="${arryPoster[i].name}"></div>`
    showingArry.push(posters);
}

shuffleArray(showingArry);


$(document).ready(function(){
    $('.poster').append(showingArry);

    let list = $(".list");
    let itemBox = $(".itemBox");

    list.on('click',function(){
        list.removeClass('active');
        $(this).addClass('active');
        let dataFilter = $(this).attr('data-filter');
        console.log(showingArry);

        itemBox.each(function(){
            $(this).addClass('hide');
            $(this).removeClass('active');
            if($(this).attr('data-item') == dataFilter || dataFilter == 'all'){
                $(this).addClass('active');
                $(this).removeClass('hide');
            }
        })
    })
    
})