/**
 * Created by User on 2015/1/3.
 */
Ext.define("XPaint.model.graph.Rect", {
    extend : 'XPaint.model.graph.Graph',
    fields : [
        {name : 'name', defaultValue : XPAINTI18N.HIERARCHY.DEFAULTRECTOBJPREFIX},
        {name : 'type', defaultValue:'rect'},
        {name : 'width'},
        {name : 'height'},
        {name : 'borderWidth'},
        {name : 'borderColor'},
        {name : 'fillColor'},
        {name : 'hasBorder'},
        {name : 'isFill'}
    ],

    draw : function(canvas, currentLoc){
        if(currentLoc){
            this.set('width', Math.abs(currentLoc.x - Configs.mousedownLoc.x));
            this.set('height', Math.abs(currentLoc.y - Configs.mousedownLoc.y));

            if (currentLoc.x > Configs.mousedownLoc.x)
                this.set('left', Configs.mousedownLoc.x);
            else
                this.set('left', currentLoc.x);

            if (currentLoc.y > Configs.mousedownLoc.y)
                this.set('top', Configs.mousedownLoc.y);
            else
                this.set('top', currentLoc.y);

            this.drawGraph(canvas);
        }
    },

    beforeDraw : function(context){
        context.lineWidth = this.get('borderWidth');
        var angle = this.get('angle');

        var scaleX = this.get('scaleX');
        var scaleY = this.get('scaleY');

        var left = this.get('left');
        var top = this.get('top');
        this.set('tempLeft', left);
        this.set('tempTop', top);
        var width = this.get('width');
        var height = this.get('height');
        this.set('tempWidth', width);
        this.set('tempHeight', height);

        var centerX = left + width/2;
        var centerY = top  + height/2;

        if(centerX && centerY){
            context.translate(centerX, centerY);
            this.set('left', -(width/2));
            this.set('top', -(height/2));
        }

        if(angle && angle != 0){
            context.rotate(angle);
        }
        if(scaleX && scaleY){
            if(scaleX == 0){
                scaleX +=0.0001;
            }
            if(scaleY == 0){
                scaleY +=0.0001;
            }

            context.scale(scaleX, scaleY);
        }
    },

    afterDraw : function(canvas){
        var tempLeft = this.get('tempLeft');
        var tempTop = this.get('tempTop');
        var tempWidth = this.get('tempWidth');
        var tempHeight = this.get('tempHeight');
        this.set('left', tempLeft);
        this.set('top', tempTop);
        var scaleX = this.get('scaleX');
        var scaleY = this.get('scaleY');
        this.set('tempLeft', tempLeft - (((scaleX-1)/2) * tempWidth));
        this.set('tempTop', tempTop - (((scaleY-1)/2) * tempHeight));
        this.set('tempWidth', scaleX * tempWidth);
        this.set('tempHeight', scaleY * tempHeight);
    },

    rollback : function(canvas){
        var tempLeft = this.get('tempLeft');
        var tempTop = this.get('tempTop');
        var tempWidth = this.get('tempWidth');
        var tempHeight = this.get('tempHeight');
        this.set('left', tempLeft);
        this.set('top', tempTop);
        this.set('width', tempWidth);
        this.set('height', tempHeight);
        this.set('scaleX', 1);
        this.set('scaleY', 1);
    },

    drawGraph : function(canvas){
        var context = canvas.getContext("2d");
        context.save();
        this.beforeDraw(context);
        this.createPath(context);
        if(this.get('isStroke')){
            context.stroke();
        }
        if(this.get('isFill')){
            context.fill();
        }
        context.restore();
        this.afterDraw(canvas);
    },

    createPath : function(context){
        context.beginPath();
        context.rect(this.get('left'), this.get('top'), this.get('width'), this.get('height'));
        context.closePath();
    }
});