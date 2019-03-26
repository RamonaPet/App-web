
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { 
  MatTableDataSource, 
  MatDialog, 
  MatDialogRef, 
  MAT_DIALOG_DATA 
} from '@angular/material';

import { News } from '../../../shared/services/news/news';
import { NewsService } from '../../../shared/services/news/news.service';
import { NewDetailComponent } from '../new-detail/new-detail.component';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {
  public dataSource = null;
  public displayedColumns = ['id', 'name', 'description', 'info', 'active'];
  public news: News[];

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private serviceItems: NewsService) { }

  ngOnInit() {
    this.fillItems();
  }

  fillItems(): void {
    this.news = [
      {
        id: 1,
        name: 'New breakthroughs in medicine',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ultricies lacus sed turpis tincidunt id. Non diam phasellus vestibulum lorem. Arcu odio ut sem nulla pharetra diam sit amet nisl. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Facilisi morbi tempus iaculis urna id. Ut placerat orci nulla pellentesque dignissim enim sit amet. Euismod lacinia at quis risus sed vulputate odio ut. Justo laoreet sit amet cursus. Sagittis eu volutpat odio facilisis mauris. Justo nec ultrices dui sapien eget mi proin sed libero. Nunc sed id semper risus in. Enim praesent elementum facilisis leo vel fringilla est. In fermentum et sollicitudin ac. In nisl nisi scelerisque eu ultrices vitae. Ut consequat semper viverra nam libero. Duis at consectetur lorem donec. Tellus in hac habitasse platea dictumst vestibulum rhoncus est.

        Consectetur a erat nam at lectus urna. Morbi tincidunt augue interdum velit euismod in. Ornare massa eget egestas purus viverra. Malesuada fames ac turpis egestas sed tempus. Fames ac turpis egestas maecenas pharetra convallis posuere. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Aenean pharetra magna ac placerat vestibulum lectus mauris. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Dui ut ornare lectus sit amet est placerat in egestas. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Magna eget est lorem ipsum dolor sit amet consectetur. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Dictum non consectetur a erat nam at. Elit eget gravida cum sociis natoque penatibus. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Pellentesque dignissim enim sit amet. Non tellus orci ac auctor augue mauris augue neque. Quam pellentesque nec nam aliquam sem.
        
        Ullamcorper morbi tincidunt ornare massa eget egestas purus. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Eget gravida cum sociis natoque. Placerat duis ultricies lacus sed. Tristique senectus et netus et malesuada fames. Tortor dignissim convallis aenean et tortor at risus. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Risus in hendrerit gravida rutrum quisque. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Faucibus in ornare quam viverra. Mollis nunc sed id semper risus in hendrerit gravida. Dignissim convallis aenean et tortor at risus. Bibendum enim facilisis gravida neque convallis a. Enim sed faucibus turpis in. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Tincidunt praesent semper feugiat nibh.
        
        Duis ultricies lacus sed turpis. In egestas erat imperdiet sed euismod nisi porta. Nisl purus in mollis nunc sed id semper risus in. Id nibh tortor id aliquet lectus proin. Metus vulputate eu scelerisque felis imperdiet proin. Quisque egestas diam in arcu cursus euismod quis. Velit scelerisque in dictum non consectetur a erat. Eget est lorem ipsum dolor sit amet. Cras ornare arcu dui vivamus arcu. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Aliquet nibh praesent tristique magna sit amet purus. Scelerisque varius morbi enim nunc faucibus. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Amet facilisis magna etiam tempor. Arcu dictum varius duis at consectetur lorem donec. Malesuada pellentesque elit eget gravida. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Eu sem integer vitae justo eget magna fermentum.
        
        Mauris pharetra et ultrices neque ornare aenean euismod elementum. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Nisl nisi scelerisque eu ultrices vitae auctor. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Purus in massa tempor nec feugiat nisl. Ultricies mi eget mauris pharetra. Justo nec ultrices dui sapien. Non nisi est sit amet facilisis. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Gravida in fermentum et sollicitudin ac. Purus semper eget duis at tellus at urna. Massa eget egestas purus viverra accumsan. Neque sodales ut etiam sit amet nisl purus. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Sed cras ornare arcu dui. Tempus quam pellentesque nec nam aliquam sem et. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Imperdiet proin fermentum leo vel orci porta non.`,
        active: true
      },
      {
        id: 2,
        name: 'How to save up on energy',
        info: 'Consectetur a erat nam at lectus urna. Morbi tincidunt augue interdum velit euismod in. Ornare massa eget egestas purus viverra. Malesuada fames ac turpis egestas sed tempus. Fames ac turpis egestas maecenas pharetra convallis posuere. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Aenean pharetra magna ac placerat vestibulum lectus mauris. Dui ut ornare lectus sit amet est placerat in egestas. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper.',
        description: 'Consectetur a erat nam at lectus urna. Morbi tincidunt augue interdum velit euismod in. Ornare massa eget egestas purus viverra. Malesuada fames ac turpis egestas sed tempus. Fames ac turpis egestas maecenas pharetra convallis posuere. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Aenean pharetra magna ac placerat vestibulum lectus mauris. Dui ut ornare lectus sit amet est placerat in egestas. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper.',
        active: true
      },
      {
        id: 3,
        name: 'Could our solar system have a new planet?',
        info: 'Consectetur a erat nam at lectus urna. Morbi tincidunt augue interdum velit euismod in. Ornare massa eget egestas purus viverra. Malesuada fames ac turpis egestas sed tempus. Fames ac turpis egestas maecenas pharetra convallis posuere. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Aenean pharetra magna ac placerat vestibulum lectus mauris. Rhoncus aenean. Dui ut ornare lectus sit amet est placerat in egestas. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper.',
        description: 'Consectetur a erat nam at lectus urna. Morbi tincidunt augue interdum velit euismod in. Ornare massa eget egestas purus viverra. Malesuada fames ac turpis egestas sed tempus. Fames ac turpis egestas maecenas pharetra convallis posuere. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Aenean pharetra magna ac placerat vestibulum lectus mauris. Rhoncus aenean. Dui ut ornare lectus sit amet est placerat in egestas. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper.',
        active: true
      }
    ];
    // this.serviceItems.getItems().subscribe(items => {
    //   this.dataSource = new MatTableDataSource(items);
    // });
  }

  openDetails(newsItem: News): void {
    const dialogRef = this.dialog.open(NewDetailComponent, {
      width: '1000px',
      height: '500px',
      data: newsItem
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }

  addItem(name: string): void {
    name = name.trim();
    if (!name) { return; }

    let item = new News();

    item.name = name;
    item.active = true;

    this.serviceItems.addItem(item).subscribe(item => {
      this.fillItems();
    });
  }

  deleteItem(item: News): void {
    this.serviceItems.deleteItem(item).subscribe(item => {
      this.fillItems();
    });
  }
}