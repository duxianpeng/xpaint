/**
 * Created by User on 2014/12/25.
 */
Ext.define('XPaint.view.main.header.NewCanvasWin', {
    extend : 'Ext.window.Window',
    alias : 'xpaint.newcanvas-win',

    title : XPAINTI18N.MAINMENU.MENUITEM1,
    resizable : false,
    defaultListenerScope: true,
    items : [{
        xtype : 'form',
        bodyPadding: 10,
        defaults: {
            anchor: '100%',
            labelWidth: 100
        },
        items : [
            {
                xtype : 'textfield',
                name : 'name',
                fieldLabel: XPAINTI18N.NEWCANVASWIN.NAMELABEL,
                bind : '{canvas.name}'
            },{
                xtype : 'fieldcontainer',
                fieldLabel: 'Width',
                layout : {
                    type : 'hbox'
                },
                defaults: {
                    hideLabel: true
                },
                items: [{
                    xtype: 'textfield',
                    flex : 2,
                    name : 'width',
                    bind : '{canvas.width}',
                    fieldLabel: XPAINTI18N.NEWCANVASWIN.WIDTHLABEL
                },{
                    xtype: 'displayfield',
                    flex : 1,
                    value: 'Pixes',
                    fieldLabel: 'Width Unit',
                    editable: false,
                    name: 'widthunit'
                }]
            },{
                xtype : 'fieldcontainer',
                fieldLabel: 'Height',
                layout : {
                    type : 'hbox'
                },
                defaults: {
                    hideLabel: true
                },
                items: [{
                    xtype: 'textfield',
                    flex : 2,
                    name : 'height',
                    bind : '{canvas.height}',
                    fieldLabel: XPAINTI18N.NEWCANVASWIN.HEIGHTLABEL
                },{
                    xtype: 'displayfield',
                    flex : 1,
                    value: 'Pixes',
                    fieldLabel: 'Height Unit',
                    editable: false,
                    name: 'heightunit'
                }]
            },{
                xtype : 'fieldcontainer',
                fieldLabel: 'Resolution',
                layout : {
                    type : 'hbox'
                },
                defaults: {
                    hideLabel: true
                },
                items: [{
                    xtype: 'textfield',
                    flex : 2,
                    name : 'resolution',
                    bind : '{canvas.resolution}',
                    fieldLabel: XPAINTI18N.NEWCANVASWIN.RESOLUTIONLABEL
                },{
                    xtype: 'displayfield',
                    flex : 1,
                    value: 'Pixes/feet',
                    fieldLabel: 'Height Unit',
                    editable: false,
                    name: 'heightunit'
                }]
            }
        ],
        buttons: [
            {
                text:XPAINTI18N.NEWCANVASWIN.CREATEBUTTON,
                listeners : {
                    click : 'onNewCanvas',
                    scope : 'controller'
                }
            },
            {
                text:XPAINTI18N.NEWCANVASWIN.CANCELBUTTON,
                listeners : {
                    click : 'close'
                }
            }
        ]

    }
    ]
});