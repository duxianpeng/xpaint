/**
 * Created by User on 2015/1/4.
 */
Ext.define("XPaint.common.GraphStack", {
    singleton : true,
    alternateClassName: ['GraphStack'],
    config : {
        graphStack : null,
        graphCount : null
    },

    addGraph : function(graph){
        if(!this.graphStack){
            this.graphStack = [];
        }
        if(!this.graphCount){
            this.graphCount = new Ext.util.MixedCollection()
        }
        var type = graph.get('type');
        if(!this.graphCount.containsKey(type)){
            this.graphCount.add(type, 1);
        }else{
            var value = this.graphCount.get(type);
            this.graphCount.replace(type, value+1);
        }
        var graphName = graph.get('name')+this.graphCount.get(type);
        graph.set('zIndex', this.graphStack.length+1);
        graph.set('name', graphName);
        this.deActiveAll();
        graph.set('isActive', true);
        this.graphStack.push(graph);
        return graphName;
    },

    removeGraph : function(graph){
        Ext.Array.remove(this.graphStack, graph);
    },

    drawAll : function(canvas, callback, isFinal){
        if(!this.graphStack){
            this.graphStack = [];
            return;
        }
        var context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        Ext.each(this.graphStack, function(graph){
            context.save();
            callback(graph);
            graph.drawGraph(canvas);
            context.restore();
            if(isFinal){
                graph.rollback(canvas);
            }
        });
    },

    detectCursor : function(canvas, callback){
        if(!this.graphStack){
            this.graphStack = [];
            return;
        }
        var context = canvas.getContext("2d");

        Ext.each(this.graphStack, function(graph){
            callback(graph);
        });
    },

    detectActive : function(canvas, currentLoc){
        var context = canvas.getContext("2d");
        Ext.each(this.graphStack, function(graph){
            graph.createPath(context);
            if (context.isPointInPath(currentLoc.x, currentLoc.y)
                && this.graphStack
                && this.graphStack.length == graph.get('zIndex')) {

                graph.set('isActive', true);
                graph.set('dragOffsetX',Configs.mousedownLoc['x'] - graph.get('left'));
                graph.set('dragOffsetY',Configs.mousedownLoc['y'] - graph.get('top'));
            }else{
                graph.set('isActive', false);
                graph.set('dragOffsetX',0);
                graph.set('dragOffsetY',0);
            }
        }, this);
    },

    deActiveAll: function(){
        Ext.each(this.graphStack, function(graph){
            graph.set('isActive', false);
        }, this);
    }
});