/*!
* Start Bootstrap - Coming Soon v6.0.6 (https://startbootstrap.com/theme/coming-soon)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-coming-soon/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
/** Here's how to say Hello to Netlify Graph! */
await fetch('https://graph.netlify.com/graphql?app_id=b83d3c66-7e5b-47e6-96b4-5ef3cc6f57b6&show_metrics=false',
  {
    method: 'POST',
    body: JSON.stringify({
      query: `query HelloNetlifyGraph {
    helloGraph(sessionId: "78213f69-a5c6-4a54-980b-25f0ecc7495b") {
      welcome
      about
      whatToDoNext
    }
  }`,
    }),
  }
)
.then((r) => r.json())
