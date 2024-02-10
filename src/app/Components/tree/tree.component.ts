import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TreeModule } from '@circlon/angular-tree-component';
import { TreeNode } from '@circlon/angular-tree-component/lib/defs/api';
import { ResResult } from 'src/app/shared/models/Helper/Response';
import { ToastrService } from 'ngx-toastr';
import { Apiservice } from 'src/app/shared/services/crud/apiservice.service';
import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TreeItem } from 'src/app/shared/models/Tree/TreeItem';
@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgIf,
    NgFor,
    AsyncPipe,
    TreeModule ,
  ],
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit,OnDestroy   {
  SubscriptionArr: Subscription[] = [];
  nodes: TreeNode[] = [
  ];

  options = {
    displayField: 'name' ,
    childrenField: 'children',
    allowDrag: true,
    allowDrop: true,

  };
  onMoveNode($event: { node: TreeItem; to: { parent: { name: any; id :any }; index: any; }; }) {
       $event.node.parentId = $event.to.parent.id ;
       let CallApi:Subscription = this._Apiservice.put('Tree',$event.node,true).subscribe({
        next:(res:ResResult)=>{
          if(res.isSuccssed && res.obj != null){
            this.toastr.success("UpdateSuccess")
            this.GetAll()
            this.modalService.dismissAll()
            this.ResetData()
          }else {
            this.toastr.error(res.message)
          }
        }
      })
    this.SubscriptionArr.push(CallApi)
  }

   TreeItem : TreeItem = {
     id: '',
     name: '',
     parentId: null,
     children: []
   }
  constructor(
    private toastr:ToastrService,
     public _Apiservice:Apiservice ,
     public modalService: NgbModal,
    ) {}

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll(){
    let CallApi:Subscription=this._Apiservice.get("Tree/build",true).subscribe({
      next:(res:ResResult)=>{
        if(res.isSuccssed == true && res.obj != null){
         this.nodes = res.obj ;
        }else {
          this.toastr.error(res.message)
        }
      }
    })
    this.SubscriptionArr.push(CallApi)
  }

  Send(ConfirmModal:any){
    if(this.TreeItem.name.trim() == ''){
    this.modalService.open(ConfirmModal, { size: 'md',centered:true })
    this._Apiservice.ErrorMassage = "Enter Name"
    return
    }
    if(this.TreeItem.id == ''){
          let CallApi:Subscription = this._Apiservice.post("Tree",this.TreeItem,true).subscribe({
            next:(res:ResResult)=>{
              if(res.isSuccssed && res.obj != null){
               this.toastr.success("AddSuccess")
               this.modalService.dismissAll()
                this.GetAll()
                this.ResetData()
              }else {
                this.toastr.error(res.message)
              }
            }
          })
          this.SubscriptionArr.push(CallApi)
     }
    else {
          let CallApi:Subscription = this._Apiservice.put('Tree',this.TreeItem,true).subscribe({
            next:(res:ResResult)=>{
              if(res.isSuccssed && res.obj != null){
                this.toastr.success("UpdateSuccess")
                this.GetAll()
                this.modalService.dismissAll()
                this.ResetData()
              }else {
                this.toastr.error(res.message)
              }
            }
          })
        this.SubscriptionArr.push(CallApi)
     }
  }
  Delete(){

    let CallApi:Subscription = this._Apiservice.delete('Tree',this.TreeItem.id,true).subscribe({
      next:(res:ResResult)=>{
        if(res.isSuccssed && res.obj != null){
          this.toastr.success("DeleteSuccess")
          this.GetAll()
          this.ResetData()
          this.modalService.dismissAll()
        }else {
         this.toastr.error(res.message)
        }
      }
    })
  this.SubscriptionArr.push(CallApi)
  }
save(node:TreeNode){
this.TreeItem = node.data ;
}
AddChild(node: TreeNode)
{
this.TreeItem.parentId = node.data.id ;
}
del(node :TreeNode)
{
this.TreeItem = node ;
}
  ResetData(){
    this.TreeItem =  {
      id: '',
      name: '',
      parentId: null,
      children: []
    }
  }

  ngOnDestroy(): void {
    for (let i = 0; i < this.SubscriptionArr.length; i++) {
        this.SubscriptionArr[i].unsubscribe()
     }
  }
}
