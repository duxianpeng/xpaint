/**
 * Created by User on 2014/12/27.
 */
Ext.define('XPaint.command.ApplyRulerCmd', {
    extend: 'Ext.app.Controller',
    listen: {
        controller: {
            '*': {
                "ApplyRulerCmd.applyRuler" : 'execute'
            }
        }
    },
    singleton : true,

    execute : function(controller) {
        var leftRuler = Ext.getCmp('rulerLeft');
        var topRuler = Ext.getCmp('rulerTop');
        if(leftRuler.isHidden()){
            leftRuler.show();
        }else{
            leftRuler.hide();
        }
        if(topRuler.isHidden()){
            topRuler.show();
        }else{
            topRuler.hide();
        }
        this.drawRuler(leftRuler, topRuler, !leftRuler.isHidden);
    },

    drawRuler : function(leftRuler, topRuler, isHidden){
        if(isHidden){
            return;
        }

        this.drawLeftRuler(leftRuler);
        this.drawTopRuler(topRuler);
    },

    drawLeftRuler : function(leftRuler){
        var leftCtx = leftRuler.down().el.dom.getContext('2d');
        if(!leftCtx){
            console.log('Cannot initialize left ruler context.');
        }
        leftCtx.save();
        leftCtx.strokeStyle = 'white';
        leftCtx.lineWidth = 0.5;
        var space = 10;
        for(var i = 0.5; i < leftRuler.getHeight();i+=space){
            this.drawLine(leftCtx, 0, i, 90, true);
        }
        leftCtx.restore();
    },

    drawTopRuler : function(topRuler){
        var topCtx = topRuler.down().el.dom.getContext('2d');
        if(!topCtx){
            console.log('Cannot initialize top ruler context.');
        }
        topCtx.save();
        topCtx.strokeStyle = 'white';
        topCtx.lineWidth = 0.5;
        var space = 10;
        for(var i = 0.5; i < topRuler.getWidth();i+=space){
            this.drawLine(topCtx, i, 0, 50, false);
        }
        topCtx.restore();
    },

    drawLine:function(context, x, y, length, isHor){
        context.beginPath();
        context.moveTo(x, y);
        if(isHor){
            context.lineTo(x+length, y);
        }else{
            context.lineTo(x, y+length);
        }
        context.closePath();
        context.stroke();
    }
});