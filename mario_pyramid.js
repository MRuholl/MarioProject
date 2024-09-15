let pyramidHeight = prompt("How many layers should the pyramid have?");
pyramidHeight = parseInt(pyramidHeight);

printPyramid(pyramidHeight);
// TODO #2
// Take in user input for the height



/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {

    // TODO #1
    // print that pyramid!

    let rows = height;
    let str = "";

    for(let i=1; i <= rows; i++){  //outer loop
        
        for(let j=0; j<rows-i; j++){//inner loop
      
          str += "."; //this adds a space to the end of the string.
          
        }
        for(let k=0; k<i; k++){//inner loop
      
          str += "#"; //this adds a # to the end of the string.
             
        }
        str += "#\n"; //adds a # to the string so that the top doesn't end with only 1 #
        
      }
      console.log(str);  //once a row is done we print it out
      
      const para = document.createElement("p");
      const node = document.createTextNode(str);
      para.appendChild(node);
      const element = document.getElementById("pyramid");
      element.appendChild(para);
    }