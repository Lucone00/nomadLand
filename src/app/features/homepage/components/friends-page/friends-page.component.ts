import { Component, OnInit } from '@angular/core';
import { ImageGeneratorService } from 'src/app/shared/shared/services/image-generator.service';

@Component({
  selector: 'app-friends-page',
  templateUrl: './friends-page.component.html',
  styleUrl: './friends-page.component.scss',
})
export class FriendsPageComponent implements OnInit {
  images: any[] = [];
  currentIndex: number = 0;
  visibleImages: any[] = [];

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
        this.updateVisibleImages();
      },
      error: (error: any) => {
        console.error('Error while recovering the data:', error);
      },
    });
  }

  updateVisibleImages() {
    this.visibleImages = this.images.slice(
      this.currentIndex,
      this.currentIndex + 4
    );
  }

  scrollLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateVisibleImages();
    }
  }

  scrollRight() {
    if (this.currentIndex < this.images.length - 4) {
      this.currentIndex = this.currentIndex + 3;
      this.updateVisibleImages();
    }
  }
}
