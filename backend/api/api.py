from fastapi import FastAPI
from fastapi import FastAPI, UploadFile, File
from fastapi.responses import Response
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.version = "0.1.9"
app.title = "Gurnr API"

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/", summary="Check status")
def get_status():
    return {"status": "alive"}

@app.post("/echo-image", summary="Echo the image you upload")
async def echo_image(file: UploadFile = File(...)):
    data = await file.read()
    return Response(
        content=data,
        media_type=file.content_type or "application/octet-stream"
    )