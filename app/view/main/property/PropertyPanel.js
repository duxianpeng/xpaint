/**
 * Created by User on 2014/12/23.
 */
Ext.define('XPaint.view.main.property.PropertyPanel', {
    extend : 'Ext.panel.Panel',
    xtype: 'xpaint.property-panel',
    title : 'Property',
    width : 300,
    reference : 'propertyPanel',
    requires : [
        'XPaint.view.main.property.DrawRectPropPanel',
        'XPaint.view.main.property.MoveObjPropPanel',
        'XPaint.view.main.property.RotateObjPropPanel',
        'XPaint.view.main.property.ScaleObjPropPanel'
    ]
});