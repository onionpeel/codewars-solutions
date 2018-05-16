// Mary wrote a recipe book and is about to publish it, but because of a new European law, she needs to update and include all measures in grams.
// Given all the measures in tablespoon (tbsp) and in teaspoon (tsp), considering 1 tbsp = 15g and 1 tsp = 5g, append to the end of the measurement the biggest equivalent integer (rounding up).
// Examples
// "2 tbsp of butter"    -->  "2 tbsp (30g) of butter"
// "1/2 tbsp of oregano" -->  "1/2 tbsp (8g) of oregano"
// "1/2 tsp of salt"     -->  "1/2 tbsp (3g) of salt"
// "Add to the mixing bowl and coat well with 1 tbsp of olive oil & 1/2 tbsp of dried dill" -->
// "Add to the mixing bowl and coat well with 1 tbsp (15g) of olive oil & 1/2 tbsp (8g) of dried dill"

function convertRecipe(recipe){

  var tbspConvert = (value) => {
    if (value.indexOf("/") > -1) {
      var split = value.split('/');
      value = parseInt(split[0], 10) / parseInt(split[1], 10);
    };
    value = Math.ceil(value * 15);
    return `(${value}g)`;
  };

  var tspConvert = (value) => {
    if (value.indexOf("/") > -1) {
      var split = value.split('/');
      value = parseInt(split[0], 10) / parseInt(split[1], 10);
    };
    value = Math.ceil(value * 5);
    return `(${value}g)`;
  };

  var recipeArray = recipe.split(' ');

  var recipeIndex;
  var recipeValue;
  var tbspValue;
  var insertIndex;

  for (let i = 0; i < recipeArray.length; i++) {
    if (recipeArray[i] === 'tbsp') {
      recipeIndex = i - 1;
      recipeValue = recipeArray[recipeIndex];
      tbspValue = tbspConvert(recipeValue);

      insertIndex = i + 1;
      recipeArray.splice(insertIndex, 0, tbspValue);
    };
  };

  for (let j = 0; j < recipeArray.length; j++) {
    if (recipeArray[j] === 'tsp') {
      recipeIndex = j - 1;
      recipeValue = recipeArray[recipeIndex];
      tspValue = tspConvert(recipeValue);

      insertIndex = j + 1;
      recipeArray.splice(insertIndex, 0, tspValue);
    };
  };

  recipeArray = recipeArray.join(' ');
  return recipeArray;
};
