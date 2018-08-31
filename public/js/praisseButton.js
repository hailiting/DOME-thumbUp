'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 创建一个父类
var PraisseButton = function () {
    // 构造方法
    function PraisseButton(num, element) {
        _classCallCheck(this, PraisseButton);

        this.num = num;
        this.element = element;
    }

    _createClass(PraisseButton, [{
        key: 'clickAction',
        value: function clickAction() {
            var _this = this;

            this.element.click(function () {
                _this.element.css('-webkit-filter', 'grayscale(0)');
                $('#num').addClass('numred');
                _this.num = add(_this.num);
                $('#num').html(_this.num + 1);
                setTimeout(function () {
                    $('#num').removeClass('numred');
                }, 1000);
                axios.get('/addNum').then(function (res) {
                    console.log(res);
                    $('#num').html(_this.num);
                }).catch(function (error) {
                    console.log(error);
                });
                console.log(_this.num);
            });
        }
    }]);

    return PraisseButton;
}();

var Thumb = function (_PraisseButton) {
    _inherits(Thumb, _PraisseButton);

    function Thumb(num, element) {
        _classCallCheck(this, Thumb);

        return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, num, element));
    }

    return Thumb;
}(PraisseButton);

exports.default = Thumb;
