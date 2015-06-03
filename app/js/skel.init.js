/* skel-baseline v2.0.3 | (c) n33 | getskel.com | MIT licensed */

skel.init({
  reset: 'full',
  breakpoints: {
    global: {
      href: '/assets/css/app.css',
      containers: 1400,
      grid: { gutters: ['2em', 0] }
    },  
    xlarge: {
      media: '(min-width: 1280px)',
      href: '/assets/css/xlarge.css',
      containers: 1200
    },  
    large: {
      media: '(max-width: 1280px)',
      href: '/assets/css/large.css',
      containers: 960,
      grid: { gutters: ['1.5em', 0] },
      viewport: { scalable: false }
    },  
    medium: {
      media: '(max-width: 980px)',
      href: '/assets/css/medium.css',
      containers: '90%'
    },  
    small: {
      media: '(max-width: 736px)',
      href: '/assets/css/small.css',
      containers: '90%',
      grid: { gutters: ['1.25em', 0] }
    }   
  }
});
