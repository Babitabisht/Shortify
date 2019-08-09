import { Component, OnInit } from '@angular/core';
import { ShortifyServiceService } from '../../services/shortify-service.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  val;
  shortURL;
  err;
  constructor(private shortify: ShortifyServiceService) {}

  ngOnInit() {
    this.shortURL = '';
  }

  getShortLink() {
    this.shortURL = '';
    this.err = '';
    if (this.val == null || this.val == undefined) {
    //  console.log('add something');
    } else {
     // console.log('in else');

      this.shortify.shortifytheURL(this.val).subscribe((data: any) => {
        // console.log(
        //   '-------------This is the response---',
        //   data,
        //   typeof data,
        //   data.shortURL
        // );
        if (data == 422) {
          this.err = 'Incorrect URL';
        }
        this.shortURL = data.shortURL;
      });
    }
  }

  copyInputMessage(inputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }
}
