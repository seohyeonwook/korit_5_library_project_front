import instance from "../utils/instance"

export const oAtuh2MergeRequest = async (data) => {
    return await instance.post("/oauth2/merge", data);
}