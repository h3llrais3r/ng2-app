import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('assets/data/primeng/tree/data.json')
      .subscribe(response => this.files = <TreeNode[]>response.data);
    this.http.get<any>('assets/data/primeng/tree/data.json')
      .subscribe(response => this.filesTemplate = <TreeNode[]>response.data);
    this.http.get<any>('assets/data/primeng/tree/data2.json')
      .subscribe(response => this.filesTable = <TreeNode[]>response.data);
  }

  nodeSelect(event) {
    console.log("selection event:" + event);
  }

  nodeUnselect(event) {
    console.log("unselection event:" + event);
  }

}
