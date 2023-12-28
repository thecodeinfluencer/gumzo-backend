## Node.js Express GumzoAI Chat API

## About
A backend to serve a reactjs chat application.\
`nodejs` `ai` `express.js` `gpt`

## Setup

1. Add `.env` with the contents below:
```properties
OPENAI_API_KEY = ""
```
2. Run `npm run dev`

## Deployment

This project is deployed to **Google Cloud App Engine**. To deploy it, do the following:
1. Create an `app.yml` file with the following:
   ```
   runtime: nodejs20

   instance_class: F2

   env_variables:
     OPENAI_API_KEY: ""
   ```
3. Run `gcloud app deploy`

## Production 
The project is hosted at:
[gumzoai.el.r.appspot.com](https://gumzoai.el.r.appspot.com)

