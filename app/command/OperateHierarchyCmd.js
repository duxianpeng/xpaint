/**
 * Created by User on 2014/12/27.
 */
Ext.define('XPaint.command.OperateHierarchyCmd', {
    extend: 'Ext.app.Controller',
    listen: {
        controller: {
            '*': {
                "OperateHierarchyCmd.addHierarchy" : 'addHierarchy'
            }
        }
    },
    singleton : true,

    addHierarchy : function(controller, nodeName, nodeType) {
        var hierarchyPanel = controller.lookupReference('hierarchyPanel');
        hierarchyPanel.addHierarchyNode(nodeName, nodeType);
    }

});