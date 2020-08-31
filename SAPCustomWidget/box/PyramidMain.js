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
		  fill: #27ae60;
		}		
		</style>
		
		<div class="container">
		  <div class="row">
		    <div class="col-md-4 col-sm-4">
		      <div class="metric participation" data-ratio=".95">
		        <svg viewBox="0 0 1500 700">
			        <path d="M150 0 L75 100 L225 100 Z"></path>
					<text class='percentage' text-anchor="middle" alignment-baseline="middle" x="150" y="60" font-size="50" font-weight="bold">0</text>
					<text class='title' text-anchor="middle" alignment-baseline="middle" x="500" y="450" font-size="90" font-weight="normal"></text>

					<path d="M75 100 L50 200 L250 200 L225 100 Z"></path>
					<text class='percentage' text-anchor="middle" alignment-baseline="middle" x="150" y="150" font-size="50" font-weight="bold">0</text>
					<text class='title' text-anchor="middle" alignment-baseline="middle" x="500" y="450" font-size="90" font-weight="normal"></text>

                                        <path d="M50 200 L25 300 L275 300 L250 200 Z"></path>
					<text class='percentage' text-anchor="middle" alignment-baseline="middle" x="150" y="250" font-size="50" font-weight="bold">0</text>
					<text class='title' text-anchor="middle" alignment-baseline="middle" x="500" y="450" font-size="90" font-weight="normal"></text>

					
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
		
		render(val01, val02, val03, info, color) {
			var val1 = val01 ;
			var val2 = val02 ;
			var val3 = val03 ;
			var x = this.svg_circle_arc_path(500, 500, 450, -90, val1 * 180.0 - 90);
			var rounded01 = Math.round( val1 * 10 ) / 10;
			var rounded02 = Math.round( val2 * 10 ) / 10;
			var rounded03 = Math.round( val3 * 10 ) / 10;

			
			if(rounded01 >=0 && rounded01 <=100) {
				this.$style.innerHTML = ':host {border-radius: 10px;border-width: 2px;border-color: black;border-style: solid;display: block;}.body {background: #fff;}.metric {padding: 10%;}.metric svg {max-width: 100%;}.metric path {stroke-width: 2;stroke: #ecf0f1;fill: none;}.metric text {font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;}.metric.participation path.data-arc {}.metric.participation text {}';
				this.$svg.innerHTML = '<path d="M600 100 L525 200 L675 200 Z" style="fill:yellow;"></path><text class="percentage" text-anchor="middle" fill=' + color + ' alignment-baseline="middle" x="150" y="90" font-size="50" font-weight="bold">' + rounded01 + '</text><text class="title" text-anchor="middle" fill=' + color + ' alignment-baseline="middle" x="500" y="450" font-size="90" font-weight="normal">' + info + '</text><path d="' + x + '" class="data-arc"></path>"<path d="M525 200 L450 300 L750 300 L675 200 Z"></path><text class="percentage" text-anchor="middle" fill=' + color + ' alignment-baseline="middle" x="150" y="200" font-size="50" font-weight="bold">' + rounded02 + '</text><text class="title" text-anchor="middle" fill=' + color + ' alignment-baseline="middle" x="500" y="450" font-size="90" font-weight="normal">' + info + '</text><path d="' + x + '" class="data-arc"></path>"<path d="M450 300 L375 400 L825 400 L750 300 Z"></path><text class="percentage" text-anchor="middle" fill=' + color + ' alignment-baseline="middle" x="150" y="300" font-size="50" font-weight="bold">' + rounded03 + '</text><text class="title" text-anchor="middle" fill=' + color + ' alignment-baseline="middle" x="500" y="450" font-size="90" font-weight="normal">' + info + '</text><path d="' + x + '" class="data-arc"></path>"<path d="M375 400 L300 500 L900 500 L825 400 Z"></path><text class="percentage" text-anchor="middle" fill=' + color + ' alignment-baseline="middle" x="150" y="300" font-size="50" font-weight="bold">' + rounded03 + '</text><text class="title" text-anchor="middle" fill=' + color + ' alignment-baseline="middle" x="500" y="450" font-size="90" font-weight="normal">' + info + '</text><path d="' + x + '" class="data-arc"></path>"<path d="M300 500 L225 600 L975 600 L900 500 Z"></path><text class="percentage" text-anchor="middle" fill=' + color + ' alignment-baseline="middle" x="150" y="300" font-size="50" font-weight="bold">' + rounded03 + '</text><text class="title" text-anchor="middle" fill=' + color + ' alignment-baseline="middle" x="500" y="450" font-size="90" font-weight="normal">' + info + '</text><path d="' + x + '" class="data-arc"></path>"';
}
		}
		  
		polar_to_cartesian(cx, cy, radius, angle) {
		    var radians;
		    radians = (angle - 90) * Math.PI / 180.0;
		    return [Math.round((cx + radius * Math.cos(radians)) * 100) / 100, Math.round((cy + radius * Math.sin(radians)) * 100) / 100];
		}
		
		svg_circle_arc_path(x, y, radius, start_angle, end_angle) {
		    var end_xy, start_xy;
		    start_xy = this.polar_to_cartesian(x, y, radius, end_angle);
		    end_xy = this.polar_to_cartesian(x, y, radius, start_angle);
		    return "M " + start_xy[0] + " " + start_xy[1] + " A " + radius + " " + radius + " 0 0 0 " + end_xy[0] + " " + end_xy[1];
		  };
		  

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
			
			if ("info" in changedProperties) {
				this.$info = changedProperties["info"];
			}
			
			if ("color" in changedProperties) {
				this.$color = changedProperties["color"];
			}
			
			this.render(this.$value1, this.$value2, this.$value3, this.$info, this.$color);
		}
	}
	
	customElements.define("com-demo-gauge", Box);
})();
