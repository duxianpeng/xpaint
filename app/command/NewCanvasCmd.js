/**
 * Created by User on 2014/12/27.
 */
Ext.define('XPaint.command.NewCanvasCmd', {
    extend: 'Ext.app.Controller',
    listen: {
        controller: {
            '*': {
                "NewCanvasCmd.execute" : 'execute'
            }
        }
    },
    singleton : true,

    execute : function(controller, createBtn) {
        var canvasName = controller.getView().getViewModel().get('canvas').get('name');
        var canvasWidth = controller.getView().getViewModel().get('canvas').get('width');
        var canvasHeight = controller.getView().getViewModel().get('canvas').get('height');

        var canvasPanel = controller.lookupReference('canvasPanel');
        canvasPanel.newCanvas(canvasWidth,canvasHeight);
        controller.getView().getViewModel().set('canvas.name', null);
        controller.getView().getViewModel().set('canvas.width', null);
        controller.getView().getViewModel().set('canvas.height', null);

        var hierarchyPanel = controller.lookupReference('hierarchyPanel');
        hierarchyPanel.setTitle(canvasName);
        createBtn.findParentByType( 'window').close();
    }

});