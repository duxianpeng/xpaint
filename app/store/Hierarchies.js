/**
 * Created by User on 2014/12/25.
 */
Ext.define('XPaint.store.Hierarchies', {
    extend: 'Ext.data.TreeStore',
    requires: [
        'XPaint.model.tree.Layer'
    ],
    model: 'XPaint.model.tree.Group',
    parentIdProperty: 'parentId',
    root: {
        text: 'Ext JS',
        expanded: true,
        children: []
    }
});