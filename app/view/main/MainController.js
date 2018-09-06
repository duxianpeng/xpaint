/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('XPaint.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox',
        'XPaint.command.*'
    ],

    alias: 'controller.xpaint.main',

    onNewCanvas : function (createBtn){
        this.fireEvent('NewCanvasCmd.execute', this, createBtn);
    },

    onTriggerTool : function (toolObj){
        this.fireEvent('TriggerToolCmd.triggerTool', this, toolObj);
    },

    onCanvasMouseDown : function(event, el){
        this.fireEvent('OperateCanvasCmd.mousedown', this, event, el);
    },

    onCanvasMouseUp : function(event, el){
        var canvasPanel = this.lookupReference("canvasPanel");
        this.fireEvent('OperateCanvasCmd.mouseup', this, event, canvasPanel.canvas);
    },

    onCanvasMouseMove : function(event, el){
        var canvasPanel = this.lookupReference("canvasPanel");
        this.fireEvent('OperateCanvasCmd.mousemove', this, event, canvasPanel.canvas);
    },

    onPropertyChange : function(field, newVal){
        var canvasPanel = this.lookupReference("canvasPanel");
        this.fireEvent('PropertyChangeCmd.execute', this, canvasPanel.canvas, field, newVal);
    }



});
