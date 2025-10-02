## Presentation

View the full presentation here: [Google Slides Presentation](https://docs.google.com/presentation/d/11PErw70FxRrs8a0peOGtiCbjA3gSWo7L7kouwhYUkts/edit?usp=sharing)

***

## Slide Notes

### Slide 1
**Full-Stack Sprint**  
- Technologies: Deno, Express, DaisyUI  
- Goal: Build a Joke API, fetch it in a website frontend, and deploy it globally

### Slide 2
**Meet Our Stack (The Tools)**  
- **Tailwind:** Utility-first CSS for rapid styling  
- **DaisyUI:** Component library for instant, attractive UI  
- **Deno:** Secure, modern JavaScript/TypeScript runtime  
- **Express:** Standard REST API framework, run via Deno’s npm compatibility  
- **Frontend UI:** DaisyUI + Tailwind CSS  
- **Backend:** Deno + npm:express  
- **Deployment:** Deno Deploy for global, serverless hosting

### Slide 3
**What We’ll Build**  
- A custom Joke API endpoint (`/joke`) returns a random joke as JSON  
- Simple website with a button (“Tell me a joke”) that fetches and displays jokes from the API  
- Both API and site will be deployed/hosted on Deno Deploy for global access

### Slide 4
**Setup Checkpoint**  
- Marks the beginning of setup instructions

### Slide 5
**Step 1: Install Deno**  
- **Mac/Linux:**  
  ```bash
  curl -fsSL https://deno.land/install.sh | sh
  ```
- **Windows:**  
  ```powershell
  irm https://deno.land/install.ps1 | iex
  ```
  Installs the Deno runtime

### Slide 6
**Verify Deno Install**  
- Run in terminal to check version:  
  ```
  deno --version
  ```

### Slide 7
**Step 2: Create GitHub Account**  
- Visit [GitHub](https://github.com/) and sign up for free  
- Tips: Use a fun yet professional username (important for future employers)

### Slide 8
**Building an API**  
- Setting the stage for API development (motivational/attention-getting slide)

### Slide 9
**What is an API?**  
- Connects different apps/devices  
- Controls what information gets shared  
- Lets developers quickly build new features  
- Stands for *Application Programming Interface*  
- Like a restaurant menu: you ask for what you want, and get just that

### Slide 10
**What is Express?**  
- Framework for Node.js for building web APIs  
- Like LEGO for web servers  
- Handles requests, sends responses, creates routes (e.g., `/users`, `/products`), integrates with databases and security

### Slide 11
**VSCode**  
- Coding will happen in VSCode (implied: recommended editor)

### Slide 12
**Our Architecture**  
- Presents an architecture overview for your solution (details not explicit in text)

### Slide 13
**Deno Deploy**  
- Deployment—makes your site and API accessible to the world

### Slide 14
*(Possibly a blank or summary slide)*

***

## Project Overview

This project is a **full-stack sprint** that combines Deno, Express, and DaisyUI to build and globally deploy a Joke API and frontend. The API serves randomized jokes via a single endpoint, while a simple website fetches and displays these jokes. All services are deployed using Deno Deploy for seamless, serverless hosting.

***

## Getting Started

1. **Install Deno**  
   - On Mac/Linux:  
     ```
     curl -fsSL https://deno.land/install.sh | sh
     ```
   - On Windows:  
     ```
     irm https://deno.land/install.ps1 | iex
     ```
2. **Verify Installation**  
   - Run: `deno --version`
3. **Set Up GitHub**  
   - If not already, create a GitHub account at [github.com](https://github.com/).
   - Choose a professional username.

***

## Usage

- **Run the API:**  
  - Start the Express server in Deno.
  - The `/joke` endpoint returns random jokes in JSON.

- **Use the Frontend:**  
  - Open the website.
  - Click the “Tell me a joke” button.
  - The frontend fetches from the API and displays the joke.

- **Deploy Globally:**  
  - Use Deno Deploy to host both the API and the frontend so they’re accessible to anyone.

