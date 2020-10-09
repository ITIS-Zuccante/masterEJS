var template = new EJS({
  text: `
    <ul>
      <% for(i = 0; i < the_list.length; i++) { %>
        <li>the_list[i]</li>
      <% } %>
    </ul>
  `
});

document.getElementById('list-wrapper').innerHTML = template.render({ the_list: ["one", "two", "three"] });