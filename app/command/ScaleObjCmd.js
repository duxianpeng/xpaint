/**
 * Created by User on 2014/12/27.
 */
Ext.define('XPaint.command.ScaleObjCmd', {
    extend: 'Ext.app.Controller',
    singleton : true,
    listen: {
        controller: {
            '*': {
                "scaleObj": 'execute'
            }
        }
    },
    singleton : true,
    execute : function(controller, event, canvas, isFinal) {
        var currentLoc = Utils.windowToCanvas(canvas, event.pageX, event.pageY);
        var thisController = this;
        var drawBefore = function(graph) {
            var isActive = graph.get('isActive');
            var scaleX = graph.get('scaleX');
            var scaleY = graph.get('scaleY');

            var width = graph.get('width');
            var height = graph.get('height');
            var left = graph.get('left');
            var top = graph.get('top');
            if(isActive){
                var distanceObj = thisController.detectDrag(canvas, left, top, width, height, currentLoc);
                var newScaleX = distanceObj.x == 0 ? scaleX : (distanceObj.x+width)/width;
                var newScaleY = distanceObj.y == 0 ? scaleY : (distanceObj.y+height)/height;
                graph.set('scaleX', newScaleX);
                graph.set('scaleY', newScaleY);
            }
        };
        var cursorCallback = function(graph) {
            var isActive = graph.get('isActive');

            var width = graph.get('tempWidth');
            var height = graph.get('tempHeight');
            var left = graph.get('tempLeft');
            var top = graph.get('tempTop');
            if(isActive){
                thisController.detectCursor(canvas, left, top, width, height, currentLoc);
            }
        };
        if(!Configs.draggingFlag) {
            GraphStack.detectCursor(canvas, cursorCallback);
        }else{
            GraphStack.drawAll(canvas, drawBefore, isFinal);
        }
    },

    detectDrag : function(canvas, left, top, width, height, currentLoc){
        var deviation = Constants.deviationDetect;
        var distanceX = 0;
        var distanceY = 0;

        if(Utils.detectOnLines(Configs.mousedownLoc.x, Configs.mousedownLoc.y, left, top, left+width, top+height, deviation)){
            distanceX = currentLoc.x - Configs.mousedownLoc.x;//Utils.detectDiffVal(Configs.mousedownLoc.x, currentLoc.x);
        }
        if(Utils.detectOnLines( Configs.mousedownLoc.y, Configs.mousedownLoc.x, top, left, top+height, left+width, deviation)){
            distanceY = Utils.detectDiffVal( Configs.mousedownLoc.y, currentLoc.y);
        }
        if(Utils.detectOnPoints(Configs.mousedownLoc.x, Configs.mousedownLoc.y, left, top, width, height, deviation)) {
            distanceX = Utils.detectDiffVal(Configs.mousedownLoc.x, currentLoc.x);
            distanceY = Utils.detectDiffVal( Configs.mousedownLoc.y, currentLoc.y);
        }
        return {x:distanceX, y:distanceY};
    },

    detectCursor : function(canvas, left, top, width, height,currentLoc){
        if(!Configs.draggingFlag)
            canvas.style.cursor = 'Default';
        var deviation = Constants.deviationDetect;
        if(Utils.detectOnLines(currentLoc.x, currentLoc.y, left, top, left+width, top+height, deviation)){
            canvas.style.cursor = 'e-resize';
        }
        if(Utils.detectOnLines( currentLoc.y, currentLoc.x, top, left, top+height, left+width, deviation)){
            canvas.style.cursor = 'n-resize';
        }

        if(Utils.detectSamePoint(currentLoc.x, currentLoc.y, left, top, deviation)||Utils.detectSamePoint(currentLoc.x, currentLoc.y, left+width, top+height, deviation)){
            canvas.style.cursor = 'nw-resize';
        }

        if(Utils.detectSamePoint(currentLoc.x, currentLoc.y, left+width, top, deviation)||Utils.detectSamePoint(currentLoc.x, currentLoc.y, left, top+height, deviation)){
            canvas.style.cursor = 'ne-resize';
        }
    }

});