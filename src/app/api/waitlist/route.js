import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req){
    const payload = await req.json()

    console.log(payload)

    const base_url = "https....."

    try {
        const resp = await axios.post(base_url, payload)
        const result = resp.data
        if(result.status === "00"){
            return NextResponse.json(result)
        }else{
            return NextResponse.json(result)
        }
    } catch (error) {
        console.log(error)
    }
}