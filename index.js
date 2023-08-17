/**
 * The remark plugin for supporting custom id and default id
 * @author imcuttle
 */

const visit = require('unist-util-visit')
const { setNodeId, getDefaultId } = require('./util')

module.exports = function(options = { defaults: true }) {
  return function(node) {
    visit(node, 'heading', node => {
      let lastChild = node.children[node.children.length - 1]
      if (lastChild && lastChild.type === 'text') {
        let string = lastChild.value.replace(/ +$/, '')
        let matched = string.match(/ {#([^]+?)}$/)

        if (matched) {
          let id = matched[1]
          if (!!id.length) {
            setNodeId(node, id)

            string = string.substring(0, matched.index)
            lastChild.value = string
            return
          }
        }
      }

      if (options.defaults) {
        // If no custom id was found, use default instead
        setNodeId(node, getDefaultId(node.children))
      }
    })
  }
}
