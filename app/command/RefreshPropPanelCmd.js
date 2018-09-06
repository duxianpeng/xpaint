/**
 * Created by User on 2014/12/27.
 */
Ext.define('XPaint.command.RefreshPropPanelCmd', {
    extend: 'Ext.app.Controller',

    listen: {
        controller: {
            '*': {
                "RefreshPropPanelCmd.execute" : 'execute'
            }
        }
    },
    singleton : true,
    execute : function(controller, actionName) {
        var propertyPanel = controller.lookupReference("propertyPanel");
        var panelClass = ActionMaps.ACTION_LIST[actionName].propertyPanel;
        if(panelClass){
            var panelInstance = Ext.create(panelClass);
            propertyPanel.removeAll();
            propertyPanel.add(panelInstance);
        }

    }

});