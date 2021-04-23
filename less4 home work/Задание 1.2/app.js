'use strict';


//Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры
//наследования -> механика наследования),
//а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
//типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
//б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
//помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
//свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
//Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
//highlighted значение true.


//ES5
function Post(author, date) {
    this.author = author;
    this.date = date;
}

Post.prototype.edit = function(text) {
    this.text = text;
};

function AttachedPost(author, date, text) {
    Post.call(this, author, date, text)
    this.highlighted = 'false';
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = 'true';
};

let obj3 = new AttachedPost('автор', '22 апреля');

obj3.edit('текст');
obj3.makeTextHighlighted();




//ES6
class Post {
    constructor(author, date) {
        this.author = author;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

class AttachedPost extends Post {
    constructor(author, date, text) {
        super(author, date, text)
        this.highlighted = 'false';
    }

    makeTextHighlighted() {
        this.highlighted = 'true';
    }
}

let obj3 = new AttachedPost('автор', '22 апреля');

obj3.edit('текст');
obj3.makeTextHighlighted();