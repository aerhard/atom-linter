'use strict'

setTimeout(function() {
  // We should be killed at 10 seconds, if we survive 15 then it's an error
  console.log('Impossible')
  process.exit(1)
}, 15 * 1000)
