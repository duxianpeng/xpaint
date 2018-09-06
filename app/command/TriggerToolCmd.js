/**
 * Created by User on 2014/12/27.
 */
Ext.define('XPaint.command.TriggerToolCmd', {
    extend: 'Ext.app.Controller',

    listen: {
        controller: {
            '*': {
                "TriggerToolCmd.triggerTool" : 'execute'
            }
        }
    },

    singleton : true,
    execute : function(controller, symbolTool) {
        var tempAction = Constants.ACTION_LIST[symbolTool.name];
        if(tempAction != Configs.currentAction){
            Configs.lastAction = Configs.currentAction;
            Configs.currentAction = tempAction;
        }
        var actionList = ActionMaps['ACTION_LIST'];
        var directCmd = actionList[Configs.currentAction].directCmd;
        if(directCmd){
            var eventName = actionList[Configs.currentAction].eventName;
            this.fireEvent(eventName, controller);
        }
        this.fireEvent('RefreshPropPanelCmd.execute', controller, symbolTool.name);
    }

});