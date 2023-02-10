import { Injectable } from '@angular/core';

import { HeroComponent } from './hero/hero.component';
import { ProfileComponent } from './profile/profile.component';
import { DynamicLoaderItem } from './dynamic-loader/dynamic-loader-item.component';

@Injectable()
export class DynamicLoaderService {
  getComponents() {
    return [
      new DynamicLoaderItem(HeroComponent, {
        name: 'Bombasto',
        bio: 'Brave as they come',
      }),
      new DynamicLoaderItem(ProfileComponent, {
        name: 'Dr. IQ',
        bio: 'Smart as they come',
      }),
    ];
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
