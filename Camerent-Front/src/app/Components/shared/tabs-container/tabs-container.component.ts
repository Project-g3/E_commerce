import { Component, AfterContentInit, ContentChildren , QueryList } from '@angular/core';
import { takeUntil } from 'rxjs';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements AfterContentInit {

    // auto completion/emmet of objects and methods from TabComponent using querylist
  @ContentChildren(TabComponent) tabs?:QueryList<TabComponent> = new QueryList();

  constructor() { }

  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter(
      tab=> tab.active
    )

    if(!activeTabs || activeTabs.length === 0){
      this.selectTab(this.tabs!.first) // ! bang operator and first available on querrylist
    }
  }
  selectTab(tab : TabComponent){
      this.tabs?.forEach(tab =>{//turning every tab off
        tab.active = false
      })
      tab.active = true;//setting clicked tab to true

      return false //prevent default behaviour '#'
    }

}
