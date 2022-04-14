import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-percentage-bar',
  templateUrl: './percentage-bar.component.html',
  styleUrls: ['./percentage-bar.component.css']
})
export class PercentageBarComponent implements OnInit {
	@Input() public color: string = '' ;
	@Input()
  public percentage!: BehaviorSubject<number>;
	arrayColor = <any>[];
	totalPin = 5;
	pinColor = '#efefed';
  percentageVal = 0
  constructor() { 
   
  }

	ngOnInit() {
    this.percentage.subscribe(val => {
      
      console.log(val)
      this.percentageVal = val
      this.arrayColor = <any>[];

      this.renderArrayColor();

    })
		console.log(this.arrayColor);
	}

	renderArrayColor() {
		const part = 100 / this.totalPin;
		let currentLevel = 0 + part;
		for (let i = 0; i < this.totalPin; i++) {
			if (this.percentageVal >= currentLevel) {
				this.arrayColor.push({ full: true, color: this.color, width: '7px' });
				currentLevel += part;
			} else {
				const newWidth = ((this.percentageVal - currentLevel + part) * 7) / 20;
				this.arrayColor.push({ full: false, color: this.pinColor, width: newWidth + 'px' });
				for (let j = i + 1; j < this.totalPin; j++) {
					this.arrayColor.push({ full: true, color: this.pinColor, width: '7px' });
				}
				break;
			}
		}
    console.log(this.arrayColor)
	}
}
