import { AfterContentChecked, AfterContentInit, Component, ContentChild, OnDestroy } from '@angular/core';
import { HighpriocontComponent } from '../highpriocont/highpriocont.component';

@Component({
  selector: 'hinv-contcontainer',
  templateUrl: './contcontainer.component.html',
  styleUrls: ['./contcontainer.component.scss']
})
export class ContcontainerComponent implements AfterContentInit, OnDestroy {

  @ContentChild(HighpriocontComponent) hpc !: HighpriocontComponent;

  ngAfterContentInit(): void {
    this.hpc.data = this.hpc.data.toLocaleUpperCase();
  }

  ngOnDestroy(): void {
      alert("ContContainer says: Ahh I am getting killed!");
  }
  

}
