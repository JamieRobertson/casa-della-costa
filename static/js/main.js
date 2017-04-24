!(function($, highcharts, common) {
    'use strict';

    var e = common.e,
        temperatureData = common.temperatureData;

    var getMonths = function() {
        var arr = [];
        for (var i=0; i < temperatureData.length; i++) {
            arr.push(temperatureData[i]['month']);
        }
        return arr;
    };

    var getSeries = function() {
        // var arr = [];
        // for (var i=0; i < temperatureData.length; i++) {
        //     var o = {};
        //     o['name'] = temperatureData[i]['month'];
        //     o['data'] = temperatureData[i]['high'];
        //     arr.push(o);
        // }
        // return arr;

    };

    function temperatureChart($el) {
        $el.highcharts({
            chart: {
                type: 'area'
            },
            xAxis: {
                categories: getMonths()
            },
            // series: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59 ]
            series:  [{
                name: 'Average high',
                data: [0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4],
                pointInterval: 5,
                color: '#f8c200',
                tooltip: {
                    valueSuffix: '°c'
                }
            }]
        });
    }

    $(function() {
        var $lazyImages = $('img.lazy'), 
            $jsExpand = $('.jsExpand');

        // Init lazyload
        $lazyImages.lazyload();

        // Reveal content on 'Read more' click
        $jsExpand.on('click', '.jsExpandTrigger', function(e) {
            var $container = $(e.delegateTarget);
            console.log($container);
            if ($container.hasClass('is-truncated')) {
                $container.removeClass('is-truncated'); 
            } else {
                $container.addClass('is-truncated');
            }
            return false;
        });

        // Insert email address
        $('.jsAddContact').append('<a href="mailto:'+ e +'">' + e + '</a>');
        
        if (temperatureData) {
            temperatureChart($('.jsTemperatureChart'));
        }
    });
})(window.jQuery, window.highcharts, window.common);
