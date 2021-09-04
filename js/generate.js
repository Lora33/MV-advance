AFRAME.registerComponent('generatefloor', {
    // for pool obj container
    schema: {
        pool: {
            type: 'string'
        },
        zoffset: {
            default: 0
        }
    },

    init: function () {
        this.start = false;

        this.el.sceneEl.addEventListener('start', ()=>{
            //generate floor
            this.gen();

            //set start
            this.start = true;
        });
    },

    //動畫放這裡
    tick: function (time, timeDelta) {

        //count on start
        //開始長地板時，紀錄時間
        if (this.start) {
            this.oldTime = time;
            this.start = false;
        }

        //TODO: check if time passsss
        //點方塊後就開始移動if(this.start == true)
        //三秒後再開始移動
        if (time - this.startTime > 3000) {
            //TODO: change position here
            //位置先拿出來，改位置，再放回去
            let pos = this.el.getAttribute('position');
            //console.log(pos);
            //{x:0, y:0, z:0}
            pos.z += 0.05;
            //pos.z += 0.001 * timeDelta;
            if(pos.z >= 30){
               pos.z =0;
            } 
            this.el.setAttribute('position', pos);
        }
    },

    gen: function() {

        let planepool = this.el.sceneEl.components.pool__plane;
        // or
        // let planepool = this.el.sceneEl.components['pool__plane'];

        for(let i=0; i<100; i++){
            setTimeout(()=>{
                let el = planepool.requestEntity();
                el.setAttribute('position', '0 0 '+(i*-1));
                el.play();
            }, i*200);
        }
    }
});
