/**
 * Created by User on 2014/12/23.
 */
Ext.define('XPaint.view.main.header.HeaderPanel', {
    extend: 'Ext.container.Container',
    xtype: 'xpaint.header-panel',
    requires : [
        'XPaint.view.main.header.NewCanvasWin'
    ],
    id : 'app-header',
    layout: {
        type: 'hbox',
        align: 'middle'
    },
    defaultListenerScope: true,
    reference: 'headerPanel',
    items : [
        {
            xtype : 'component',
            id : 'app-header-logo'
        }, {
            xtype : 'component',
            bind : {
                html: '{system.name}'
            },
            flex : 1,
            id : 'app-header-title'
        }, {
            xtype: 'button',
            scale: 'large',
            text : XPAINTI18N.MAINMENU.TEXT,
            menu : [
                {
                    text : XPAINTI18N.MAINMENU.MENUITEM1,
                    glyph : 'xe007@linea-basic-10',
                    listeners : {
                        click : 'onClickMainMenu'
                    }
                }
            ]
        }
    ],

    onClickMainMenu : function (){
        var newCanvasWindow = Ext.create('XPaint.view.main.header.NewCanvasWin');
        newCanvasWindow.show();
    }
});
