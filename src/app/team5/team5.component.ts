import { Component } from '@angular/core';

interface Folder {
  name: string;
  children?: Array<string | Folder>;
}

@Component({
  selector: 'app-team5',
  templateUrl: './team5.component.html',
  styleUrls: ['./team5.component.css']
})
export class Team5Component {
  team5Folders: Array<string | Folder> = [
    'Trupti',
    'Ritish',
    'Project',
    
  ];

  // Type guard to check if item is Folder
  isFolder(item: string | Folder): item is Folder {
    return (item as Folder).name !== undefined;
  }
}
