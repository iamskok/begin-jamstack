const test = require('tape')
const LargeHeading = require('../../src/views/heading-large.js')

/**
 * Example component test
 */
test('Set up env', t => {
  t.test('LargeHeading exists', t => {
    t.plan(1)
    t.ok(LargeHeading, 'LargeHeading loeaded')
  })

  t.test('LargeHeading should take props', t => {
    t.plan(1)
    let output = LargeHeading({
      children: 'Your name'
    })
    t.ok(/Your name/.test(output), 'LargeHeading takes props')
    console.log(output)
  })
})
