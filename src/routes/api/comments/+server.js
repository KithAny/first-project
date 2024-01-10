import { comments } from "$lib/comments.js";
import {json} from '@sveltejs/kit'

export function GET(){
    return json(comments);

    // return new Response(JSON.stringify(comments),{
    //     headers:{
    //         'Content-Type':'application/json'
    //     }
    // });
}

export async function POST(requestEvent){

    const {request} = requestEvent;
    const {text} = await request.json();

    const newComment = {
        id:comments.length+1,
        text
    };

    comments.push(newComment) // push a new object to the comment array
    return json(newComment, {status:201});

}