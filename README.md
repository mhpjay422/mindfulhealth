# README

## MindfulHealth - New Developer Setup

### Get the code

```md
git clone https://github.com/mhpjay422/mindfulhealth
cd mindfulhealth
```

### Install appropriate version of ruby

Using either `rvm` or `rbenv`:

```md
rbenv install 3.2.2
rvm install 3.2.2
```

### Install gems and such

Install ruby libraries:

```md
bundle install
```

Install javascript libraries via yarn:

```md
npm install --global yarn
```

You _might_ need to `sudo` it:

```md
sudo npm install --global yarn
```

Then run:

```md
yarn install
```

### Set up databases

```md
rails db:create
rails db:migrate
rails db:seed
```

### ensure you have pre-reqs

To install [postgres](https://www.postgresql.org/):

```md
brew install postgresql
```

### Ensure all is running well

Run the tests:

```md
rspec spec
```

Install the `foreman` gem and use it:

```md
gem install foreman
bin/dev
```

The above will run the Procfile and:

- Boot the app locally
- Compile javascript
- Build CSS with tailwind

## Explore the app a bit

- The app will load a list of therapists.
- Use the filter dropdowns to select options (e.g., location, insurance, remote).
- Click the filter button to apply filters and update the therapist list.

This setup guide should get you up and running with the MindfulHealth project. Happy coding!
