"use client";
import { Button } from "@/components/ui/button";
import createSupabaseBrowerClient from "@/lib/supabase/client";
import React from "react";

export default function AuthForm() {
	const supabase = createSupabaseBrowerClient();

	const loginWithGithub = async () => {
		await supabase.auth.signInWithOAuth({
			provider: "github",
			options: {
				redirectTo: `${location.origin}/oauth/callback`,
			},
		});
	};

	return (
		<div className="space-y-5">
			<h1>Login with oAuth</h1>
			<Button className="w-full" onClick={loginWithGithub}>
				Login with Github
			</Button>
		</div>
	);
}
