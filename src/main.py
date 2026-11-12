from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

templates.env.globals["nav_items"] = [
    {"route": "home", "path": "/home.html", "label": "Overview"},
    {"route": "analysis", "path": "/plantAnalysis.html", "label": "AI Telemetry"},
    {"route": "container", "path": "/container.html", "label": "Container Info"},
    {"route": "edit", "path": "/edit.html", "label": "Edit Plants"},
    {"route": "login", "path": "/login.html", "label": "Logout"},

]

@app.get("/", response_class=HTMLResponse)
def login(request: Request):
    return templates.TemplateResponse(
        request=request, name="login.html"
    )

@app.get("/home.html", response_class=HTMLResponse)
def home(request: Request):
    return templates.TemplateResponse(
        request=request, name="home.html"
    )

@app.get("/plantAnalysis.html", response_class=HTMLResponse)
def analysis(request: Request):
    return templates.TemplateResponse(
        request=request, name="plantAnalysis.html"
    )

@app.get("/container.html", response_class=HTMLResponse)
def container(request: Request):
    return templates.TemplateResponse(
        request=request, name="container.html"
    )

@app.get("/edit.html", response_class=HTMLResponse)
def edit(request: Request):
    return templates.TemplateResponse(
        request=request, name="edit.html"
    )



@app.get("/login.html", response_class=HTMLResponse)
def login(request: Request):
    return templates.TemplateResponse(
        request=request, name="login.html"
    )

