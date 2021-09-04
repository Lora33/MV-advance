AFRAME.registerComponent('analysereffect', {
    schema: {
        analyser: { type: 'selector' },
    },
    
    // 切換鏡頭(換camera)
    init: function () {
        let firstcam = document.getElementById('firstcam');
        let secondcam = document.getElementById('secondcam');

        this.data.analyser.addEventListener('audioanalyser-beat-high',() => {
            //TODO: add event listener

            console.log('beat!');
            // secondcam.setAttribute('camera', 'active:true');
            let rotx = Math.random() * (-90);
            let roty = Math.random() * 90 - 45;
            secondcam.setAttribute('rotation',{
                x: rotx,
                y: roty,
                z: 0
            })
            secondcam.setAttribute('camera', 'active', true);
            firstcam.setAttribute('camera', 'active', false);

            setTimeout(()=>{
                secondcam.setAttribute('camera', 'active', false);
                firstcam.setAttribute('camera', 'active', true);
            }, 300);
        });
    },

    // 音量大小改變光的強度
    // 先拿到裡面的資料
    tick: function (time, timeDelta) {
        let analyser = this.data.analyser;
        let analysercomp = analyser.components.audioanalyser;
        if(analysercomp){
            let volume = analysercomp.volume / 100;
            // console.log(volume);
            this.el.setAttribute('intensity', volume);
        }
    }
});
