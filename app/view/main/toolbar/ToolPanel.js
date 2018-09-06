/**
 * Created by User on 2014/12/22.
 */
Ext.define('XPaint.view.main.toolbar.ToolPanel', {
    extend : 'Ext.toolbar.Toolbar',
    xtype: 'xpaint.tool-panel',
    padding: 5,
    defaults : {
        arrowAlign: null,
        iconAlign: 'top',
        icon: null,
        scale: 'medium',
        xtype: 'button'
    },
    items: [{
            tooltip : XPAINTI18N.TOOLBAR.GRAPHTOOLS.TEXT,
            glyph : 'xf067@FontAwesome',
            menu : [
                {
                    text : XPAINTI18N.TOOLBAR.GRAPHTOOLS.TOOLS1,
                    glyph : '95@linea-software-10',
                    name : 'DRAW_RECT',
                    listeners : {
                        click : 'onTriggerTool'
                    }
                }, {
                    text : XPAINTI18N.TOOLBAR.GRAPHTOOLS.TOOLS2,
                    name : 'DRAW_ECLIPSE',
                    glyph : '93@linea-software-10',
                    listeners : {
                        click : 'onTriggerTool'
                    }
                }, {
                    text : XPAINTI18N.TOOLBAR.GRAPHTOOLS.TOOLS3,
                    name : 'DRAW_POLYGON',
                    glyph : '94@linea-software-10',
                    listeners : {
                        click : 'onTriggerTool'
                    }
                }, {
                    text : XPAINTI18N.TOOLBAR.GRAPHTOOLS.TOOLS4,
                    name : 'DRAW_LINE',
                    glyph : '47',
                    listeners : {
                        click : 'onTriggerTool'
                    }
                }
            ]
        }, '-', {
            tooltip : XPAINTI18N.TOOLBAR.MOVETOOL,
            name : 'MOVE_OBJ',
            glyph: 'xf047@FontAwesome',
            listeners : {
                click : 'onTriggerTool'
            }
        }, '-', {
            tooltip : XPAINTI18N.TOOLBAR.ROTATETOOL,
            name : 'ROTATE_OBJ',
            glyph: 'xf021@FontAwesome',
            listeners : {
                click : 'onTriggerTool'
            }
        }, '-', {
            tooltip : XPAINTI18N.TOOLBAR.SCALETOOL,
            name : 'SCALE_OBJ',
            glyph: 'xf0b2@FontAwesome',
            listeners : {
                click : 'onTriggerTool'
            }
        }, '-', {
            tooltip : XPAINTI18N.TOOLBAR.RULERTOOL,
            name : 'RULER_OBJ',
            glyph: '63@linea-basic-10',
            listeners : {
                click : 'onTriggerTool'
            }
        }
    ],

    initComponent: function() {
        this.callParent();
    }
});