import { TreeNode } from 'primeng/primeng';

export class MyTreeNode implements TreeNode {

    label?: string;
    data?: any;
    icon?: any;
    expandedIcon?: any;
    collapsedIcon?: any;
    children?: TreeNode[];
    leaf?: boolean;
    expanded?: boolean;
    type?: string;

    constructor(label: string, icon: string, data: string) {
        this.label = label;
        this.icon = icon;
        this.data = data;
    }
}