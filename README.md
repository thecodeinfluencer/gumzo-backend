## Gumzo AI - Backend

## About
A backend to serve a reactjs chat application.\
`nodejs` `ai` `express.js` `gpt`

## Setup

1. Add `.env` with the contents below:
   ```properties
   OPENAI_API_KEY = ""
   ```
2. Run `npm run dev`
3. The request body looks like this:
   ```json
   {
    "conversation": [
        {
            "owner": "Human",
            "message": "Hello"
        },
        {
            "owner": "AI",
            "message": "Hi there! Nice to meet you. How can I help you today?"
        }
    ]
   }
   ```

## Deployment

This project is deployed to **Google Cloud App Engine**. To deploy it, do the following:
1. Create an `app.yml` file with the following:
   ```yml
   runtime: nodejs20
   instance_class: F2
   env_variables:
     OPENAI_API_KEY: ""
   ```
3. Run `gcloud app deploy`

## Production 

The project is hosted at:
[gumzoai.el.r.appspot.com](https://gumzoai.el.r.appspot.com)

## Frontend

To setup frontend for this app, go to [thecodeinfluencer/gumzo-frontend](https://github.com/thecodeinfluencer/gumzo-frontend)

