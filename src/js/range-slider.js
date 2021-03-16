const rangeSlider = document.getElementById('range-slider');
if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [0, 600],
        connect: true,
        tooltips: true,
        step: 1,
        range: {
            'min': 0,
            'max': 600
        },
        format: {
            to: function (value) {
                return parseInt(value);

            },
            from: function (value) {
                return parseInt(value);
            }
        }
    });

}

