/**
 * Created by User on 2014/12/25.
 */
Ext.define('XPaint.model.tree.Layer', {
    extend: 'Ext.data.TreeModel',
    entityName: 'Layer',
    idProperty: 'name',
    fields: [{
        name: "name",
        convert: undefined
    }]
});