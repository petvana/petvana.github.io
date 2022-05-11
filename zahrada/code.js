//window.alert("sometext 2");

var drawFce = function () {
    //draw models when all model resources are ready
    if ((!visible) && model_A && model_A.ready) { 
        model_A.draw({
            // 50.2017103N, 14.8604653E
            navCoords: [14.8439511, 50.2003628, 222.1 + 5.3],
            heightMode: 'fix',
            rotation: [0,0,0],
            scale: [1, 1, 1],
            ambientLight: [90,90,90],

            //other possible value are:
            depthOffset: [0,0,-3]  // -10 //when you need some zbuffer tolerance
                                    // you will probably only need to change first
                                    // value in the array
            //depthOnly: true          //for hit test implementation
            //onLoaded: (fuction(){})  //callback when model is loded
        });
    }    

    if (visible && carModel && carModel.ready) { 
        carModel.draw({
            navCoords: [14.8439511, 50.2003628, -0.5],
            heightMode: 'float',
            rotation: [0,0,0],
            scale: [1, 1, 1],
            ambientLight: [90,90,90]
        });
    }  
};

function onDrawModels(renderChannel) {
    if (renderChannel != 'base') {
        return; //draw only in base channel
    }
    drawFce();      
} 