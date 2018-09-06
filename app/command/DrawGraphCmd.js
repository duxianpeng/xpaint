/**
 * Created by User on 2014/12/27.
 */
Ext.define('XPaint.command.DrawGraphCmd', {
    extend: 'Ext.app.Controller',
    singleton : true,
    listen: {
        controller: {
            '*': {
                "drawGraph": 'execute'
            }
        }
    },
    singleton : true,
    execute : function(controller, event, canvas, stopFlag) {
        var actionList = ActionMaps['ACTION_LIST'];
        var modelType = actionList[Configs.currentAction].modelType;
        var graph = controller.getView().getViewModel().get(modelType);
        var currentLoc = Utils.windowToCanvas(canvas, event.pageX, event.pageY);
        if(Configs.draggingFlag)
            graph.draw(canvas, currentLoc);
        if(stopFlag){
            var graphName = GraphStack.addGraph(graph.copy());
            this.fireEvent('OperateHierarchyCmd.addHierarchy', controller, graphName, 'Layer');
        }

    }


});