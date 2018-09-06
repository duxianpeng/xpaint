/**
 * Created by User on 2014/12/23.
 */
Ext.define('XPaint.view.main.canvas.CanvasPanel', {
    extend : 'Ext.panel.Panel',
    xtype : 'xpaint.canvas-panel',
    scrollable : true,
    reference: 'canvasPanel',
    canvas : null,
    items : [{
        xtype : 'panel',
        region : 'north',
        height : 25,
        layout : 'fit',
        id : 'rulerTop',
        hidden : true,
        items : {
            xtype : 'box',
            autoEl : {
                tag : 'canvas'
            },
            style : 'background:black;'
        }
    },{
        xtype : 'panel',
        region : 'west',
        layout : 'fit',
        width : 30,
        id : 'rulerLeft',
        hidden : true,
        items : {
            xtype : 'box',
            autoEl : {
                tag : 'canvas'
            },
            style : 'background:black;'
        }
    },{
        xtype : 'panel',
        region : 'center',
        id : 'drawPanel',
        layout : 'center',
        bodyStyle:{"background-color":"#2a3f5d"},
        items : []
    }
    ],
    layout : {
        type : 'border'
    },
    resizable : true,
    dockedItems: {
        dock: 'bottom',
        xtype: 'toolbar',
        items: [{
            text: 'Add a Tab',
            glyph: 43,
            listeners: {
                click: function(){

                }
            }
        }]
    },

    initComponent : function() {
        this.callParent();
    },

    listeners : {
        mousemove : {
            element : 'body',
            fn : 'onCanvasMouseMove'
        },
        mouseup : {
            element : 'body',
            fn : 'onCanvasMouseUp'
        },
        el : {
            delegate : 'canvas',
            mousedown : 'onCanvasMouseDown'
        }
    },

    newCanvas : function (canvasWidth, canvasHeight){

        var canvasCom = [{
            xtype: 'box',
            autoEl:{
                tag : 'canvas'
            },
            id : 'coreCanvas'
        }];
        Ext.getCmp('drawPanel').add(canvasCom);
        this.canvas = Ext.getCmp('drawPanel').items.items[0].el.dom;
        this.canvas.style.background = '#FFFFFF';
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
        this.doLayout();
    }
});
