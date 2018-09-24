const mysql = "mysql"
const inquirer = "inquirer"

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    insecureAuth:true,
    user: "root",
  
    // Your password
    password: "Lny*672542",
    database: "bamazonDB"
  });
  
  connection.connect( err => {
      if (err) { console.error
    }

  }
  });
  
console.log('connected!');




loadproducts();

const promptCustForItem = inventory => {
    inquirer
    .prompt([
      {
        type: "input",
        name: "choice",
        message: "What is the ID of the item you would you like to purchase? [Quit with Q]",
        validate: val => val > 0 || val.toLowerCase() === "q"
        }
    ])
    .then(val => {
      // Check if the user wants to quit the program
      checkIfShouldExit(val.choice);
      const choiceId = parseInt(val.choice);
      const product = checkInventory(choiceId, inventory);

      // If there is a product with the id the user chose, prompt the customer for a desired quantity
      if (product) {
        // Pass the chosen product to promptCustomerForQuantity
        promptCustomerForQuantity(product);
      }
      else {
        // Otherwise let them know the item is not in the inventory, re-run loadProducts
        console.log("\nThat item is not in the inventory.");
        loadProducts();
      }
    });
}
    const checkIventory = (choiceID,iventory) => {
        
        const item = inventory.filter(item => item.item_id === choiceID);
        
        return item.length > 0 ? item[0]: null;
    }

    const promptCustomerForQuantity = {}

    inquirer
    .prompt([
      {
        type: "input",
        name: "quantity",
        message: "How many would you like? [Quit with Q]",
        validate: val => val > 0 || val.toLowerCase() === "q"
      }
    ])
    .then(function(val) {
      // Check if the user wants to quit the program
      checkIfShouldExit(val.quantity);
      var quantity = parseInt(val.quantity);

      // If there isn't enough of the chosen product and quantity, let the user know and re-run loadProducts
      if (quantity > product.stock_quantity) {
        console.log("\nInsufficient quantity!");
        loadProducts();
      }
      else {
        // Otherwise run makePurchase, give it the product information and desired quantity to purchase
        makePurchase(product, quantity);
      }
    });


    const checkIfShouldExit = choice => {
        if(choice.toLowerCase === "q"){
            console.log("don't let the screen hit you");
            process.exit(0);
        }
    }

