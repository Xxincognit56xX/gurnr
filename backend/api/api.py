import os
import secrets
import sys
from pathlib import Path

from fastapi import FastAPI, Request, UploadFile, File
from fastapi.responses import JSONResponse, Response
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.version = "0.1.9"
app.title = "Gurnr API"


def app_data_dir() -> Path:
    if sys.platform == "win32":
        base = Path(os.environ["APPDATA"])
    elif sys.platform == "darwin":
        base = Path.home() / "Library" / "Application Support"
    else:
        base = Path(os.environ.get("XDG_CONFIG_HOME", Path.home() / ".config"))
    return base / "gurnr"


API_TOKEN = secrets.token_hex(32)
token_file = app_data_dir() / "api-token"
token_file.parent.mkdir(parents=True, exist_ok=True)
token_file.write_text(API_TOKEN)
os.chmod(token_file, 0o600)


@app.middleware("http")
async def require_token(request: Request, call_next):
    if not secrets.compare_digest(request.headers.get("x-gurnr-token", ""), API_TOKEN):
        return JSONResponse({"detail": "Forbidden"}, status_code=403)
    return await call_next(request)


dev_port = os.environ.get("PORT", "1212")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        f"http://localhost:{dev_port}",
        f"http://127.0.0.1:{dev_port}",
        "null",
    ],
    allow_credentials=False,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
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
