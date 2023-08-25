# ruby-react-mui-dashboard
- Latest Ruby on Rails with Puma, sidekiq, sending email, and file uploading 
- Latest React, MUI, Redux, and axios

## Features
- Ruby version 3.1.2
- Ruby on Rails 7.x
- Node 16.17.0
- yarn 1.22.9

## Installation

```sh

# install bundler if not available
gem install bundler
# install gem dependencies
bundle install
# create database
# update config/database.yml details if needed
rails db:create
# migrate tables
rails db:migrate
# start server
rails s
# or 
bin/dev
```

## Enhancement

### Creating api controller
```sh
rails g controller api/(controllerName) --no-helper --no-assets --no-template-engine
```
