(function() { 
	let template = document.createElement("template");
	template.innerHTML = `
		<style>
	:host {
			border-radius: 1px;
			border-width: 1px;
			border-color: black;
			border-style: solid;
			display: block;
		} 
		body {
		  background: #fff;
		  background-image : url("https://girishmurali2404.github.io/SACCustomWidget/SAPCustomWidget/Body%20Parts%20Injured.png") ;
		  background-repeat : no-repeat;
		  height : 622px;
		  width :432px;

		}
		
		.metric {

		  padding: 1px;
		}
		
		.metric svg {
		  max-width: 100%;
		
		}
		
		.metric path {
		  stroke-width: 2;
		  stroke: black;
		  fill: red;
		}
		
		.metric text {
		  font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
		}
		
		.metric.participation path.data-arc {
		  stroke: #27ae60;
		}
		
		.metric.participation text {
		  fill: #27ae60;
		}		
		</style>
		
		<div class="container">
		  <div class="row">
		    <div class="col-md-4 col-sm-4">
		      <div class="metric participation" data-ratio=".95">
		        <svg viewBox="0 0 432 622">
				   
					<text class='percentage' text-anchor="left" alignment-baseline="middle" x="60" y="113" font-size="20" font-weight="bold">10</text>
					<text class='title' text-anchor="right" alignment-baseline="middle" x="60" y="133" font-size="16" font-weight="normal">Head</text>
                   
				    <text class='percentage' text-anchor="left" alignment-baseline="middle" x="320" y="190" font-size="20" font-weight="bold">40</text>
					<text class='title' text-anchor="right" alignment-baseline="middle" x="320" y="210" font-size="16" font-weight="normal">Shoulder</text>
				   
                    <text class='percentage' text-anchor="left" alignment-baseline="middle" x="60" y="270" font-size="20" font-weight="bold">40</text>
					<text class='title' text-anchor="right" alignment-baseline="middle" x="60" y="295" font-size="16" font-weight="normal">Stomach</text>
                    
					<text class='percentage' text-anchor="left" alignment-baseline="middle" x="320" y="350" font-size="20" font-weight="bold">40</text>
					<text class='title' text-anchor="right" alignment-baseline="middle" x="320" y="370" font-size="16" font-weight="normal">Hand</text>
					
 				    <text class='percentage' text-anchor="left" alignment-baseline="middle" x="60" y="430" font-size="20" font-weight="bold">40</text>
					<text class='title' text-anchor="right" alignment-baseline="middle" x="60" y="450" font-size="16" font-weight="normal">Leg</text>
                    
					<text class='percentage' text-anchor="left" alignment-baseline="middle" x="320" y="530" font-size="20" font-weight="bold">40</text>
					<text class='title' text-anchor="right" alignment-baseline="middle" x="320" y="550" font-size="16" font-weight="normal">Foot</text>
					
					
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
			var val6 = val06 ;
			var rounded01 = Math.round( val1 * 10 ) / 10;
			var rounded02 = Math.round( val2 * 10 ) / 10;
			var rounded03 = Math.round( val3 * 10 ) / 10;
			var rounded04 = Math.round( val4 * 10 ) / 10;
			var rounded05 = Math.round( val5 * 10 ) / 10;
			var rounded05 = Math.round( val6 * 10 ) / 10;
			var color = "green";
			var info = 'Fatality';
			

			
			if(rounded01 >=0 && rounded01 <=100) {
				
				this.$svg.innerHTML = '<text class="percentage" text-anchor="left" alignment-baseline="middle" x="60" y="113" font-size="20" font-weight="bold">' + rounded01 + '</text><text class="title" text-anchor="right" alignment-baseline="middle" x="60" y="133" font-size="16" font-weight="normal">Head</text><text class="percentage" text-anchor="left" alignment-baseline="middle" x="320" y="190" font-size="20" font-weight="bold">' + rounded02 + '</text><text class="title" text-anchor="right" alignment-baseline="middle" x="320" y="210" font-size="16" font-weight="normal">Shoulder</text><text class="percentage" text-anchor="left" alignment-baseline="middle" x="60" y="270" font-size="20" font-weight="bold">' + rounded03 + '</text><text class="title" text-anchor="right" alignment-baseline="middle" x="60" y="295" font-size="16" font-weight="normal">Stomach</text><text class="percentage" text-anchor="left" alignment-baseline="middle" x="320" y="350" font-size="20" font-weight="bold">' + rounded04 + '</text><text class="title" text-anchor="right" alignment-baseline="middle" x="320" y="370" font-size="16" font-weight="normal">Hand</text><text class="percentage" text-anchor="left" alignment-baseline="middle" x="60" y="430" font-size="20" font-weight="bold">' + rounded05 + '</text><text class="title" text-anchor="right" alignment-baseline="middle" x="60" y="450" font-size="16" font-weight="normal">Leg</text><text class="percentage" text-anchor="left" alignment-baseline="middle" x="320" y="530" font-size="20" font-weight="bold">' + rounded06 + '</text><text class="title" text-anchor="right" alignment-baseline="middle" x="320" y="550" font-size="16" font-weight="normal">Foot</text>';
					

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
			
			if ("value6" in changedProperties) {
				this.$value6 = changedProperties["value6"];
			}
			
			this.render(this.$value1, this.$value2, this.$value3, this.$value4, this.$value5, this.$value6);
		}
	}
	
	customElements.define("com-demo-gauge", Box);
})();