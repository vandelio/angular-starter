import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DynamicComponentDirective } from '../dynamic-component.directive';
import { DynamicLoaderItem } from './dynamic-loader-item.component';
import { IDynamicLoader } from './idynamic-loader';

@Component({
  selector: 'dynamic-loader',
  templateUrl: './dynamic-loader.component.html',
  styleUrls: ['./dynamic-loader.component.css'],
})
export class DynamicLoader implements OnInit {
  @Input() loadableComponents: DynamicLoaderItem[] = [];

  @ViewChild(DynamicComponentDirective, {})
  dynamicComponent!: DynamicComponentDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    console.log('loooooad');
    this.loadComponent();
  }
  loadComponent() {
    const componentItem = this.loadableComponents[0];
    const componentItemComponent = componentItem.component;
    const componentItemData = componentItem.data;

    console.log(componentItemComponent);
    const viewContainerRef = this.dynamicComponent.viewContainerRef;
    viewContainerRef.clear();

    const factory = this.componentFactoryResolver.resolveComponentFactory(
      componentItemComponent
    );

    const componentRef =
      viewContainerRef.createComponent<IDynamicLoader>(factory);
    (componentRef.instance as IDynamicLoader).data = componentItemData;
  }
}
