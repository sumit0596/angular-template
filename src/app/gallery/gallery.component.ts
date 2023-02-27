import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})


export class GalleryComponent {

    
  public _albums:any  = [ ];
  
  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <=4; i++) {
      const src = 'assets/gallery/image' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = 'assets/gallery/image' + i + '-thumb.jpg';

      const album = { 
        src: src, 
        caption: caption,
        thumb: thumb
      };

      this._albums.push(album);
    }
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  logoContainerArray=[
    {
      logo: 'assets/logo/logoipsum-285.svg'
    },
    {
      logo: 'assets/logo/logoipsum-286.svg'
    }
  ]
}
