import { Component, OnInit, VERSION } from '@angular/core';
import { DynamicLoaderService } from './dynamic-loader.service';
import { IDynamicLoader } from './dynamic-loader/dynamic-loader.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  dynamicComponents: IDynamicLoader[] = [];
  constructor(private dynamicLoaderService: DynamicLoaderService) {}

  ngOnInit() {
    this.dynamicComponents = this.dynamicLoaderService.getComponents();
  }
}
