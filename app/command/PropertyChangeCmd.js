/**
 * Created by User on 2014/12/27.
 */
Ext.define('XPaint.command.PropertyChangeCmd', {
    extend: 'Ext.app.Controller',
    listen: {
        controller: {
            '*': {
                "PropertyChangeCmd.execute" : 'execute'
            }
        }
    },
    singleton : true,

    execute : function(controller, canvas, field, newVal) {
        if(!canvas){
            return;
        }
        var propPanelName = Ext.getClassName(field.up());
        var actionList = ActionMaps['ACTION_LIST'];
        var modelType = null;
        Ext.iterate(actionList, function(actionKey, actionObj){
            var tempPropPanelName = actionObj['propertyPanel'];
            if(tempPropPanelName === propPanelName){
                modelType = actionObj['modelType'];
                return;
            }
        });

        var context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        var obj = controller.getView().getViewModel().get(modelType);
        if(!obj){
            return;
        }
        obj.set(field.getName(), newVal);
        obj.draw(canvas);
    }

});