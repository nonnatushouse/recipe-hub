import ck from "./Images/citronkaka.png"
import dk from "./Images/dumlekaka.png"
import kk from "./Images/kladdkaka.png"
import kok from "./Images/kolakakor.png"
import sk from "./Images/sockerkaka.png"

export function getRecipes() {

    return [
        {   title: "Citronkaka",
            path: "citronkaka",
            image: ck,
            ingredients: ["Crust:", "125g plain flour", "115g softened butter", "30g icing sugar", "Pinch of salt", "  ----  ", "Filling:", "200g granulated sugar", "20g plain flour", "1/2tsp baking powder", "Pinch of salt", "Zest of 2 lemons", "60ml fresh lemon juice"],
            description: ["Preheat oven to 175 degrees Celcius", "Combine flur, icing sugar and salt for the crust. Mix until resenmbles coarse crumbs.",
        "Press mixture evenly into the bottom of a 20x20cm baking tin lined with parchment paper. This forms the crust. Bake for 15-20 minutes, or until lightly golden.",
    "In another bowl, whisk together granulated sugar, flour, baking powder and salt. Add eggs, lemon zest and lemon juice. Whisk until well combined and smooth.",
"Pour lemon filling onto baked crust while it's still hot. Return the pan to the oven and bake for an additional 20-25 minutes, or until the filling is set and no longer jiggles when you gently shake the pan.",
"Remove the pan from the oven and let it cool completely on a wire rack. Once cool, you can optionally dust the top with icing sugar.",
"Cut into squares. Serve at room temperature or chilled"],
            link: ""
        },        
        {   title: "Dumlekaka",
            path: "dumlekaka",
            image: dk,
            ingredients: ["Mixture:", "250g butter", "9dl oats", "1/2tsp salt", "4dl sugar", "2tbs vanilla sugar", "2tsp baking powder", "2 eggs", "1.5dl light syrup", "220g Dumle(TM)", " ----- ", "Topping:", "200g dark chocolate"],
            description: ["'Dumlekaka', aka 'Björn's favourite'.", "Look I'll be honest, this recipe used to exist on a blog but sadly it was taken down, so there is none.",
        "I just literally mix everything together in a bowl and spread it in a pan. Put in the oven at 200 degrees Celcius for ~30 minutes. Chop dark chocolate and spread on top. Voila!",
    "(One important side note. The dark chocolate topping has a way of melting slightly and getting on people's faces as they eat. So if you have a piece, check for that!) "],
            link: ""
        },        
        {   title: "Kladdkaka",
            path: "kladdkaka",
            image: kk,
            ingredients: [""],
            description: ["This one is available online:"],
            link: "https://www.coop.se/recept/tryffeltarta-med-varma-hjortron-och-vispad-gradde/"
        },        
        {   title: "Kolakaka",
            path: "kolakaka",
            image: kok,
            ingredients: ["100g butter", "1dl sugar", "1tbs vanilla sugar", "1tbs light syrup", "2dl flour", "1tsp baking powder"],
            description: ["Ooh, this one's real easy. Mix everything together. Split mixture into two pieces and spread across a baking sheet. Put in the oven at 180 degrees Celcius for 10-15 minutes or until golden brown.", "Cut into thin slices while it's still warm and soft (it will set after a few minutes. Enjoy!"],
            link: ""
        },        
        {   title: "Sockerkaka",
            path: "sockerkaka",
            image: sk,
            ingredients: ["Mixture:", "100g butter", "1dl milk", "3 large eggs", "2dl sugar", "3dl flour", "2tsp baking powder", "2tsp vanilla sugar", "Pinch of salt", " ----- ", "Seasoning:", "1/2dl sugar", "1/4dl brown sugar", "2tsp cinnamon", "1tsp cardamom"],
            description: ["I will level with you, I did not bake this one and I never have. It's from a cookbook by Camilla Hamid (Kaka på kaka).", "If you really want to know, contact me and I'll send you the recipe :D"],
            link: ""
        }
    ]


}