'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var f = "";
/*父类*/

var Praise = function () {
    function Praise(num, element) {
        _classCallCheck(this, Praise);

        this.num = num;
        this.element = element;
    }

    _createClass(Praise, [{
        key: 'clickBtn',
        value: function clickBtn() {
            var _this = this;

            this.element.click(function () {
                //点击稀释
                if (f) {
                    clearTimeout(f);
                }
                f = setTimeout(function () {
                    if (_this.num < 10) {
                        _this.num = add(_this.num);
                        _this.element.removeClass('banned-click');
                        $('.love').addClass('love-show');
                        setTimeout(function () {
                            $('.love').removeClass('love-show');
                        }, 1000);
                        // Make a request for a user with a given ID 
                        axios.get('/index/update').then(function (response) {
                            console.log(response);
                        }).catch(function (response) {
                            console.log(response);
                        });
                    } else {
                        _this.num = 0;
                        _this.element.addClass('banned-click');
                    }
                    console.log(_this.num);
                }, 800);
            });
        }
    }]);

    return Praise;
}();
/*子类*/


var Thumb = function (_Praise) {
    _inherits(Thumb, _Praise);

    function Thumb(num, element) {
        _classCallCheck(this, Thumb);

        return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, num, element));
    }

    return Thumb;
}(Praise);

exports.default = { Thumb: Thumb };
