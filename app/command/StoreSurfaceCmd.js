/**
 * Created by User on 2014/12/27.
 */
Ext.define('XPaint.command.StoreSurfaceCmd', {
    extend: 'Ext.app.Controller',

    listen: {
        controller: {
            '*': {
                'StoreSurfaceCmd.saveSurface' : 'onSaveSurface',
                'StoreSurfaceCmd.restoreSurface' : 'onRestoreSurface'
            }
        }
    },
    singleton : true,
    onSaveSurface : function(controller, event, canvas) {
        if(!canvas) return;
        var context = canvas.getContext("2d");
        tempDrawingSurfaceImageData = context.getImageData(0, 0,
            canvas.width,
            canvas.height);
        Configs.drawingSurfaceImageData.push(tempDrawingSurfaceImageData);
    },

    onRestoreSurface : function(controller, event, canvas){
        var context = canvas.getContext("2d");
        context.putImageData(Configs.drawingSurfaceImageData[Configs.drawingSurfaceImageData.length-1], 0, 0);
    }

});