// 分类 显示
var qu_ = document.getElementsByClassName('qu')[0];
var area_ = document.getElementsByClassName('someList')[0];
qu_.onclick = function(event){
    event.stopPropagation();
    // 区域
    area_.style.display = 'block';
    qu_.style.color = '#FF8A00';
    // 价格
    price_.style.display  = 'none';
    mou_.style.color = '#666666';
    house_.style.display = 'none'
    fang_.style.color = '#666666';
    more_.style.display = 'none';
    geng_.style.color = '#666666';
}
// 价格 
var mou_ = document.getElementsByClassName('mou')[0];
var price_ = document.getElementsByClassName('price')[0];
mou_.addEventListener('click',function(){
    price_.style.display = 'block';
    mou_.style.color = '#FF8A00';
    qu_.style.color = '#666666';
    fang_.style.color = '#666666';
    house_.style.display = 'none'
    more_.style.display = 'none';
    geng_.style.color = '#666666';
})
// 房型
var fang_ = document.getElementsByClassName('fang')[0];
var house_ = document.getElementsByClassName('house')[0];
fang_.onclick = function(){
    house_.style.display = 'block';
    price_.style.display = 'none';
    area_.style.display = 'none';
    fang_.style.color = '#FF8A00';
    mou_.style.color = '#666666';
    qu_.style.color = '#666666';
    more_.style.display = 'none';
    geng_.style.color = '#666666';
}
// 更多 
var geng_ = document.getElementsByClassName('geng')[0];
var more_ = document.getElementsByClassName('more')[0];
geng_.onclick = function(){
    more_.style.display = 'block';
    price_.style.display = 'none';
    area_.style.display = 'none';
    house_.style.display = 'none';
    geng_.style.color = '#FF8A00';
    mou_.style.color = '#666666';
    qu_.style.color = '#666666';
    fang_.style.color = '#666666';
}
more_.onclick = function(){
    more_.style.display = 'block';
}
var secondContent_ =document.getElementsByClassName('secondContent')[0];
secondContent_.onclick = function(){
    more_.style.display = 'none';
    price_.style.display = 'none';
    area_.style.display = 'none';
    house_.style.display = 'none';
    geng_.style.color = '#666666';
    mou_.style.color = '#666666';
    qu_.style.color = '#666666';
    fang_.style.color = '#666666';
}