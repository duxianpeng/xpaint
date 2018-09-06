/**
 * Created by User on 2014/12/25.
 */
Ext.define('XPaint.model.tree.Group', {
    extend: 'Ext.data.TreeModel',
    entityName: 'Group',
    idProperty: 'name',
    fields: [{
        name: "name",
        convert: undefined
    },{
        name: "text",
        convert: undefined
    }]
});