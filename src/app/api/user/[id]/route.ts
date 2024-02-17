import prisma from "@/app/lib/prisma";
import {NextRequest, NextResponse} from 'next/server';


export async function GET(request: NextRequest, {params}: { params: { id: string } }) {
    const id = params.id;

    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(id),
        },
    });

    if (!id) {
        return NextResponse.error();
    } else {
        return NextResponse.json(user);
    }
}

export async function DELETE(req: NextRequest, {params}: { params: { id: string } }) {
    const id = params.id;


    const deleteUser = await prisma.user.delete({
        where: {
            id: parseInt(id),
        },
    });

    if (!id) {
        return NextResponse.error();
    } else {
        return NextResponse.json({success: 1, message: "Delete success"});
    }
}

export async function PUT(req: NextRequest, {params}: { params: { id: string } }) {
    const id = params.id;
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(id),
        },
    });
    const {name} = await req.json();
    const updatedUser = await prisma.user.update({
        where: {
            id: parseInt(id),
        }, data: {
            name: name,
        },
    });

    if (!id) {
        return NextResponse.error()
    } else {
        return NextResponse.json({success: 1, user: updatedUser, message: "Update success"});
    }
}


