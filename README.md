# Loose End, a MERN Stack app
## General Assembly Project 3
My third development project was a comlex MERN Stack app built with my classmates <a href="https://github.com/ketka82uk" target="_blank" rel="noreferrer">Cathy</a>, <a href="https://github.com/jacobaston" target="_blank" rel="noreferrer">Jake</a>, and <a href="https://github.com/ollieaa" target="_blank" rel="noreferrer">Ollie</a>.

This app was deployed on Heroku and can be accessed <a href="https://loose-end.herokuapp.com/" target="_blank" rel="noreferrer">here</a>. While you can create your own account, feel free to use mine to access admin privileges
* Email: katherine@katherine.com
* Password: password123

### Brief: 
* Build a full-stack application, both backend and front-end
* Use an Express API to serve your data from a Mongo database
* Consume your API with a separate front-end

## Timeframe: 5 days

## Technologies used:
### Front-end
* React.js
* JavaScript (ES6)
* HTML5
* CSS3
* Axios
* react-router-dom
* react-spinners
* react-select
* lodash
* Bulma CSS Framework

### Backend
* MongoDB
* Mongoose
* Node.js
* Express
* JWT
* Bcrypt

### Developer Tools
* Git
* GitHub
* Heroku
* VS Code
* Google Chrome Developer Tools
* Cloudinary

### External APIs used
* Mapbox
* Yelp

## Getting started
1. Access the course code via the 'Code' button
2. In CLI, run `npm i`, `npm i mongoose`, `npm i mongoose-hidden`, `npm i mongoose-unique-validator`, `npm i bcrypt`, and, finally, `npm run start` on the root level to install dependencies for the backend
3. In CLI, run `mongod --dbpath ~/data/db` to initiatiate MongoDB
4. Finally, navigate to the `client` folder and run `npm i` and `npm run serve` to run the program in your local environment

## App Flow
**The home page. Created by <a href="https://github.com/jacobaston" target="_blank" rel="noreferrer">Jake</a>**
![Screen Shot 2021-02-27 at 10 12 52 AM](https://user-images.githubusercontent.com/73107893/109383115-9275c380-78e4-11eb-9b66-6544eb44ef67.png)

**The home page after logging on. Created by <a href="https://github.com/jacobaston" target="_blank" rel="noreferrer">Jake</a>**
![Screen Shot 2021-02-27 at 10 13 33 AM](https://user-images.githubusercontent.com/73107893/109383143-cc46ca00-78e4-11eb-8b4d-c3950a250b15.png)

**The user can use the Meet Up drop-down menu to search for existing meetups or create their own. Created by <a href="https://github.com/ollieaa" target="_blank" rel="noreferrer">Ollie</a>**
![Screen Shot 2021-02-27 at 10 17 09 AM](https://user-images.githubusercontent.com/73107893/109383316-17ada800-78e6-11eb-9856-1518fb6a3c11.png)
![Screen Shot 2021-02-27 at 10 18 51 AM](https://user-images.githubusercontent.com/73107893/109383318-1b412f00-78e6-11eb-8a4e-5900bd0e5b76.png)

**The user can create their own group, or join an existing group if they have the passcode. Created by <a href="https://github.com/ketka82uk" target="_blank" rel="noreferrer">Cathy</a>**
![Screen Shot 2021-02-27 at 10 26 04 AM](https://user-images.githubusercontent.com/73107893/109383369-6bb88c80-78e6-11eb-80d5-71b315e0eb55.png)
![Screen Shot 2021-02-27 at 10 26 12 AM](https://user-images.githubusercontent.com/73107893/109383371-6d825000-78e6-11eb-90f7-7627c296ca09.png)

**On their User Profile, the user can look at their wishlist as well as events previously attended. They can also edit or delete their profile. Created by <a href="https://github.com/jacobaston" target="_blank" rel="noreferrer">Jake</a>**
![Screen Shot 2021-02-27 at 10 29 39 AM](https://user-images.githubusercontent.com/73107893/109383437-c94cd900-78e6-11eb-9cd4-d4dc0492933b.png)

**Users can browse through popular London restaurants (data pulled from the Yelp API). They can add a restaurant to their wishlist. Created by <a href="https://github.com/ketka82uk" target="_blank" rel="noreferrer">Cathy</a>**
![Screen Shot 2021-02-27 at 10 31 36 AM](https://user-images.githubusercontent.com/73107893/109383481-02854900-78e7-11eb-9300-4859a59544c0.png)

**Each restaurant has it's own page with pertinent information. Created by <a href="https://github.com/ketka82uk" target="_blank" rel="noreferrer">Cathy</a>, except for the map which was created by me**
![Screen Shot 2021-02-27 at 10 39 09 AM](https://user-images.githubusercontent.com/73107893/109383665-25fcc380-78e8-11eb-8cde-ad5700b8c4d1.png)

**Restaurant data is also displayed via a map to enhance user experience. Created by me**
![Screen Shot 2021-02-27 at 10 34 29 AM](https://user-images.githubusercontent.com/73107893/109383576-96efab80-78e7-11eb-862f-a111fcb53481.png)

**The user can browse through Points of Interest around London. Dataset curated by me**
![Screen Shot 2021-02-27 at 10 36 51 AM](https://user-images.githubusercontent.com/73107893/109383608-ce5e5800-78e7-11eb-8186-a30b65544c58.png)

**Each Point of Interest has it's own page with additional information and a map. Created by me**
![Screen Shot 2021-02-27 at 10 41 03 AM](https://user-images.githubusercontent.com/73107893/109383703-66f4d800-78e8-11eb-8103-fa8bb67ab8e9.png)
![Screen Shot 2021-02-27 at 10 41 24 AM](https://user-images.githubusercontent.com/73107893/109383704-68be9b80-78e8-11eb-8863-490fdcdc3db7.png)

**Finally, the user can see the Point of Interest data on a map. Created by me**
![Screen Shot 2021-02-27 at 10 37 13 AM](https://user-images.githubusercontent.com/73107893/109383622-df0ece00-78e7-11eb-8e9d-03b01b664e60.png)

### Functionality
* Register and login
* Post, edit and delete their own Meet Ups, Groups, Restaurants and Points of Interest
* Search and browse Meet Ups, Restaurants and Points of Interest
* Add items to their wishlist

## Process
The idea for our app came from a teammate who used to work in conference services and notied that those who travelled for business were often alone and didn't know what to do outside of work. We took that idea and hit the ground running. *Note to my fellow American readers: my classmates are all British, and Loose End is a common British phrase that essentially means you don't really know what to do.* 

Over Zoom and Slack, we brainstormed and strategized and whiteboarded proposals about how we thought the page could look. We sketched out our models (user, meet up, restaurants, point of interest), our routes and then we created a wireframe: ![Screen Shot 2021-02-27 at 10 53 53 AM](https://user-images.githubusercontent.com/73107893/109383980-3c0b8380-78ea-11eb-8886-ddc85eb1a675.png)
*We may be in 2021, but nothing beats writing things out by hand*

Then we divied up tasks:
* Meet Ups - Ollie
* User Profiles and Homepage - Jake 
* Groups - Cathy
* Activities - Me

By Day 2, we were ready to begin the backend. We thought it was very important that we work as a group, so we used VS Code LiveShare to set up the backend together: creating models, controllers, routes, middleware. Once we finished the backend, we each started working on our respective front-end tasks. To ease styling, we decided to use the Bulma CSS framework.

## My role 
### Backend
One key area that I wanted to practice with during project 3 revolved around API creation and the things I could do with that data. As this app is designed for a traveler, I curated a diverse data set of 30 interesting sites around London using a controlled vocabulary. The POI (*point of interest*) model: 
```
const poiSchema = new mongoose.Schema({
  category: { type: String },
  name: { type: String, required: true, unique: true },
  tube: { type: String, required: true },
  description: { type: String, required: true },
  types: {
    type: [String],
    required: true, 
    validate: (typesArray) => {
      return typesArray.length > 0
    }
  },
  // user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  latlng: { 
    type: [Number]
  },
  address: { type: String },
  price: { type: String },
  time: { type: String }, 
  phone: { type: String },
  funfact: { type: String },
  image: { type: String },
  link: { type: String },
  upVotes: { type: Number },
  comments: [ Comment ],
  events: { type: [mongoose.Schema.ObjectId], ref: 'MeetUp' }
})
```
To avoid duplicates, I required that the `Name` be unique. The only fields required are the name, the nearest Tube stop, a description and the type, from which there are various to choose from: 
```
export default [
  { value: 'gallery', label: 'Galleries' },
  { value: 'gardens', label: 'Gardens' },
  { value: 'landmark', label: 'Landmarks' },
  { value: 'market', label: 'Markets' },
  { value: 'monument', label: 'Monuments' },
  { value: 'museum', label: 'Museums' },
  { value: 'other', label: 'Other' },
  { value: 'palace', label: 'Palaces' },
  { value: 'park', label: 'Parks' },
  // { value: 'public', label: 'Public Art' },
  { value: 'religious', label: 'Religious Buildings' },
  { value: 'sports', label: 'Sports' },
  { value: 'square', label: 'Squares' },
  { value: 'statue', label: 'Statues' },
  { value: 'theatre', label: 'Theatres' }
]
```
For example: 
```
    {
      category: 'outdoor',
      name: 'Kew Gardens',
      tube: 'Kew Gardens',
      description: 'Kew Gardens is a botanic garden that houses the "largest and most diverse botanical and mycological collections in the world". Founded in 1840, from the exotic garden at Kew Park in Middlesex, England, its living collections includes some of the 27,000 taxa curated by Royal Botanic Gardens, Kew, while the herbarium, which is one of the largest in the world, has over 8.5 million preserved plant and fungal specimens.',
      types: ['gardens', 'landmark', 'park'],
      user: users[3],
      latlng: [
        51.4787,
        -0.2956
      ],
      address: 'Richmond, TW9 3AE, United Kingdom',
      price: '£10 for adults, £4.50 for children',
      time: '10am - 5pm',
      phone: '+44 20 8332 5655',
      funfact: 'Housed inside the famous Palm House, the world’s oldest pot plant, a huge Jurassic cyad (Encephalartos altensteinii) originally came to Kew in 1775. Plant-hunter, Frances Masson, collected the specimen during one of Captain Cook’s voyages from the Eastern Cape of South Africa.',
      image: 'https://res.cloudinary.com/dnma7wqzb/image/upload/v1613818132/kew_trvxvt.jpg',
      link: 'https://www.kew.org',
      upVotes: 0,
      comments: [],
      events: []
    },
```

### Front-end
Components I created: 
* CreatePoi
* Footer
* Map
* MapFD
* Poi
* PoiForm
* SinglePoiMap
* UpdatePoi
* Map section of SingleRestaurant

I used React useEffect and useState to manipulate the data, axios to fetch the data, lodash to shuffle the results each time the page reloads and a guard condition while loading.

**POI**
A second key area that I wanted to focus on was accessibility. Following W3C guidelines, I enabled multiple search and filter options by manipulating the state. The user can search using controlled vocabulary terms via a drop down menu, or they can search using natural language.
```
  const [poiData, updatePoi] = useState([])
  const [type, updateType] = useState('All')
  const [search, updateSearch] = useState('')
  
    function filterPoi() {
    return poiData.filter(poi => {
      return (type === 'All' || (poi.types.includes(type)))
        && poi.name.toLowerCase().includes(search.toLowerCase())
    })
  }
  
      <div className="container">
      <div className="select is-success">
        <select onChange={(event) => updateType(event.target.value)} >
          <option>All</option>
          {poiTypes.map((poi, i) => {
            return <option value={poi.value} key={i}>{poi.label}</option>
          })}
        </select>
      </div>
      <input onChange={(event) => updateSearch(event.target.value)} placeholder="Search..." />
    </div>
 ```
 The POI data is mapped on the page as a card with minimal information (name, type, description, tube and image). If the user wishes to add something to the list, they must simply log in and click the `Add somewhere new!` button. 
 
**CreatePoi**
To create cleaner code, I created a separate `PoiForm` component using React-select, which I imported to this page. Additionally, I imported the `poiTypes` file so as to not have to hardcode the POI types.
```
function PoiForm({ formData, handleSubmit, handleChange, handleTypeChange }) {
  return <div className="section">
    <div className="container">
      <form onSubmit={handleSubmit}>
        {inputFields.map(field => {
          return <div key={field} className="field">
            <label className="label">
              {field[0].toUpperCase() + field.slice(1)}
            </label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={formData[field]}
                onChange={handleChange}
                name={field}
              />
            </div>
          </div>
        })}
                <label className="label">
          Types: 
        </label>
        <Select
          defaultValue={[]}
          isMulti
          name="colors"
          options={poiTypes}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={handleTypeChange}
          value={formData.types}
        />
        <button className="button mt-5 is-success">Submit</button>
      </form>
    </div>
  </div>
}
 ```
 
 **SinglePoi**
 Each of cards on the POI list page can be clicked, taking the user to a page focusing solely on the POI they clicked. These pages offer a host of new information, including a map, a link to the POI's website and a link to the profile of the user who posted it:
 ![Screen Shot 2021-02-27 at 11 13 24 AM (2)](https://user-images.githubusercontent.com/73107893/109384425-f1d7d180-78ec-11eb-842c-77ef5e8af92f.png)
![Screen Shot 2021-02-27 at 11 13 29 AM (2)](https://user-images.githubusercontent.com/73107893/109384428-f3a19500-78ec-11eb-8eee-f68977acb6f9.png)

If logged in, the user can add any POI to their wishlist. If they are the creator, they can update the information they previously put, or they can delete the POI altogether.
```
//VARIABLES
  const [loggedInUser, updateLoggedInUser] = useState({})

//USER VALIDATION
  async function getLoggedInUser() {
    const userId = getLoggedInUserId()
    const { data } = await axios.get(`/api/user/${userId}`)
    updateLoggedInUser(data)
  }
  
 //ADDING ITEMS TO THE WISHLIST
  async function handleWishlistAdd() {
    const token = localStorage.getItem('token')
    const userId = getLoggedInUserId()

    const newWishlist = loggedInUser.poiWishlist.concat(poiId)
    await axios.put(`/api/user/${userId}`, { poiWishlist: newWishlist }, {
      headers: { Authorization: `Bearer ${token}` }
    })
    alert('Added to your wishlist!')
  }

//DELETING POI
  async function handleDelete() {
    const token = localStorage.getItem('token')
    await axios.delete(`/api/poi/${poiId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    history.push('/poi')
  }

  getLoggedInUser()

//DON'T SHOW IF THE USER IS NOT THE CREATOR
  if (!poi.user) {
    return null
  }
  
 //BUTTONS
  <Link to={`/profile/${poi.user._id}`}><h2>{`Posted by: ${poi.user.firstName}`}</h2></Link>
      {isCreator(poi.user._id) && <Link
        to={`/updatePoi/${poiId}`}
        className="button is-secondary"
      >Update Point of Interest</Link>}
      {isCreator(poi.user._id) && <button
        className="button is-danger"
        onClick={handleDelete}
      >Delete Point of Interest</button>}
      <button className="button is-secondary" onClick={handleWishlistAdd}>Add to your wishlist!</button>
```
**UpdatePoi**
This Component works similarly to the `CreatePoi` Component, except that there are user validation elements to ensure that only the user that created the POI can edit/delete it and the form is pre-populated with the POI's data.
```
  async function handleSubmit(event) {
    event.preventDefault()
    const token = localStorage.getItem('token')
    try {
      const { data } = await axios.put(`/api/poi/${poiId}`, formData, {
        headers: { Authorization: `Bearer ${token}` }
      })
      
      history.push(`/poi/${data._id}`)
    } catch (err) {
      console.log(err.response.data)
    }
  }
```

**Map**
Using Mapbox, I also created a map of all of the POIs in my API. I included both the drop-down filter and the search bar on this page. Initially, I had the POIs marked with typical map markers but I thought that, in the case of our targeted user, being able to easily recogize the name of a site would be more beneficial than blind tapping on markers.

I defined the starting state: 
```
  const [viewPort, updateViewPort] = useState({
    height: '100vh',
    width: '100vw',
    zoom: 10.1,
    latitude: 51.515,
    longitude: -0.078
  })
  ```

I spread out all my viewport properties into my Map component as props, with an event listener for when the viewport changes: 
```
<MapGL
    // ? Spread out all my viewport properties into the MapGL component
    // ? as props.
    {...viewPort}
    // ? Event listener for when the viewport changes..
    onViewportChange={(viewPort) => updateViewPort(viewPort)}
    mapboxApiAccessToken={'XXX'}>
```
I wrapped all the data in the `filterPoi()` function and mapped out the POIs, making each one a clickable link that will take the user to the individual POI page: 
```
 {filterPoi().map((poi, i) => {
      return <div key={i}>
        <Marker
          key={i}
          latitude={poi.latlng[0]}
          longitude={poi.latlng[1]}
        >
          <Link to={`poi/${poi._id}`}>
            <p className="map-label">{poi.name}</p>
          </Link>
        </Marker>
      </div>
    }
  ```
 I did the exact same for the Food and Drink Map, just changing the API fetch request. This is also how I implemented the maps into the individual POI and restaurant pages (although I did not make the map labels links).
 
 **Footer**
 On my quest for accessibilty, I implemented a site map in our footer with clearly defined links to each page of our website (save individual POI and restaurant pages).

## Takeaways
### Wins
* Outstanding teamwork 
* The creation of my API. I love this side of the backend and I was thrilled to be able to test out my skills in this area
* Bulma. This was the first time I've used a CSS framework on a project and it was an excellent learning experience 
* We created a real MERN full-stack application! It makes the past 2 months of learning feel very real 


### Challenges
* Digital communication and planning (as we cannot be with each other in person)
* Navigating asynch functions and promises

### Future features
* Mobile responsiveness
* Comments
* Likes
* Photo library
* More uniform styling on the `SinglePoi` pages
* More POI API data

### Key learnings
* Learning about W3C accessibility standards. I tried to implement as many as I could and that research and implementation were an excellent learning experience
  -Alternative text for each image
  -Clearly identified captions/headers
  -Site map
  -Thorough navigation bar (I did not code it, but I was active in designing the wireframe)
  -Multiple search/filter options
  -Consistent styling/colors
* I learned a lot about London while making the API. The fun facts on each POI are especially interesting!
* Learning how to code in a team (which I think we did very well!). This encompasses *several* elements and I am so grateful that we had the chance to do this project and learn these essential lessons:
  -Git merging
  -Planning and delegating tasks
  -Communication
  -Giving and receiving constructive criticism 
  -Working with people with different styles/hours than you
  -Helping out/encouraging your teammates when they are stuck
