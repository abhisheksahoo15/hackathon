from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Setting up templates
templates = Jinja2Templates(directory="templates")

# Serve static files (CSS, JS, Images)
app.mount("/static", StaticFiles(directory="static"), name="static")

# Route for Home Page
@app.get("/")
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request, "title": "Hackathon Hub"})

# Route for About Page
@app.get("/about")
async def about(request: Request):
    return templates.TemplateResponse("about.html", {"request": request, "title": "About Us"})

# Route for Schedule Page
@app.get("/schedule")
async def schedule(request: Request):
    return templates.TemplateResponse("schedule.html", {"request": request, "title": "Schedule & Timeline"})

# Route for Dashboard Page
@app.get("/dashboard")
async def dashboard(request: Request):
    return templates.TemplateResponse("dashboard.html", {"request": request, "title": "Dashboard"})

# Route for Contact Page
@app.get("/contact")
async def contact(request: Request):
    return templates.TemplateResponse("contact.html", {"request": request, "title": "Contact Us"})

# Route for Sponsors Page
@app.get("/sponsors")
async def sponsors(request: Request):
    return templates.TemplateResponse("sponsor.html", {"request": request, "title": "Our Sponsors"})

# Route for Register Page
@app.get("/register")
async def register(request: Request):
    return templates.TemplateResponse("register.html", {"request": request, "title": "Register Now"})

# Route for Prizes & Certificates Page
@app.get("/prizes")
async def prizes(request: Request):
    return templates.TemplateResponse("prize.html", {"request": request, "title": "Prizes & Certificates"})

# Route for Submission Guidelines Page
@app.get("/rules")
async def submission_guidelines(request: Request):
    return templates.TemplateResponse("rules.html", {"request": request, "title": "Submission Guidelines"})

