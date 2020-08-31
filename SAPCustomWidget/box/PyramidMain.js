(function() { 
	let template = document.createElement("template");
	template.innerHTML = `
		<style>
		:host {
			border-radius: 10px;
			border-width: 2px;
			border-color: black;
			border-style: solid;
			display: block;
		} 
		body {
		  background: #fff;
		}
		
		.metric {
		  padding: 10%;
		}
		
		.metric svg {
		  max-width: 100%;
		}
		
		.metric path {
		  stroke-width: 2;
		  stroke: #ecf0f1;
		  fill: none;
		}
		
		.metric text {
		  font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
		}
		
		.metric.participation path.data-arc {
		  stroke: #27ae60;
		}
		
		.metric.participation text {
		
		}		
		</style>
		
		<div class="container">
		  <div class="row">
		    <div class="col-md-4 col-sm-4">
		      <div class="metric participation" data-ratio=".95">
		        <svg viewBox="0 0 1500 700">

				 
			       <path d="M600 100 L525 200 L675 200 Z" style="fill:rgb(235,35,35);"></path>
					<text class='percentage' text-anchor="middle" fill="white" alignment-baseline="middle" x="600" y="175" font-size="50" font-weight="bold">50</text>
					<text class='title' text-anchor="middle" fill="black" alignment-baseline="middle" x="800" y="150" font-size="45" font-weight="normal" > - Fatality</text>
					
					<path d="M525 200 L450 300 L750 300 L675 200 Z" style="fill:rgb(153,185,86);"></path>
					<text class='percentage' text-anchor="middle" fill="white" alignment-baseline="middle" x="600" y="250" font-size="50" font-weight="bold">0</text>
					<text class='title' text-anchor="middle" fill="black" alignment-baseline="middle" x="950" y="250" font-size="45" font-weight="normal"> - Lost Time Incident</text>
                    
					<path d="M450 300 L375 400 L825 400 L750 300 Z" style="fill:rgb(108,57,163);"></path>
					<text class='percentage' text-anchor="middle" fill="white" alignment-baseline="middle" x="600" y="350" font-size="50" font-weight="bold">0</text>
					<text class='title' text-anchor="middle" fill="black" alignment-baseline="middle" x="1000" y="350" font-size="45" font-weight="normal"> - Treatable Injuries</text>
					
                    <path d="M375 400 L300 500 L900 500 L825 400 Z" style="fill:rgb(53,147,171);"></path>
					<text class='percentage' text-anchor="middle" fill="white" alignment-baseline="middle" x="600" y="450" font-size="50" font-weight="bold">0</text>
					<text class='title' text-anchor="middle" fill="black" alignment-baseline="middle" x="1100" y="450" font-size="45" font-weight="normal"> - Significan Near Miss</text>

                    <path d="M300 500 L225 600 L975 600 L900 500 Z" style="fill:rgb(232,126,39);"></path>
					<text class='percentage' text-anchor="middle" fill="white" alignment-baseline="middle" x="600" y="550" font-size="50" font-weight="bold">0</text>
					<text class='title' text-anchor="middle" fill="black" alignment-baseline="middle" x="1100" y="550" font-size="45" font-weight="normal"> - Unsafe Act</text>
					


					
			</svg>
		    </div>
		    </div>
		  </div>
		</div>
		
	`;

	class Box extends HTMLElement {
		constructor() {
			super(); 
			let shadowRoot = this.attachShadow({mode: "open"});
			shadowRoot.appendChild(template.content.cloneNode(true));
			
			this.$style = shadowRoot.querySelector('style');			
			this.$svg = shadowRoot.querySelector('svg');
			
			this.addEventListener("click", event => {
				var event = new Event("onClick");
				this.dispatchEvent(event);
			});
			
			this._props = {};
		}
		
		render(val01, val02, val03, val04, val05) {
			var val1 = val01 ;
			var val2 = val02 ;
			var val3 = val03 ;
			var val4 = val04 ;
			var val5 = val05 ;
			var rounded01 = Math.round( val1 * 10 ) / 10;
			var rounded02 = Math.round( val2 * 10 ) / 10;
			var rounded03 = Math.round( val3 * 10 ) / 10;
			var rounded04 = Math.round( val4 * 10 ) / 10;
			var rounded05 = Math.round( val5 * 10 ) / 10;
			var color = "green";
			var info = "Fatality";
			

			
			if(rounded01 >=0 && rounded01 <=100) {
				this.$style.innerHTML = ':host {border-radius: 10px;border-width: 2px;border-color: black;border-style: solid;display: block;}.body {background: #fff;}.metric {padding: 10%;}.metric svg {max-width: 100%;}.metric path {stroke-width: 2;stroke: #ecf0f1;fill: none;}.metric text {font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;}.metric.participation path.data-arc {}.metric.participation text {}';
				this.$svg.innerHTML = '<path d="M600 100 L525 200 L675 200 Z" style= "fill :' + color + ';"></path><text class="percentage" text-anchor="middle" fill=' + color + ' alignment-baseline="middle" x="600" y="175" font-size="50" font-weight="bold">' + rounded01 + '</text><text class="title" text-anchor="middle" fill=' + color + ' alignment-baseline="middle" x="800" y="150" font-size="45" font-weight="normal">' + info + '</text>"<path d="M525 200 L450 300 L750 300 L675 200 Z"></path><text class="percentage" text-anchor="middle" fill=' + color + ' alignment-baseline="middle" x="600" y="250" font-size="50" font-weight="bold">' + rounded02 + '</text><text class="title" text-anchor="middle" fill=' + color + ' alignment-baseline="middle" x="950" y="250" font-size="45" font-weight="normal">' + info + '</text><path d="' + x + '" class="data-arc"></path>"<path d="M450 300 L375 400 L825 400 L750 300 Z"></path><text class="percentage" text-anchor="middle" fill=' + color + ' alignment-baseline="middle" x="600" y="350" font-size="50" font-weight="bold">' + rounded03 + '</text><text class="title" text-anchor="middle" fill=' + color + ' alignment-baseline="middle" x="1000" y="350" font-size="45" font-weight="normal">' + info + '</text><path d="' + x + '" class="data-arc"></path>"<path d="M375 400 L300 500 L900 500 L825 400 Z"></path><text class="percentage" text-anchor="middle" fill=' + color + ' alignment-baseline="middle" x="600" y="450" font-size="50" font-weight="bold">' + rounded03 + '</text><text class="title" text-anchor="middle" fill=' + color + ' alignment-baseline="middle" x="1100" y="450" font-size="45" font-weight="normal">' + info + '</text><path d="' + x + '" class="data-arc"></path>"<path d="M300 500 L225 600 L975 600 L900 500 Z"></path><text class="percentage" text-anchor="middle" fill=' + color + ' alignment-baseline="middle" x="600" y="550" font-size="50" font-weight="bold">' + rounded03 + '</text><text class="title" text-anchor="middle" fill=' + color + ' alignment-baseline="middle" x="1100" y="550" font-size="45" font-weight="normal">' + info + '</text><path d="' + x + '" class="data-arc"></path>"';
			}
		}
		  
		
		  

		onCustomWidgetBeforeUpdate(changedProperties) {
			this._props = { ...this._props, ...changedProperties };
		}

		onCustomWidgetAfterUpdate(changedProperties) {
			if ("value1" in changedProperties) {
				this.$value1 = changedProperties["value1"];
			}
			if ("value2" in changedProperties) {
				this.$value2 = changedProperties["value2"];
			}
			if ("value3" in changedProperties) {
				this.$value3 = changedProperties["value3"];
			}
			
			
			if ("value4" in changedProperties) {
				this.$value4 = changedProperties["value4"];
			}
			
			if ("value5" in changedProperties) {
				this.$value5 = changedProperties["value5"];
			}
			
			
			this.render(this.$value1, this.$value2, this.$value3, this.$value4, this.$value5);
		}
	}
	
	customElements.define("com-demo-gauge", Box);
})();
