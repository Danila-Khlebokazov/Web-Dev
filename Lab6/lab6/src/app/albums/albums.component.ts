import { Component, OnInit } from '@angular/core';
import {Album} from "../models";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  albums: Album[]
  newAlbum: Album

  constructor(private albumService: AlbumService) {
    this.albums = []
    this.newAlbum= {} as Album
  }

  ngOnInit(): void {
    this.getAlbums()
  }

  getAlbums(){
    this.albumService.getAlbums().subscribe((albums) =>{
      this.albums = albums;
    })
  }

  addAlbum(){
    this.albumService.addAlbum(this.newAlbum).subscribe((album) =>{
      this.albums.unshift(album);
      this.newAlbum = {} as Album;
    })
  }


}
