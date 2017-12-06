import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  photos = null;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.showAllPhotos().subscribe((data) => this.photos = data);
  }

}
