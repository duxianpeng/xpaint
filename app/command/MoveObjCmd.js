/**
 * Created by User on 2014/12/27.
 */
Ext.define('XPaint.command.MoveObjCmd', {
    extend: 'Ext.app.Controller',
    singleton : true,
    listen: {
        controller: {
            '*': {
                "moveObj": 'execute'
            }
        }
    },
    singleton : true,
    execute : function(controller, event, canvas) {
        var currentLoc = Utils.windowToCanvas(canvas, event.pageX, event.pageY);

        var move = function(graph) {
            var isActive = graph.get('isActive');

            if(isActive){
                var currentLeft = currentLoc['x'] - graph.get('dragOffsetX');
                var currentTop = currentLoc['y'] - graph.get('dragOffsetY');
                graph.set('left', currentLeft);
                graph.set('top', currentTop);
            }
        };

        if(Configs.draggingFlag)
            GraphStack.drawAll(canvas, move);
    }

});