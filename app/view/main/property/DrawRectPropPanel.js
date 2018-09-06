/**
 * Created by User on 2014/12/29.
 */
Ext.define('XPaint.view.main.property.DrawRectPropPanel', {
    extend : 'Ext.form.Panel',
    alias : 'widget.property.drawRect',
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
            fieldLabel: 'Border Width',
            name: 'borderWidth',
            value : '5',
            minValue : 1,
            maxValue : 100,
            tipText: function(thumb){
                return String(thumb.value) + '%';
            }
        }
    ]

});