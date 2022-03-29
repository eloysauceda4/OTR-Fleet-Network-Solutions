const db = require('../db')
const { Companies, Services } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const companies1 = await new Companies({
    name: 'Truck & Tire Masters',
    location: 'San Antonio TX',
    image: 'https://allofe-prod-ntts.s3-us-west-2.amazonaws.com/ntts_graphics/zzz151112.png',
    
  })
  companies1.save()

  const companies2 = await new Companies({
    name: 'Texas Auto Carriers',
    location: '5765 Bicentennial St, San Antonio TX',
    image: 'https://allofe-prod-ntts.s3-us-west-2.amazonaws.com/ntts_graphics/zzz54139.png',
    
  })
  companies2.save()

  const companies3 = await new Companies({
    name: 'Good Year',
    location: '8477 NE Loop 410, San Antonio TX',
    image: 'https://allofe-prod-ntts.s3-us-west-2.amazonaws.com/ntts_graphics/zzz132796.png',
    
  })
  companies3.save()

  const companies4 = await new Companies({
    name: 'R & H Reefer & Trailer Repair',
    location: 'San Antonio Tx',
    image: 'https://allofe-prod-ntts.s3-us-west-2.amazonaws.com/ntts_graphics/zzz88997.png',
    
  })
  companies4.save()

  const companies5 = await new Companies({
    name: 'Peak Trailer Group',
    location: 'San Antonio TX',
    image: 'https://allofe-prod-ntts.s3-us-west-2.amazonaws.com/ntts_graphics/zzz150829.png',
    
  })
  companies5.save()

  const services = [
    {
      title: 'Truck Repair',
      description: '24/7 fleet mobile repair',
      area: 'San Antonio TX',
      companies: companies1._id
    },
    {
        title: 'Towing and Recovery',
        description: 'Local & Long Distance Tow & Recovery',
        area: 'South Texas',
        companies: companies2._id
    },
    {
        title: 'Tire roadside Service',
        description: '24/7 tire road side assistance',
        area: 'San Antonio TX',
        companies: companies3._id
    },
    {
        title: '24 hour Refrigeration and Trailer Service',
        description: 'Refrigeration and Trailer Repair',
        area: 'South Texas',
        companies: companies4._id
    },
    {
        title: 'Trailer Repair',
        description: 'Trailer Sales, Parts, Service, and Body repair.',
        area: 'San Antonio TX',
        companies: companies5._id
    },
    
    
  ]

  await Services.insertMany(services)
  console.log('Created Services!')
}

const run = async () => {
  await main()
  db.close()
}

run()