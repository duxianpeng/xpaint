/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('XPaint.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'XPaint.view.main.MainController',
        'XPaint.view.main.MainModel',
        'XPaint.view.main.toolbar.ToolPanel',
        'XPaint.view.main.hierarchy.HierarchyPanel',
        'XPaint.view.main.property.PropertyPanel',
        'XPaint.view.main.canvas.CanvasPanel',
        'XPaint.view.main.header.HeaderPanel'
    ],

    xtype: 'xpaint.app-main',
    
    controller: 'xpaint.main',
    viewModel: {
        type: 'xpaint.main'
    },
    layout : {
        type : 'border'
    },
    items : [
        {
            xtype : 'xpaint.header-panel',
            region : 'north'
        },{
            xtype : 'panel',
            layout : {
                type : 'border'
            },
            region : 'center',
            items: [
                {
                    region : 'north',
                    xtype : 'xpaint.tool-panel',
                    collapsible: false,
                    floatable: false
                },
                {
                    region: 'west',
                    xtype : 'xpaint.hierarchy-panel',
                    collapsible: true,
                    split: true
                },
                {
                    region: 'east',
                    xtype : 'xpaint.property-panel',
                    collapsible: true,
                    split: true
                },
                {
                    region: 'center',
                    xtype : 'xpaint.canvas-panel',
                    collapsible: false
                }
            ]
        }, {
            region: 'south',
            html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            floatable: false,
            collapsible: false
        }
    ],


    initComponent : function() {

        this.callParent();
    }
});
