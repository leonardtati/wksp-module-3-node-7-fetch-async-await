//I need a place in the index.html to display the joke?
//When I select a joke I request GET the information to be displayed
//In the HTML that is where I would put my getJoke()
//When I hit the button I POST the joke to be displayed
//that is where my handlesubmit() should go in the HTML
//THE FUNCTIONS WE WROTE EX 3-5 ARE ALREADY FETCHING FROM THE APIS.

const handleSubmit = event => {
  event.preventDefault();

  const type = document.getElementById("type").value;

  fetch("/joke", {
    method: "POST",
    body: JSON.stringify({ type: type }),
    headers: {
      'Accept': "application/json",
      "Content-Type": "application/json"
    },
  })
    .then(data => {
      console.log("*****************");
      console.log("data: ",data);
      //console.log("JSON data", JSON.parse(data));
      return data.json();
    })
    .then(data => {
        console.log("data after: ",data);
    
      if (data !== undefined) {
        document.getElementById("theJoke").innerHTML = data.data;
      }
    });
};
