//window.alert("sometext 2");

var drawFce = function () {
    //draw models when all model resources are ready
    if (model_protihlukovka && model_protihlukovka.ready) { 
        model_protihlukovka.draw({
            // 50.2017103N, 14.8604653E
            navCoords: [14.8604653, 50.2017103, 222.1 + 2.3],
            heightMode: 'fix',
            rotation: [0,0,0],
            scale: [1, 1, 1],
            ambientLight: [90,90,90],

            //other possible value are:
            depthOffset: [-0,0,0]  // -10 //when you need some zbuffer tolerance
                                    // you will probably only need to change first
                                    // value in the array
            //depthOnly: true          //for hit test implementation
            //onLoaded: (fuction(){})  //callback when model is loded
        });
    } 

    //draw models when all model resources are ready
    if (model_stratov && model_stratov.ready) { 
        model_stratov.draw({
            // 50.2017103N, 14.8604653E
            navCoords: [14.8604653, 50.2017103, 222.1 + 2.3],
            heightMode: 'fix',
            rotation: [0,0,0],
            scale: [1, 1, 1],
            ambientLight: [90,90,90],

            //other possible value are:
            depthOffset: [-15,0,0]  // -10 //when you need some zbuffer tolerance
                                    // you will probably only need to change first
                                    // value in the array
            //depthOnly: true          //for hit test implementation
            //onLoaded: (fuction(){})  //callback when model is loded
        });
    } 

    //draw models when all model resources are ready
    if ((!visible) && model_A && model_A.ready) { 
        model_A.draw({
            // 50.2017103N, 14.8604653E
            navCoords: [14.8604653, 50.2017103, 222.1 + 2.3],
            heightMode: 'fix',
            rotation: [0,0,0],
            scale: [1, 1, 1],
            ambientLight: [90,90,90],

            //other possible value are:
            depthOffset: [0,0,0]  // -10 //when you need some zbuffer tolerance
                                    // you will probably only need to change first
                                    // value in the array
            //depthOnly: true          //for hit test implementation
            //onLoaded: (fuction(){})  //callback when model is loded
        });
    }    

    if ((visible) && model_B && model_B.ready) { 
        model_B.draw({
            // 50.2017103N, 14.8604653E
            navCoords: [14.8604653, 50.2017103, 222.1 + 2.3],
            heightMode: 'fix',
            rotation: [0,0,0],
            scale: [1, 1, 1],
            ambientLight: [90,90,90],

            //other possible value are:
            depthOffset: [-0,0,0]  // -10 //when you need some zbuffer tolerance
                                    // you will probably only need to change first
                                    // value in the array
            //depthOnly: true          //for hit test implementation
            //onLoaded: (fuction(){})  //callback when model is loded
        });
    }  

    if (visible && carModel && carModel.ready) { 
        carModel.draw({
            navCoords: [14.8602700, 50.1853, -0.5],
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