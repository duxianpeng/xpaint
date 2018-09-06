/**
 * Created by User on 2014/12/22.
 */
Ext.define('XPaint.view.main.hierarchy.HierarchyPanel', {
    extend: 'Ext.tree.Panel',
    title : 'Welcome',
    reference: 'hierarchyPanel',
    xtype: 'xpaint.hierarchy-panel',
    width: 150,
    rootVisible: false,
    singleExpand: true,
    store : 'Hierarchies',
    displayField : 'name',
    initComponent: function() {
        this.callParent();
    },
    addHierarchyNode: function(nodeName, nodeType) {
        var target = this.getRootNode(),
            store = this.getStore(),
            node  = {
                name: nodeName
            };
        node.children = [];
        node.mtype = nodeType;
        if(nodeType){
            if(nodeType == 'Layer'){
                node.leaf = true;
            }
        }

        node = target.appendChild(node);

        if (!target.isExpanded()) {
            target.expand(false);
        }

        this.selModel.select(node);

    }
});