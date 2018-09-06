/**
 * Created by User on 2015/1/4.
 */
Ext.define("XPaint.model.graph.Graph", {
    extend: 'Ext.data.Model',
    identifier: 'uuid',
    fields : [
        {name : 'left'},
        {name : 'top'},
        {name : 'isActive', type : 'boolean', defaultValue : false},
        {name : 'dragOffsetX'},
        {name : 'dragOffsetY'},
        {name : 'zIndex'},
        {name : 'angle', defaultValue : 0},
        {name : 'centerX'},
        {name : 'centerY'},
        {name : 'scaleX', defaultValue : 1},
        {name : 'scaleY', defaultValue : 1},
        {name : 'isStroke', defaultValue : true},
        {name : 'isFill'},
        {name : 'tempLeft'},
        {name : 'tempTop'},
        {name : 'tempWidth'},
        {name : 'tempHeight'}
    ],

    draw : function(canvas, currentLoc){

    },

    move : function(canvas, currentLoc){

    },

    drawGraph : function(canvas){

    },

    createPath : function(context){

    },

    rollback : function(canvas){

    }
});