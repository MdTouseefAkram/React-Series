# React

# we have to configure tailwind and we have to configure postCSS.
# Parcel (bundler) will use postcssrc to understand tailwind. so postcssrc is a kind of way that our projects understands what is written inside tailwind.
# go to tailwind css web page and click get started and selcect framework guides parcel.

# Install Tailwind CSS with Parcel
Setting up Tailwind CSS in a Parcel project.

Create your project
Start by creating a new Parcel project if you don’t have one set up already. The most common approach is to add Parcel as a dev-dependency to your project as outlined in their getting started guide.

Terminal

mkdir my-project
cd my-project
npm init -y
npm install -D parcel
mkdir src
touch src/index.html
Install Tailwind CSS
Install tailwindcss and its peer dependencies via npm, and then run the init command to generate tailwind.config.js.

Terminal

npm install -D tailwindcss postcss
npx tailwindcss init
Configure PostCSS
Create a .postcssrc file in your project root, and enable the tailwindcss plugin.

.postcssrc

{
  "plugins": {
    "tailwindcss": {}
  }
}
Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.

tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
Add the Tailwind directives to your CSS
Create a ./src/index.css file and add the @tailwind directives for each of Tailwind’s layers.

index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

Start your  project.

## Performance
It’s tiny — never ship unused CSS again.

Tailwind automatically removes all unused CSS when building for production, which means your final CSS bundle is the smallest it could possibly be. In fact, most Tailwind projects ship less than 10kB of CSS to the client.

Never be duplicate of css.

# we can made dark mode very easily by tailwind using "dark" class.
# Best way to start filling css by staring with margin and padding.

# pros-
- Parcel includes only css which is required on web page while bundling.
- Tailwind has classes but tailwind only import css which is required to our project. It does not bring all classes into our project which makes project heavy. And if we use m-4 100 times in our code then tailwind import this class in our code once ,it not importing again and again. so tailwind is very lightweight. Tailwind automatically removes unused css when bundling for production.
