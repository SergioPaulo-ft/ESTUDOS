import { 
  Component, 
  OnInit, 
  DoCheck, 
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements 
OnInit, 
DoCheck, 
AfterContentChecked,
AfterContentInit,
AfterViewChecked,
AfterViewInit,
OnDestroy {

  quantidade:number = 0;

  constructor() {
  }
  ngOnDestroy(): void {
    console.log(`goodbye my friend`)
  }
  adicionar(){
    this.quantidade += 1
  }
  decrementar(){
    this.quantidade -= 1
  }
  ngAfterViewInit(): void {
    console.log(`ng AfterViewInit`);
  }
  ngAfterViewChecked(): void {
    console.log(`ng AfterViewChecked`);
  }
  ngAfterContentInit(): void {
    console.log(`ng AfterContentInit`);
  }
  ngAfterContentChecked(): void {
    console.log(`ng AfterContentChecked`);
  }
  ngDoCheck(): void {
    console.log(`ng DoCheck`);
  }

  ngOnInit(): void {
  }

}
