import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import RestaurantForm from './RestaurantForm'
import ImageUpload from './ImageUpload.js'

export default function CreateRestaurant({ history }) {

  const [formData, updateFormData] = useState({
    name: '',
    link: '',
    image: '',
    lat: '',
    long: '',
    location: '',
    address: '',
    phone: '',
    category: [],
    price: []
  })

  function handleChange(event) {
    updateFormData({ ...formData, [event.target.name]: event.target.value })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const token = localStorage.getItem('token')
    const newFormData = {
      ...formData,
      category: formData.category.map(cat => cat.value),
      price: formData.price.value
    }
    try {
      const { data } = await axios.post('/api/restaurants', newFormData, {
        headers: { Authorization: `Bearer ${token}` }
      })
      history.push(`/activities/${data._id}`)
    } catch (err) {
      console.log(err.response.data)
    }
  }

  return <div className="container">
    <h1 className="title">Add a restaurant</h1>
    <ImageUpload
      formData={formData}
      updateFormData={updateFormData}
    />
    <RestaurantForm
      handleChange={handleChange}
      handleCategoryChange={(category) => updateFormData({ ...formData, category })}
      handlePriceChange={(price) => updateFormData({ ...formData, price })}
      handleSubmit={handleSubmit}
      formData={formData}
    />

    <div className="button is-success"><Link to={'/activities/food-and-drink'}>Back to food and drink</Link></div>
  </div>


}