"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function signUpWithEmailAndPassword(data: {
	email: string;
	password: string;
	confirm: string;
}) {
	const supabase = await createSupabaseServerClient();
	const result = await supabase.auth.signUp({
		email: data.email,
		password: data.password,
	});
	return JSON.stringify(result);
}

export async function signInWithEmailAndPassword(data: {
	email: string;
	password: string;
}) {
	const supabase = await createSupabaseServerClient();
	const result = await supabase.auth.signInWithPassword(data);
	return JSON.stringify(result);
}

export async function loginWithGithub() {
	const supabase = await createSupabaseServerClient();

	supabase.auth.signInWithOAuth({
		provider: "github",
		options: {
			redirectTo: `http://localhost:3000/auth-server/callback`,
		},
	});
}
