'use server'
import prisma from "@/app/lib/prisma";
import {NextRequest, NextResponse} from 'next/server';

export async function GET(res: NextResponse) {
    try {
        const posts = await prisma.user.findMany();
        return NextResponse.json(posts);
    } catch (error) {
        console.error("Error fetching user data:", error);
        //@ts-ignore
        res.status(500).json(error);
    }
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    const {name} = body;

    const newUser = await prisma.user.create({
        data: {
            name: name,
        },
    });
    return NextResponse.json({"success": 1, "message": "create success", "user": newUser});
}
