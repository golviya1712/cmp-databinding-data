import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverInputContent') serverInputContent: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  // onAddServer() {
  //   this.serverCreated.emit({
  //     serverName : this.newServerName,
  //     serverContent : this.newServerContent
  //   });
  // }

  // onAddBlueprint() {
  //   this.blueprintCreated.emit({
  //     serverName : this.newServerName,
  //     serverContent : this.newServerContent
  //   });
  // }


  onAddServer(nameInput : HTMLInputElement) {
    this.serverCreated.emit({
      serverName : nameInput.value,
      serverContent : this.serverInputContent.nativeElement.value
    });
  }

  onAddBlueprint(nameInput : HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName : nameInput.value,
      serverContent : this.serverInputContent.nativeElement.value
    });
  }
}
