    let f = "";
    /*父类*/
    class Praise {
        constructor(num, element) {
            this.num = num;
            this.element = element;
        }
        clickBtn() {
            this.element.click(() => {
                //点击稀释
                if (f) {
                    clearTimeout(f);
                }
                f = setTimeout(() => {
                    if (this.num < 10) {
                        this.num = add(this.num);
                        this.element.removeClass('banned-click');
                        $('.love').addClass('love-show');
                        setTimeout(() => {
                            $('.love').removeClass('love-show'); 
                        }, 1000);
                        // Make a request for a user with a given ID 
                        axios.get('/index/update')
                            .then(function(response) {
                                console.log(response);
                            })
                            .catch(function(response) {
                                console.log(response);
                            });
                    } else {
                        this.num = 0;
                        this.element.addClass('banned-click')
                    }
                    console.log(this.num);
                }, 800)
            });
        }
    }
    /*子类*/
    class Thumb extends Praise {
        constructor(num, element) {
            super(num, element);
        }
    }

    export default { Thumb }