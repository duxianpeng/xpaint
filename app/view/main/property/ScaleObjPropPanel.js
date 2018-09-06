/**
 * Created by User on 2014/12/29.
 */
Ext.define('XPaint.view.main.property.ScaleObjPropPanel', {
    extend : 'Ext.form.Panel',
    alias : 'widget.property.scaleObj',
    bodyPadding: 10,
    defaults: {
        anchor: '95%',
        listeners : {
            change : "onPropertyChange"
        }
    },
    items : [
        {
            xtype : 'slider',
            fieldLabel: 'Left',
            name: 'left'
        },
        {
            xtype : 'slider',
            fieldLabel: 'Top',
            name: 'top'
        }
    ]

});