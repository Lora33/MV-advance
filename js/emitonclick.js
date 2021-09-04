AFRAME.registerComponent('emitonclick', {
    schema: {
        event: {
            type: 'string',
            default: 'start'
        }
    },
    // for start box
    //傳送開始的訊號
    events: {
        click: function() {
            //emit
            this.el.emit(this.data.event);

            //cancel interaction
            this.el.removeAttribute('class');

            //TODO: add audio analyser component to analyser element
            //按下去的時候，會把component放上去
            let analyser = document.getElementById('analyser');
            analyser.setAttribute('audioanalyser', 'src: #intro');
        }
    }
});