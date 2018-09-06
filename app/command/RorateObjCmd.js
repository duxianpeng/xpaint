/**
 * Created by User on 2014/12/27.
 */
Ext.define('XPaint.command.RotateObjCmd', {
    extend: 'Ext.app.Controller',
    singleton : true,
    listen: {
        controller: {
            '*': {
                "rotateObj": 'execute'
            }
        }
    },
    singleton : true,
    execute : function(controller, event, canvas) {
        var currentLoc = Utils.windowToCanvas(canvas, event.pageX, event.pageY);
        var rotateBefore = function(graph) {
            var isActive = graph.get('isActive');
            var tx = graph.get('left');
            var ty = graph.get('top');
            var width = graph.get('width');
            var height = graph.get('height');

            var centerX = tx + width/2;
            var centerY = ty  + height/2;
            if(isActive){
                var angleBegin = Math.atan((Configs.mousedownLoc.y - centerY)/(Configs.mousedownLoc.x - centerX));
                var angleEnd = Math.atan((currentLoc.y-centerY)/(currentLoc.x-centerX));
                graph.set('angle', (angleEnd-angleBegin));
            }
        };
        if(Configs.draggingFlag)
            GraphStack.drawAll(canvas, rotateBefore);
    }

});