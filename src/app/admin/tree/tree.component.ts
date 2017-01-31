import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { Tree, TreeNode } from 'primeng/primeng';
import 'rxjs/add/operator/map';

import { MyTreeNode } from './mytreenode';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  files: TreeNode[];

  filesTemplate: TreeNode[];

  filesTable: TreeNode[];

  selectedFiles: TreeNode[];

  selectedFiles2: TreeNode[];

  @ViewChild('expandingTree')
  expandingTree: Tree;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('app/admin/tree/data.json')
      .map(res => <TreeNode[]>res.json().data)
      .subscribe(response => {
        this.files = response;
      });
    this.http.get('app/admin/tree/data.json')
      .map(res => <TreeNode[]>res.json().data)
      .subscribe(response => {
        this.filesTemplate = response;
      });
    this.http.get('app/admin/tree/data2.json')
      .map(res => <TreeNode[]>res.json().data)
      .subscribe(response => {
        this.filesTable = response;
      });
  }

  nodeSelect(event) {
    console.log("selection event:" + event);
  }

}
