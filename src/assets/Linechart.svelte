

<script>

  //import chart
  import Chart from 'chart.js/auto';

  //get the chart data
  export let lines;

  //define color palette
  const colors = {
    offwhite: `white`,
    lightgrey: `hsla(252, 10%, 90%, 1)`,
    mediumgrey: `hsla(252, 10%, 80%, 1)`,
    mediumdarkgrey: `hsla(252, 10%, 45%, 1)`,
    darkgrey: `hsla(252, 10%, 30%, 1)`,
    color1: `hsla(240, 100%, 71%, 1)`,
    color2: `hsla(308, 80%, 64%, 1)`,
    color3: `hsla(336, 100%, 69%, 1)`,
    color4: `hsla(14, 100%, 72%, 1)`,
    color5: `hsla(40, 100%, 67%, 1)`,
    color6: `hsla(60, 92%, 71%, 1)`,
    color7: `hsla(165, 47%, 52%, 1)`,
    color1fill: `hsla(240, 100%, 71%, 0.5)`,
    color2fill: `hsla(308, 80%, 64%, 0.5)`,
    color3fill: `hsla(336, 100%, 69%, 0.5)`,
    color4fill: `hsla(14, 100%, 72%, 0.5)`,
    color5fill: `hsla(40, 100%, 67%, 0.5)`,
    color6fill: `hsla(60, 92%, 71%, 0.5)`,
    color7fill: `hsla(165, 47%, 52%, 0.5)`,
  }

  //define chart configuration
	$: config = {
		type: `line`,
		data: {
      //labels,
      datasets: lines.map(({label, data, color}) => ({
        label,
        backgroundColor: colors[`color${color}fill`],
        borderColor: colors[`color${color}`],
        pointBackgroundColor: colors.offwhite,
        data,
        tension: 0,
        borderWidth: 1,
      })),
    },
		options: {
      responsive: true,
      maintainAspectRatio: false,
      stacked: true,
      scales: {
        x: {
          type: 'linear',
          grid: {
            display: false,
          },
          ticks: {
            display: false,
          },
          border: {
            color: colors.darkgrey,
          },
        },
        y: {
          grid: {
            color: colors.mediumgrey,
          },
          ticks: {
            color: colors.darkgrey,
          },
          border: {
            color: colors.darkgrey,
          },
        },
      },
      plugins: {
        legend: {
            display: false,
        },
      },
    },
	}
	
	const handleChart = (element, config) => {

    //create a new chart instance
		let chartInstance = new Chart(element, config);
		
		return {

      update(config) {
        
        //if the config updates, destroy the chart instance
				chartInstance.destroy();
        //and create a new chart instance
				chartInstance = new Chart(element, config);

			},

			destroy() {

        //if the config is destroyed, destroy the chart instance
				chartInstance.destroy();

			}

		}

	}

</script>

<canvas use:handleChart={config} />