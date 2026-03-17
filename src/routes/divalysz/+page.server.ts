import { GOOGLE_APP_PASS, GOOGLE_USER } from "$env/static/private";
import type { Actions, RequestEvent } from "@sveltejs/kit";
import * as nm from "nodemailer";

const transporter = nm.createTransport({
	service: "gmail",
	auth: {
		user: GOOGLE_USER,
		pass: GOOGLE_APP_PASS,
	},
});

export const actions: Actions = {
	default: async ({ request }) => {
		let data = await request.formData();
		let info = transporter.sendMail({
			from: "GOOGLE_USER",
			to: data.get("email")?.toString(),
			subject: `Levél érkezett ${data.get("name")} nevű felhasználótól!`,
			text: data.get("message")?.toString(),
		});
	},
} satisfies Actions;
