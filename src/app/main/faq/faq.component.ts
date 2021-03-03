import { Subscription } from 'rxjs';
import { MediaObserver } from '@angular/flex-layout';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { matchMediaService } from 'src/app/core/services/match-media.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit, OnDestroy {

  mediasizemd:boolean

  // private subs = new SubSink();
  private subscription: Subscription;
  constructor(
    private _matchMediaService: matchMediaService,
    private _mediaObserver: MediaObserver
  ) {}

  ngOnInit(): void {
    // this.subs.sink
    this.subscription = this._matchMediaService.onMediaChange.subscribe(() => {
      console.log('gt-sm ===> ', this._mediaObserver.isActive('gt-sm'));
      this.mediasizemd = this._mediaObserver.isActive("gt-md");
    });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    // this.subs.unsubscribe();
  }
}
