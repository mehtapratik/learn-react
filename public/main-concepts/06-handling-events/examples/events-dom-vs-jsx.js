// DOM
<button onclick="activateLasers()">
   Activate Lasers
</button>
   
<a href="#" onclick="console.log('The link was clicked.'); return false">
      Click me
</a>

// JSX
<button onClick={activateLasers}>
   Activate Lasers
</button>

function ActionLink() {
   function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
   }

   return (
      <a href="#" onClick={handleClick}>
         Click me
      </a>
   );
}