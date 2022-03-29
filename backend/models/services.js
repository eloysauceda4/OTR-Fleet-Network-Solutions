const { Schema } = require('mongoose')

const Services = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    area: { type: String, required: true },
    companies: { type: Schema.Types.ObjectId, ref: 'companies' }
  },
  { timestamps: true }
)

module.exports = Services