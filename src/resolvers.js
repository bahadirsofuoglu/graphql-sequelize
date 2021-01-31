const resolvers = {
  Query: {
    async user (root, { id }, { models }) {
      return models.User.findById(id)
    },
    async allRecipes (root, args, { models }) {
      return models.Recipe.findAll()
    },
    async recipe (root, { id }, { models }) {
      return models.Recipe.findById(id)
    }
  }
}

module.exports = resolvers
