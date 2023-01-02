import { rest } from "msw";
import { avatarResponse } from "./api";

export const handlers = [
  rest.get("/avatar", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(avatarResponse));
  }),
];
