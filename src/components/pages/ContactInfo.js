import React from 'react';

export default function Contact () {
  return (
    <div className="body">
      <h1>Contact Me</h1>
      <form>
        <div className="form-group">
          <label for="FormControlInput1">Name:</label>
          <input 
          type="text"
          class="form-control"
          id="FormControlInput1"
          placeholder="MT"/>
        </div>
        <div class="form-group">
          <label for="FormControlInput2">Email address:</label>
          <input type="email" class="form-control" id="FormControlInput2" placeholder="name@email.com"/>
        </div>
        <div class="form-group">
          <label for="FormControlText">Message:</label>
          <textarea class="form-control" id="FormControlText" rows="4"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
}

 
    