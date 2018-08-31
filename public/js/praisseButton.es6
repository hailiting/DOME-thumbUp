// 创建一个父类
class PraisseButton {
    // 构造方法
    constructor(num, element) {
        this.num = num;
        this.element = element;
    }
    clickAction() {
        this.element.click(() => {
            if (this.num < 10) {
                this.element.css('-webkit-filter', 'grayscale(0)');
                $('#num').addClass('numred');
                $('#num').html(this.num + 1);
                this.num = add(this.num)
                setTimeout(function () {
                    $('#num').removeClass('numred')
                }, 1000)
                axios.get('/addNum')
                    .then(res => {
                        $('#num').html(this.num)
                    })
                    .catch((error) => {
                    })
                console.log(this.num)
            } else {
                this.element.css('-webkit-filter', 'grayscale(0)');
                this.num = 0
            }
        })
    }
}
class Thumb extends PraisseButton {
    constructor(num, element) {
        super(num, element);
    }
}
export default Thumb