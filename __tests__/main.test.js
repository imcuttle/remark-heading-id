/**
 * @file main
 * @author imcuttle
 * @date 2018/4/4
 */
const remark = require('remark')
const stringify = require('remark-rehype')
const html = require('rehype-stringify')
const remarkHeadingId = require('../')

describe('remarkHeadingId', function() {
  it('should parse well', function() {
    let { contents } = remark()
      .data('settings', {
        position: false
      })
      .use(remarkHeadingId)
      .use(stringify)
      .use(html).processSync(`# head
# cus head1 {#idd-id}
# cus head2 {#idd id}
# cus head3 {#中文 id}`)

    expect(contents).toMatchInlineSnapshot(`
"<h1 id=\\"head\\">head</h1>
<h1 id=\\"idd-id\\">cus head1</h1>
<h1 id=\\"idd id\\">cus head2</h1>
<h1 id=\\"中文 id\\">cus head3</h1>"
`)
  })

  it('should parse well which contains inline syntax', function() {
    let { contents } = remark()
      .data('settings', {
        position: false
      })
      .use(remarkHeadingId)
      .use(stringify)
      .use(html).processSync(`
# head \`heada\`
# My Great Heading
## head **headb**
## head ~~headc~~
# cus \`head1\` {#idd-id}
## cus **head2** {#idd id}
## cus ~~head2~~  {#idd id}`)

    expect(contents).toMatchInlineSnapshot(`
"<h1 id=\\"head-heada\\">head <code>heada</code></h1>
<h1 id=\\"my-great-heading\\">My Great Heading</h1>
<h2 id=\\"head-headb\\">head <strong>headb</strong></h2>
<h2 id=\\"head-headc\\">head <del>headc</del></h2>
<h1 id=\\"idd-id\\">cus <code>head1</code></h1>
<h2 id=\\"idd id\\">cus <strong>head2</strong></h2>
<h2 id=\\"idd id\\">cus <del>head2</del> </h2>"
`)
  })
})
