/**
 * Created by User on 2014/12/27.
 */
Ext.define('XPaint.command.OperateCanvasCmd', {
    extend: 'Ext.app.Controller',

    listen: {
        controller: {
            '*': {
                "OperateCanvasCmd.mousedown" : 'onMouseDown',
                "OperateCanvasCmd.mouseup" : "onMouseUp",
                "OperateCanvasCmd.mousemove" : "onMouseMove"
            }
        }
    },
    singleton : true,
    onMouseDown : function(controller, event, el) {
        if(el.id != 'coreCanvas'){
            return;
        }
        Configs.draggingFlag = true;
        var loc = Utils.windowToCanvas(el, event.pageX, event.pageY);
        Configs.mousedownLoc.x = loc.x;
        Configs.mousedownLoc.y = loc.y;
        if(Configs.currentAction == "MOVE_OBJ")
             controller.fireEvent('DetectActiveCmd.detectActive',controller, event, el );
        controller.fireEvent('StoreSurfaceCmd.saveSurface', controller, event, el);
    },

    onMouseUp : function(controller, event, el){
        if(Configs.currentAction){
            if(Configs.draggingFlag)
                controller.fireEvent('StoreSurfaceCmd.restoreSurface', controller, event, el);
            var actionList = ActionMaps['ACTION_LIST'];
            var eventName = actionList[Configs.currentAction].eventName;
            var directCmd = actionList[Configs.currentAction].directCmd;
            if(!directCmd){
                controller.fireEvent(eventName, controller, event, el, true);
            }

        }
        Configs.mousedownLoc.x = null;
        Configs.mousedownLoc.y = null;
        Configs.draggingFlag = false;
    },

    onMouseMove : function(controller, event, el){
        if(Configs.currentAction){
            if(Configs.draggingFlag)
                controller.fireEvent('StoreSurfaceCmd.restoreSurface', controller, event, el);
            var actionList = ActionMaps['ACTION_LIST'];
            var eventName = actionList[Configs.currentAction].eventName;
            var directCmd = actionList[Configs.currentAction].directCmd;
            if(!directCmd) {
                controller.fireEvent(eventName, controller, event, el);
            }
        }
    }

});