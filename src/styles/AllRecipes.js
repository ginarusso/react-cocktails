import Pancakes from './images/pancakes.jpg'
import Eggs from './images/eggs.jpg'
import ChocolateChips from './images/chocolate-chip-cookies.jpg'
import CookieDough from './images/cookie-dough.jpg'
import Norwegian from './images/norwegian-apple-cake.jpg'
import Baking from './images/baking.jpg'

const recipes = [
    {
        id: 1,
        title: "Pancakes",
        step1: "Heat a griddle over medium-low heat. In a bowl, mix together dry ingredients. Beat eggs into 1 1/2 cups milk, then stir in 2 tablespoons melted cooled butter. Gently stir this mixture into dry ingredients, mixing only enough to moisten flour; don't worry about a few lumps. If batter seems thick, add a little more milk.",
        step2: "Place a teaspoon or 2 of butter or oil on griddle or skillet. When butter foam subsides or oil shimmers, ladle batter onto griddle. Flip pancakes after bubbles rise to surface and bottoms brown, after 2 to 4 minutes. Cook until second side is lightly browned.",
        step3: "Serve, or hold on an ovenproof plate in a 200-degree oven for up to 15 minutes.",
        imageUrl: Pancakes,
        smImageUrl: Eggs,
        ingredients: ["🥣 2 cups flour", "🥄 2 tsp baking powder", "🧂 1/4 tsp salt", "🥄 1 Tbsp sugar", "🥚 2 eggs", "🥛 1 1/2 to 2 cups milk", "🧈 2 Tbsp butter"]
    },
    {
        id: 2,
        title: "Cookies",
        step1: "Preheat oven to 375. In a mixing bowl, cream together the first five ingredients. After creaming the first five ingredients add the last four and make sure everything is mixed together well.",
        step2: "Drop by tablespoonfuls on to cookie sheets and bake for 9-10 minutes.",
        step3: "For M & M cookies: Replace chocolate chips with M & M plain baking bits.",
        imageUrl: ChocolateChips,
        smImageUrl: CookieDough,
        ingredients: ["🥣 1 cup sugar", "🥄 1/2 cup brown sugar", "🥛 1 cup shortening", "🥄 1 tsp vanilla", "🥚 2 large eggs", "🥣 2 1/4 cups flour", "🥄 1 tsp baking soda", "🧂 1 tsp salt","🍪 1 package of chocolate chips (12 ounces)"]
    },
    {
        id: 3,
        title: "Norwegian Apple Cake",
        step1: "Preheat oven to 350°F. Coat a 9-inch springform pan with nonstick spray. Set aside. Place sliced apples into a large bowl. Sprinkle 3 tablespoons granulated sugar and cinnamon. Stir to coat evenly. Set aside.",
        step2: "In bowl of a stand mixer fitted with paddle attachment mix butter and 1 1/4 cup granulated sugar together on medium speed until creamy, about 2 minutes. Add in eggs one at a time and mix until combined, scraping sides and bottom of bowl as necessary. Add baking powder and mix to incorporate. Turn mixer to low speed and in alternating additions, add flour and milk, beginning and ending with flour, until just combined. Don’t overmix.",
        step3: "To assemble, cover bottom of prepared pan with apples. They can overlap, but you want a single layer. Top apples with cake batter and spread evenly to cover all apples. Press remaining apples into batter vertically making concentric circles in batter. Bake for 55- 65 minutes, or until cake is set in center and a toothpick comes out clean. Allow cake to cool for 15 minutes in pan. Run a knife around edges to release from sides of pan. Serve warm with whipped cream, dusted with powdered sugar, or topped with ice cream.",
        imageUrl: Norwegian,
        smImageUrl: Baking,
        ingredients: ["🍏 4 Granny Smith apples, peeled and sliced 1/2-inch thick", "🥄 3 Tbsp extra fine granulated sugar", "🥄2 Tbsp ground cinnamon", "🧈 1 cup salted butter, room temperature", "🥣 1 1/4 cups extra fine granulated sugar", "🥚 3 eggs", "🥄1 1/2 tsp baking powder", "🥛 1/2 cup milk", "🥣 2 cups all-purpose flour"]
    }
]  

export default recipes