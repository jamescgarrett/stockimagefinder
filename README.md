#####This project is still under development, but feel free to play around with what is currently working...
---

# Stock Image Searcher

Search stock images from multiple sources at once

### Server Setup
1) Create folder in server directory labeled "_config".
2) Visit GettyImages, Shutterstock and 123rf to set up accounts for API access.
3) Create the following json files within "_config":
**gettyimages.json**
```json
{
    "name": "Getty Images",
    "api_key": "YOUR_API_KEY",
    "client_secret": "YOUR_CLIENT_SECRET",
    "url": "https://api.gettyimages.com/v3/search/images?page_size=50&fields=id,date_created,thumb,referral_destinations&sort_order=newest&orientations={orientation}&graphical_styles={style}&phrase={query}",
    "style_photo_string": "photography",
    "style_illustration_string": "illustration",
    "style_all_string": "photography,illustration",
    "orientation_landscape_string": "Horizontal",
    "orientation_portrait_string": "Vertical",
    "orientation_all_string": "Horizontal,Vertical",
    "header_type": "apikey",
    "header_key": "Api-Key"
}
```

**shutterstock.json**
```json
{
    "name": "Shutterstock",
    "client_id": "YOUR_CLIENT_ID",
    "client_secret": "YOUR_CLIENT_SECRET",
    "url": "https://api.shutterstock.com/v2/images/search?per_page=50&sort=newest&orientation={orientation}&image_type={style}&query={query}",
    "style_photo_string": "photo",
    "style_illustration_string": "illustration",
    "style_all_string": "photo",
    "orientation_landscape_string": "horizontal",
    "orientation_portrait_string": "vertical",
    "orientation_all_string": "horizontal",
    "header_type": "basic"
}
```

**one23rf.json**
```json
{
    "name": "One23rf",
    "url": "http://api.123rf.com/rest/?method=123rf.images.search&apikey=YOUR_API_KEY&perpage=50&orderby=latest&orientation={orientation}&media_type={style}&keyword={query}",
    "style_photo_string": "0",
    "style_illustration_string": "1",
    "style_all_string": "all",
    "orientation_landscape_string": "0",
    "orientation_portrait_string": "1",
    "orientation_all_string": "all"
}
```
4) Run ```make dev``` and then ```make run``` to satrt Go server.

---

### Front end
A quick (un-finished) React app is added to this repo for displying a front end, but anything can be used  as long as it's placed in the "public" directory of the server.
