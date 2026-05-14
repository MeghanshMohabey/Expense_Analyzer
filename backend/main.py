from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware

import pandas as pd

app = FastAPI()

app.add_middleware(
    CORSMiddleware,

    allow_origins=["*"],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],
)

@app.post("/upload")
async def upload(file: UploadFile):

    df = pd.read_csv(file.file)

    total_expense = df["Amount"].sum()

    income = 60000

    savings = income - total_expense

    category_data = (
        df.groupby("Category")["Amount"]
        .sum()
        .to_dict()
    )

    highest_category = (
        df.groupby("Category")["Amount"]
        .sum()
        .idxmax()
    )

    insight = f"{highest_category} is your highest expense category."
    
    return {

        "totalExpense": int(total_expense),
        
        "categoryData": category_data,

        "highestCategory": highest_category,

        "savings": int(savings),

        "insight": insight
    }