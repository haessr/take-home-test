# README

### Installing Tools

You need Ruby, bundler, node.js,

**Ruby**

1. Install a ruby version manager: [rvm](https://rvm.io/) or [rbenv](https://github.com/rbenv/rbenv)
1. when you cd into the project directory, let your version manager install the ruby version in `.ruby-version`. Right now that's Ruby 3.0.0
1. `gem install bundler`

**node.js**

1. (Recommended) Install [nvm](https://github.com/nvm-sh/nvm#installing-and-updating), which is a **n**ode **v**ersion **m**anager.
1. Install a current LTS version of Node. v14.15.4 works.
1. Install [yarn](https://classic.yarnpkg.com/en/docs/install). On Ubuntu, [make sure you install it from the official Yarn repo instead of cmdtest](https://classic.yarnpkg.com/en/docs/install/#debian-stable).

### Running the app

(*on a Mac or Linux machine*)

1. `git clone git@github.com:haessr/take-home-test.git` clone the repo to your local machine.
1. `cd take-home-test/`
1. `bundle install` to install all the Ruby dependencies.
1. `yarn install` to install all the Javascript dependencies.
1. `bin/rails db:create db:migrate` does not require running local postgres

### Running the development server

1. `bin/rails db:seed:replant` to delete all existing data and load sample data into the database
1. `bin/rails server` run server

### Heroku Hosted Version

https://haessr-tft-takehometest.herokuapp.com/

***Credentials***

1. `email: test@example.com`
1. `password: password`

