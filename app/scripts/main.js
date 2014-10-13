/* global d3 */
(function() {
    'use strict';

    var data = ['Long Term Prospect', 'Short Term Prospect', 'RFP/ Proposal/ BOV', 'Engaged', 'Deal Marketing', 'Under Contract', 'Deal Closed'];
    var progress = 4;
    var distBetween = (1200 / data.length);

    var svg = d3.select('svg').attr({
        //'xmlns':'http://www.w3.org/2000/svg',
        //'xlink:xlink':'http://www.w3.org/1999/xlink',
        'viewBox': -(distBetween / 2) + ' 0 1200 45',
        //'preserveAspectRatio':'xMinYMin',
        //'preserveAspectRatio':'xMidYMin',
        //'preserveAspectRatio':'xMaxYMin',
        //'preserveAspectRatio':'xMinYMid',
        'preserveAspectRatio': 'xMidYMid meet',
        //preserveAspectRatio:"xMidYMid slice",
        //'preserveAspectRatio':'xMaxYMid',
        //'preserveAspectRatio': 'xMinYMax',
        //'preserveAspectRatio':'xMidYMax',
        //'preserveAspectRatio':'xMaxYMax',
        'height': 130,
        'width': '100%'
    });


    var circles = svg.selectAll('z')
        .data(data)
        .enter();
//lines
    circles.append('line')
        .attr({
            x1: function(d, i) {
                return (distBetween * i);
            },
            x2: function(d, i) {
                if ((data.length - 1) === i) {
                    return (distBetween * i);
                }
                return (distBetween * (i + 1));
            },
            y1: 0,
            y2: 0,
            'stroke': function(d, i) {
                var color = (progress <= (i + 1)) ? '#6D7174' : '#7EA7D3';
                return color;
            },
            'stroke-width': 5
        });
//big outer circles
    circles.append('circle')
        .attr({
            cx: function(d, i) {
                return (distBetween * i);
            },
            cy: 0,
            r: 20,
            fill: function(d, i) {
                var color = (progress <= i) ? '#6D7174' : '#7EA7D3';
                return color;
            }
        });

//smaller inner circles
    circles.append('circle')
        .attr({
            cx: function(d, i) {
                return (distBetween * i);
            },
            cy: 0,
            r: 12,
            fill: function(d, i) {
                var color = (progress <= i) ? '#afafb0' : '#D2E2E5';
                return color;
            },
            stroke: '#fff',
            'stroke-width': 2
        });

//black circle
    circles.append('circle')
        .attr({
            cx: function(d, i) {
                return (distBetween * i);
            },
            cy: 0,
            r: function(d, i) {
                var prog = (progress === (i + 1)) ? 8 : 0;
                return prog;
            },
            fill: '#464646'
        });

    circles.append('text')
        .attr({
            x: function(d, i) {
                return (distBetween * i);
            },
            y: 50,
            'alignment-baseline': 'middle',
            'text-anchor': 'middle'
        })
        .append('tspan')
        .text(function(d) {
            return d;
        });

})();
