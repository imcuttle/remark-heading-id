/**
 * The remark plugin for supporting custom id and default id
 * @author imcuttle
 */

const visit = require('unist-util-visit')
const _ = require('lodash')

const extractText = children => {
  return children
    .map(child => {
      if (!_.isEmpty(child.value)) {
        return child.value
      } else if (child.children && child.children.length > 0) {
        return extractText(child.children)
      } else {
        return ''
      }
    })
    .join(' ')
}

module.exports = function() {
  return function(node) {
    visit(node, 'heading', node => {
      if (!node.data) node.data = {}
      if (!node.data.hProperties) node.data.hProperties = {}

      let lastChild = node.children[node.children.length - 1]
      if (lastChild && lastChild.type === 'text') {
        let string = lastChild.value.replace(/ +$/, '')
        let matched = string.match(/ {#([^]+?)}$/)

        if (matched) {
          let id = matched[1]
          if (!!id.length) {
            node.data.id = node.data.hProperties.id = id

            string = string.substring(0, matched.index)
            lastChild.value = string
            return
          }
        }
      }

      // If no custom id was found, use default instead
      let fullText = extractText(node.children)
      node.data.id = node.data.hProperties.id = _.kebabCase(fullText)
    })
  }
}
