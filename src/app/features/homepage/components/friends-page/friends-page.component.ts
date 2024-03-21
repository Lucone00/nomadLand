import { Component, OnInit } from '@angular/core';
import { ImageGeneratorService } from 'src/app/shared/shared/services/image-generator.service';

@Component({
  selector: 'app-friends-page',
  templateUrl: './friends-page.component.html',
  styleUrl: './friends-page.component.scss',
})
export class FriendsPageComponent implements OnInit {
  images: any[] = [];

  constructor(private imageGeneratorService: ImageGeneratorService) {}

  ngOnInit(): void {
    this.generateCardImages();
  }

  generateCardImages() {
    const numberOfImages = 10;
    this.imageGeneratorService.getRandomImages(numberOfImages).subscribe({
      next: (images: any[]) => {
        console.log('random images', images);
        this.images = images;
      },
      error: (error: any) => {
        console.error('Error while recovering the data:', error);
      },
    });
  }
}
