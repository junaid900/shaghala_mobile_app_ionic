import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-empty-layout',
  templateUrl: './empty-layout.component.html',
  styleUrls: ['./empty-layout.component.scss'],
})
export class EmptyLayoutComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {}

}
