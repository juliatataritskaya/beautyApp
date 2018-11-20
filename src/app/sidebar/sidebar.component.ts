import {Component, ViewChild, AfterViewInit, ChangeDetectorRef, OnInit} from '@angular/core';
import {RadSideDrawerComponent} from 'nativescript-ui-sidedrawer/angular';
import {RadSideDrawer} from 'nativescript-ui-sidedrawer';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements AfterViewInit, OnInit {

  private hamburger;

  constructor(private _changeDetectionRef: ChangeDetectorRef) {
  }

  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  private drawer: RadSideDrawer;

  ngOnInit() {
    this.hamburger = String.fromCharCode(0x2630);
  }

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this._changeDetectionRef.detectChanges();
  }

  public openDrawer() {
    this.drawer.showDrawer();
  }

  public onCloseDrawerTap() {
    this.drawer.closeDrawer();
  }
}
