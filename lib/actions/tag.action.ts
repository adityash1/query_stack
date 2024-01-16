"use server"

import {GetTopInteractedTagsParams} from "@/lib/actions/shared.types";
import {connectToDatabase} from "@/lib/mongoose";
import User from "@/database/user.model";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
    try {
        await connectToDatabase();
        const {userId, limit = 3 } = params;

        const user = User.findById({userId})
        if (!user) throw new Error("User not found");

        // TODO:  Find interactions for the user and group by tags

        return [{_id: '1', name: 'tag1'}, {_id: '2', name: 'tag2'}, {_id: '3', name: 'tag3'}]
    } catch (error) {
        console.log(error)
        throw error
    }
}