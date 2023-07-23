import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'hinv-comp-routewithsub2',
  templateUrl: './comp-routewithsub2.component.html',
  styleUrls: ['./comp-routewithsub2.component.scss']
})
export class CompRoutewithsub2Component implements OnInit {

  constructor(private router: ActivatedRoute) {}

  $val = this.router.params.pipe(map(params => params['val']));
  $valHaspm = this.router.paramMap.pipe(map(paramMap => paramMap.has('val')));
  $valpm = this.router.paramMap.pipe(map(paramMap => paramMap.get('val')));

  $val1Haspm = this.router.paramMap.pipe(map(paramMap => paramMap.has('val1')));
  $val1pm = this.router.paramMap.pipe(map(paramMap => paramMap.get('val1')));

  $val2Haspm = this.router.paramMap.pipe(map(paramMap => paramMap.has('val2')));
  $val2pm = this.router.paramMap.pipe(map(paramMap => paramMap.get('val2')));

  ngOnInit(): void {
      this.router.params.subscribe(params => console.log(params));
      this.router.paramMap.subscribe(paramMap => console.log(paramMap));
      console.log(this.router.snapshot.params);
      console.log(this.router.snapshot.paramMap);
  }

}
