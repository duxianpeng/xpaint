/**
 * Created by User on 2014/12/27.
 */
Ext.define('XPaint.command.DetectActiveCmd', {
    extend: 'Ext.app.Controller',
    singleton : true,
    listen: {
        controller: {
            '*': {
                "DetectActiveCmd.detectActive": 'execute'
            }
        }
    },
    singleton : true,
    execute : function(controller, event, canvas) {
        var loc = Utils.windowToCanvas(canvas, event.pageX, event.pageY);
        GraphStack.detectActive(canvas, loc);
    }

});